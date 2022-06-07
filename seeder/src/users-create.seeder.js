import faker from '@faker-js/faker';
import client from './graphql_client';
import { generateValueBetweenMinAndMax } from './utils';

const mutationCreateAuthUser = `
mutation CreateAuthUserMutation($username: String!, $email: String!, $password: String!, $profileId: ID!, $memberType: MemberType!) {
  __typename
  createAuthUser(data: {username: $username, email: $email, password: $password, profile: {connect: {id: $profileId}}, memberType: $memberType}) {
    id
    username
    email
    memberType
  }
}`;

const mutationCreateProfile = `
mutation CreateProfileMutation($firstname: String!, $lastname: String!, $avatar: String!) {
  __typename
  createProfile(data: {firstname: $firstname, lastname: $lastname, avatar: $avatar}) {
    id
    firstname
    lastname
    avatar
  }
}`;

(async () => {
  /*
   * Create a User (Local Provider)
  */
  const createUser = async ({ username, email, password, firstname, lastname, memberType, avatar }) => {
    try {
      const { createProfile } = await client.request(mutationCreateProfile, { firstname, lastname, avatar });
      const { createAuthUser } = await client.request(mutationCreateAuthUser, { username, email, password, profileId: createProfile.id, memberType });

      if (!createAuthUser) {
        throw new Error(`Can't create the user with username ${createAuthUser.username}!`);
      }

      console.log(`User created with username ${createAuthUser.username}!`)
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * Create a Users via promises
  */
  const createUsers = async (n = 20) => {
    const promises = [];
    for (let i=0; i < n;i++) {
      const genders = ['male', 'female'];
      const gender = genders[generateValueBetweenMinAndMax(0,1)]
      const firstName = faker.name.firstName(gender);
      const lastName = faker.name.lastName(gender);
      const memberTypes = ['Student', 'Lecturer'];
      const memberType = memberTypes[generateValueBetweenMinAndMax(0,1)];
      promises.push(await createUser({username: faker.internet.userName(firstName, lastName), email: faker.internet.email(firstName, lastName), password: 'w84pgmGent', firstname: firstName, lastname: lastName, memberType: memberType, avatar: faker.image.avatar(gender)}));
    }
    return await Promise.all(promises);
  };

  /*
   * Create Models in Auth
  */
  await createUsers(400);

})();