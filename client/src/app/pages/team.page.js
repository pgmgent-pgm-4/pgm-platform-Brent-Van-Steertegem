import { gql, useQuery } from "@apollo/client";
import { TeamComponent } from "../components/team";

const queryGetUsers = gql`
  query GetUsers {
    authUsers {
      memberType
      username
      profile {
        avatar
        firstname
        lastname
      }
    }
}`;

const TeamPage = () => {
  const { loading, error, data } = useQuery(queryGetUsers);

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{JSON.stringify(error)}</p>;

    return (
      <TeamComponent team={data}/>
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

export default TeamPage;