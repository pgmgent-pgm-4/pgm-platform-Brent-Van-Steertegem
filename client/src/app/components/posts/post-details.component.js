import { gql, useQuery } from "@apollo/client";


const PostDetailsComponent = ({post}) => {
  const queryGetPost = gql`
  query GetPost {
    posts(where: {id: "${post.id}"}}) {
      where
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
        <h1>{data.post.title}</h1>
        <p>{data.post.description}</p>
        <div className="" dangerouslySetInnerHTML={{ __html: data.post.body.html }}>
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