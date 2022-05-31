import faker from '@faker-js/faker';
import client from './graphql_client';

const mutationCreateEducation = `
mutation CreateEducationMutation($name: String!, $code: String!) {
  __typename
  createEducation(data: {name: $name, code: $code}) {
    id
    name
    code
  }
}`;

const mutationCreateSpecialization = `
mutation CreateSpecializationMutation($name: String!, $code: String!, $educationId: ID!) {
  __typename
  createSpecialization(data: {name: $name, code: $code, education: {connect: {id: $educationId}}}) {
    id
    name
    code
  }
}`;

(async () => {
  /*
   * Create an Education (Local Provider)
  */
  const createEducation = async ({ name, code, specializations }) => {
    try {
      const { createEducation } = await client.request(mutationCreateEducation, { name, code });
      specializations.forEach(async (specialization) => {
        const name = specialization.map((word) => { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}).join(' ');
        const code = specialization.map((word) => { return word.slice(0, 2).toUpperCase()}).join('');
        await client.request(mutationCreateSpecialization, { name, code,educationId: createEducation.id });
      });

      if (!createEducation) {
        throw new Error(`Can't create education with name ${createEducation.name}!`);
      }

      console.log(`Education created with name ${createEducation.name}!`)
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * Create a Educations via promises
  */
  const createEducations = async (n = 20) => {
    const promises = [];
    for (let i=0; i < n;i++) {
      const words = [faker.word.adjective(), faker.word.noun()]
      const name = words.map((word) => { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}).join(' ');
      const code = words.map((word) => { return word.slice(0, 2).toUpperCase()}).join('');
      const specializations = [];
      const randInt = Math.round(Math.random() * 2) + 1;
      const i = 0;
      while (i < randInt) {
        specializations.push([faker.word.adjective(), faker.name.jobArea()]);
        i++;
      }
      promises.push(await createEducation({ name, code, specializations }));
    }
    return await Promise.all(promises);
  };

  /*
   * Create Models in Auth
  */
  await createEducations();

})();