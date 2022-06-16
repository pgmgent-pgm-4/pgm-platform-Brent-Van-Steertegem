import { NavLink as RRNavLink } from 'react-router-dom';
import { NavItem, NavLink} from 'reactstrap';

import * as routes from '../../routes';

import { useAuth } from '../../context/auth.context';

const UserContextNavigation = () => {
  const { currentUser, signOut } = useAuth();

  return (
    <>
      {!!currentUser
        ? (
          <NavItem>
            <NavLink onClick={signOut}>Logout</NavLink>
          </NavItem>
        )
        : (
          <>
            <NavItem>
              <NavLink tag={RRNavLink} to={routes.AUTH_SIGN_IN}>Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to={routes.AUTH_SIGN_UP}>Register</NavLink>
            </NavItem>
          </>
        )
      } 
    </>
  )
};

export default UserContextNavigation;