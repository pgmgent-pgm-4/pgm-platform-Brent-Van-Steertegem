const Course = (props) => {
  return (
    <td className={props.learningLine} key={props.title}>{props.title}</td>
  )
};

export default Course;