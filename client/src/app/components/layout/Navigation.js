import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { UserContextNavigation } from '../auth';

const routes = [

  {
    title: 'Portfolio',
    type: 'internal',
    path: '/portfolio'
  },
  {
    title: 'Curriculum',
    type: 'internal',
    path: '/curriculum'
  },
  {
    title: 'Workplace learning',
    type: 'internal',
    path: '/workplace-learning'
  },
  {
    title: 'Team',
    type: 'internal',
    path: '/team'
  },
  {
    title: 'Blog',
    type: 'internal',
    path: '/blog'
  },
  {
    title: 'Contact',
    type: 'internal',
    path: '/contact'
  },
];

const Navigation = () => {
  return (
    <>
      <Nav
        className="me-auto"
        navbar
      >
        {routes && routes.map(route => 
          <NavItem key={route.path}>
            <NavLink tag={RRNavLink} to={route.path}>
              {route.title}
            </NavLink>
          </NavItem>
        )}
       
      </Nav>
      <Nav>
        <UserContextNavigation/>
      </Nav>
    </>
  )
};

export default Navigation;