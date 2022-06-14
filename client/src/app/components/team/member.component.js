const Member = (props) => {
  return (
    <div className='member'>
        <img className='member__avatar' src={props.user.profile.avatar} alt={props.user.username}/>
        <p>
          <span className='member__firstname'>{props.user.profile.firstname}</span> <span className='member__lastname'>{props.user.profile.lastname}</span>
        </p>
    </div>
  )
};

export default Member;
