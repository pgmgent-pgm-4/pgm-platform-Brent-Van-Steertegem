import { gql, useQuery } from "@apollo/client";
import { useParams, NavLink } from 'react-router-dom';


const PostDetailsComponent = () => {
  const {id} = useParams();
  const queryGetPost = gql`
    query GetPost {
      posts(where: {id: "${id}"}) {
        id
        title
        body {
          html
        }
        authUser {
          id
          memberType
          username
          profile {
            avatar
            firstname
            lastname
          }
        }
      }
  }`;

  const { loading, error, data } = useQuery(queryGetPost);

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{JSON.stringify(error)}</p>;

    return (
      <div className="post-details">
        <NavLink to={'/blog'}>Return to blog</NavLink>
        <h1>{data.posts[0].title}</h1>
        <p>{data.posts[0].description}</p>
        <div className="" dangerouslySetInnerHTML={{ __html: data.posts[0].body.html }}>
        </div>
      </div>
    )
  };
  return (
    <>
      {
        gqlResultAsJSX()
      }
    </>
  )
};

export default PostDetailsComponent;