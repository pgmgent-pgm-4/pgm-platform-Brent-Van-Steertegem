import { Table } from 'reactstrap';
import LearningLine from './learning-line.component';

import './curriculum.css';

const CurriculumComponent = (props) => {
  const education = props.curriculum.educations[0];
  return (    
    <Table bordered>
      <thead className='table__head'>
        <tr>
          <th colSpan={4}>
            2022 - 2023
          </th>
          <th colSpan={4}>
            2023 - 2024
          </th>
        </tr>
        <tr>
          <th colSpan={4}>
            Jaar 1
          </th>
          <th colSpan={4}>
            Jaar 2
          </th>
        </tr>
        <tr>
          <th colSpan={2}>
            Semester 1
          </th>
          <th colSpan={2}>
            Semester 2
          </th>
          <th colSpan={2}>
            Semester 3
          </th>
          <th colSpan={2}>
            Semester 4
          </th>
        </tr>
      </thead>
      <tbody>
        {education.learningLines.map(learningLine => {
          return <LearningLine key={learningLine} learningLine={learningLine} courses={education.courses.filter(course => course.learningLine === learningLine)}/>
        })}
      </tbody>
    </Table>
  )
};

export default CurriculumComponent;