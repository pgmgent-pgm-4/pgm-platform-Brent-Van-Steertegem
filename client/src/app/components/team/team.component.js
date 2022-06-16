import { useState } from 'react';
import Member from './member.component';
import './team.css';

const TeamComponent = (props) => {
  const users = props.team.authUsers;
  const memberTypes = [];
  users.forEach((user) => {
    if (!memberTypes.includes(user.memberType)) {
      memberTypes.unshift(user.memberType);
    }
  });
  memberTypes.unshift('All');
  const [selectedMemberType, setSelectedMemberType] = useState(memberTypes[0]);

  const handleSelectedMemberType = (memberType) => {
    setSelectedMemberType(memberType.target.value);
  }

  return ( 
    <>
      <section className='filter filter--team'>
        {memberTypes && memberTypes.map((memberType) => {
          return (
              <button onClick={handleSelectedMemberType} value={memberType} className={`filter__item${(memberType === selectedMemberType ? ' filter__item--active' : '')}`} key={memberType}>{memberType === 'All' ? 'Iedereen' : memberType === 'Lecturer' ? 'Docenten' : memberType === 'Student' ? 'Studenten' : ''}</button>
          );
        })}
      </section>
      {memberTypes && selectedMemberType === 'All' ? memberTypes.map((memberType) => {
        if (memberType !== 'All') {
          return (
            <div key={memberType} className={`team team--${memberType.toLowerCase()}s`}>
              <h2 className='team__title'>{memberType === 'Lecturer' ? 'Docenten' : memberType === 'Student' ? 'Studenten' : ''}</h2>
              <ul className='team__list'>
                {users && users.filter((user) => {
                  return user.memberType === memberType;
                }).map((user) => {
                  return (
                    <li key={user.username}>
                      <Member user={user}/>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }
        return null;
      }) :
        <div className={`team team--${selectedMemberType.toLowerCase()}s`}>
          <h2 className='team__title'>{selectedMemberType === 'Lecturer' ? 'Docenten' : selectedMemberType === 'Student' ? 'Studenten' : ''}</h2>
          <ul className='team__list'>
            {users && users.filter((user) => {
              return user.memberType === selectedMemberType;
            }).map((user) => {
              return (
                <li key={user.username}>
                  <Member user={user}/>
                </li>
              );
            })}
          </ul>
        </div>
      }
    </>
  )
};

export default TeamComponent;