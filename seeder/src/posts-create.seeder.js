import faker from '@faker-js/faker';
import { htmlToSlateAST } from '@graphcms/html-to-slate-ast';

import client from './graphql_client';
import { generateValueBetweenMinAndMax, generateTimestamps } from './utils';

const mutationCreatePost = `
mutation CreatePostMutation($title: String!, $body: RichTextAST, $authUserId: ID!, $educations: [EducationWhereUniqueInput!]){
  __typename
  createPost(data: {title: $title, body: $body, authUser: {connect: {id: $authUserId}}, educations: {connect: $educations}}) {
    id
    title
    body {
      markdown
    }
    educations {
      id
      name
    }
    authUser {
      id
      username
      email
    }
  }
}`;

const queryGetAuthUsers = `
query GetAuthUsers {
  authUsers {
    id
    username
    email
  }
}`;

const queryGetEducations = `
query GetEducations {
  educations {
    id
    name
  }
}`;

(async () => {
  /*
  *
  */
  const getRandomBody = (n = 1) => {
    let body = '';
    for(let i = 0; i < n; i++) {
      body += `<h2>${faker.lorem.text(1)}</h2><p>${faker.lorem.paragraphs(generateValueBetweenMinAndMax(2, 10), '</p><p>')}</p>`;
    }
    return body;
  }

  // Get all the users
  let { authUsers } = await client.request(queryGetAuthUsers);
  // Get all the educations
  let { educations } = await client.request(queryGetEducations);

  /*
   * Create a Article = Post (Local Provider)
  */
  const createArticle = async ({ title, body, authUserId, educations }) => {
    try {
      const { createPost } = await client.request(mutationCreatePost, { title, body, authUserId, educations});

      if (!createPost) {
        throw new Error(`Can't create the post with title ${createPost.title}!`);
      }

      console.log(`Post created with title ${createPost.title}!`)
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * Create posts via promises
  */
  const createPosts = async (n = 20) => {
    const promises = [];

    for (let i=0; i < n;i++) {
      const authUserId = authUsers[generateValueBetweenMinAndMax(0, authUsers.length - 1)].id;
      const education = educations[generateValueBetweenMinAndMax(0, educations.length - 1)];
      const ast = await htmlToSlateAST(getRandomBody(generateValueBetweenMinAndMax(1, 4))); 
      
      promises.push(await createArticle({title: faker.lorem.sentence(generateValueBetweenMinAndMax(4, 10)), body: { children: ast }, authUserId: authUserId, educations: [education]}));
    };
    
    return await Promise.all(promises);
  };

  /*
   * Create posts
  */
  await createPosts(200);

})();