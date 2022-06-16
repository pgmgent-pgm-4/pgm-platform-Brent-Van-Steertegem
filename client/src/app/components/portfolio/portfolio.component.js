import './portfolio.css';
import { useAuth } from '../../context/auth.context';
import { Button } from 'reactstrap';

const PortfolioComponent = () => {
  const { currentUser } = useAuth();

  return ( 
    <div className='portfolio'>
      <h1 className='portfolio__title'>Portfolio</h1>
      {currentUser ? <Button className='portfolio__add_btn'>Add new project</Button> : ''}
    </div>
  )
};

export default PortfolioComponent;