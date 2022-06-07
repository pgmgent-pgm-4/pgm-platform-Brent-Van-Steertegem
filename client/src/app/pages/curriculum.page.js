import { CurriculumComponent } from "../components/curriculum";
import { gql, useQuery } from '@apollo/client';

// import data from './test.json';
const queryGetCurriculum = gql`
  query GetCurriculum {
    educations {
      name
      courses {
        hoursPerWeek
        learningLine
        period
        specialization
        studyPoints
        title
        lecturers {
          profile {
            firstname
            lastname
            avatar
          }
          username
        }
      }
      learningLines
    }
  }`;

const CurriculumPage = () => {

  const { loading, error, data } = useQuery(queryGetCurriculum);

  const gqlResultAsJSX = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{JSON.stringify(error)}</p>;

    return (
      <CurriculumComponent curriculum={data}/>
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


export default CurriculumPage;