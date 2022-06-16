import { gql, useQuery } from "@apollo/client";
import { useParams, NavLink } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

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
      <div>
        <Card className='post_detail'>
          <section className='post_detail__heading'>
            <NavLink to={'/blog'}>Return to blog</NavLink>
            <span>
              <img className='post_detail__avatar' src={data.posts[0].authUser.profile.avatar} alt={`${data.posts[0].authUser.username}'s avatar`}/>
              <span>{data.posts[0].authUser.username}</span>
            </span>
          </section>
          <CardBody>
            <CardTitle><h1>{data.posts[0].title}</h1></CardTitle>
            <CardText dangerouslySetInnerHTML={{ __html: data.posts[0].body.html }}></CardText>
          </CardBody>
        </Card>
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