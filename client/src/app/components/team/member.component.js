import { Card } from "reactstrap";

const Member = (props) => {
  return (
    <Card className='member'>
        <img className='member__avatar' src={props.user.profile.avatar} alt={props.user.username}/>
        <p className='member__name'>
          <span className='member__firstname'>{props.user.profile.firstname}</span> <span className='member__lastname'>{props.user.profile.lastname}</span>
        </p>
    </Card>
  )
};

export default Member;
