import { NavLink } from 'react-router-dom';
import PostsListComponent from '../posts/posts-list.component';
import './home.css';

const HomeComponent = (props) => {
 return ( 
    <div className='home_component'>
      <h1 className='home_component__title'>Graduaat Programmeren</h1>
      <h2 className='home_component__subtitle'>Waarvoor staat het?</h2>
      <p>
        De focus in de opleiding ligt op de praktijk. Van bij de start leer je theorie omzetten in praktijk aan de hand van concrete opdrachten. Zo werk je in het vak @Work real life cases van digital agencies uit onder begeleiding van de docenten. Je gaat op kijkstage en doet mee aan hackathons.<br />
        <NavLink to='/workplace-learning'>Lees hier meer!</NavLink>
      </p>
      <h2 className='home_component__subtitle'>Welke vakken krijg ik?</h2>
      <p>
        Je kan kiezen uit twee keuzetrajecten. De meeste vakken krijg je in beide keuzetrajecten maar sommige vakken zijn meer back-end of frontend gericht. Wil je de back-end vakken? Dan kies je voor Cloud Application Development. Heb je meer interesse in de frontend dan kies je beter voor Interactive Media Development.<br /><NavLink to='/curriculum'>Bekijk het volledige curriculum hier!</NavLink>
      </p>
      <h2 className='home_component__subtitle'>Wie kan ik op de campus terugvinden?</h2>
      <p>
        Binnen dit online platform kan je niet alleen je docenten maar ook je medestudenten terugvinden.<br />
        <NavLink to='/team'>Bekijk het team hier!</NavLink>
      </p>
      <h2 className='home_component__subtitle'>Hoe kan ik iemand contacteren?</h2>
      <p>
        Voor al je vragen rond de opleiding kan je wel bij iemand terecht . Of dit nu gaat over de inhoud van de opleiding, op kot gaan of je hebt een vraag rond je inschrijving, je kan de juiste persoon <NavLink to='/contact'>hier</NavLink> vinden.<br />
        <NavLink to='/contact'>Naar de contactpagina!</NavLink>
      </p>
      <h2 className='home_component__subtitle'>Bekijk de meeste recente posts hieronder</h2>
      <div>
        <PostsListComponent amount='3' styling='grid'/><br />
        <NavLink to='/blog'>Of bekijk hier de volledige blog!</NavLink>
      </div>
    </div>
  )
};

export default HomeComponent;