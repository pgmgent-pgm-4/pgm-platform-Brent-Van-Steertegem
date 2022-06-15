import { Outlet } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import PostSummaryComponent from "./post-summary.component";


const PostsListComponent = () => {
  const queryGetPosts = gql`
    query GetPosts {
      posts {
        id
        title
      }
    }`;
    
  const { loading, error, data } = useQuery(queryGetPosts);

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{JSON.stringify(error)}</p>;

    return (
      <div className="posts-list">
        {data.posts && data.posts.map((post) => (
          <PostSummaryComponent key={post.title.toLowerCase().trim().replaceAll(' ','_')} post={post} />
        ))}
        <Outlet />
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

export default PostsListComponent;