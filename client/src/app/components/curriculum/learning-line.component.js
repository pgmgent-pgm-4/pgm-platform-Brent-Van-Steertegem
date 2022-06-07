const LearningLine = (props) => {
  const courses = [];
  for(let i = 0; i < 8; i++) {
    const course = props.courses.filter(course => course.period === `Period_${i}`)[0];
    if(course) {
      courses.push(course);
    } else {
      courses.push({alt: `learningLine${i}`});
    }
  }

  return (
    <tr className={'learning_line learning_line--'+props.learningLine}>
      {courses.map(course => {
        return course.title ? <td className={props.learningLine} key={course.title}>{course.title}</td> : <td className={props.learningLine+' learning_line__bg'} key={course.alt}></td>
      })}
    </tr>
  )
};

export default LearningLine;