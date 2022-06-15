import { Table } from 'reactstrap';
import LearningLine from './learning-line.component';

import './curriculum.css';
import { useState } from 'react';

const CurriculumComponent = (props) => {
  const education = props.curriculum.educations[0];
  const specializationSlugs = [];
  education.courses.forEach((course) => {
    course.specialization.forEach((specialization) => {
      if (!specializationSlugs.includes(specialization)) {
        specializationSlugs.push(specialization);
      }
    });
  });
  const specializations = [];
  for (let i = 0; i < specializationSlugs.length; i++) {
    const specialization = specializationSlugs[i];
    specializations.push(specialization.replaceAll('_',' '));
  }   
  const [selectedSpecialization, setSelectedSpecialization] = useState(specializations[0]);
  const [courses, setCourses] = useState(education.courses.filter((course) => {
    return course.specialization.includes(selectedSpecialization.replaceAll(' ','_'));
  }
  ));

  const handleSpecializationChange = (specialization) => {
    setSelectedSpecialization(specialization.target.value);
    const newSpecialization = specialization.target.value.replaceAll(' ','_');
    const newCourses = [];
    education.courses.forEach((course) => {
      if (course.specialization.includes(newSpecialization)) {
        newCourses.push(course);
      }
    });
    setCourses(newCourses);
  }

return ( 
    <div className='curriculum'>
      <p className='filter'>
        {specializations && specializations.map((specialization, i) => {
          return (
            <span key={'specialization'+i}>
              <button onClick={handleSpecializationChange} value={specialization} className={`filter__item filter__item--${specializationSlugs[i]}${(specialization === selectedSpecialization ? ' filter__item--active' : '')}`} key={specialization}>{specialization}</button>
              <span key={`divider_${i}`}>{i < specializations.length -1 ? ' of ' : ''}</span>
            </span>
          );
        })}
      </p>   
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
          <tr>
            <th>
              Periode 1
            </th>
            <th>
              Periode 2
            </th>
            <th>
              Periode 3
            </th>
            <th>
              Periode 4
            </th>
            <th>
              Periode 5
            </th>
            <th>
              Periode 6
            </th>
            <th>
              Periode 7
            </th>
            <th>
              Periode 8
            </th>
          </tr>
        </thead>
        <tbody>
          {education.learningLines && education.learningLines.map(learningLine => {
            return <LearningLine key={learningLine} learningLine={learningLine} courses={courses && courses.filter(course => course.learningLine === learningLine)}/>
          })}
        </tbody>
      </Table>
    </div>
  )
};

export default CurriculumComponent;