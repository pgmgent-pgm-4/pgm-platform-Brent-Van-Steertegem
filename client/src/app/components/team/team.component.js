import { useState } from 'react';
import Member from './member.component';
import './team.css';

const TeamComponent = (props) => {
  const [users, setUsers] = useState(props.team.authUsers);
  return ( 
    <>
      <div className='team team--lecturers'>
        <h2 className='team__title'>Lecturers</h2>
        <ul className='team__list'>
          {users && users.filter((user) => {
            return user.memberType === 'Lecturer';
          }).map((user) => {
            return (
              <li key={user.username}>
                <Member user={user}/>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='team team--students'>
        <h2 className='team__title'>students</h2>
        <ul className='team__list'>
          {users && users.filter((user) => {
            return user.memberType === 'Student';
          }).map((user) => {
            return (
              <li key={user.username}>
                <Member user={user}/>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  )
};

export default TeamComponent;