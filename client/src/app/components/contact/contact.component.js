import './contact.css';

const ContactComponent = () => {
  return ( 
    <section className='contact_methods'>
      <div className='contact_method'>
        <h2>Contacteer de opleiding</h2>
        <span className='text'>Graduaat Programmeren</span>
        <span className='text'>Tel: 09 234 86 00</span>
        <span className='text'>Email: <a className='contact_method__link' href=''>philippe.depauw@arteveldehs.be</a></span>
        <span className='text'>Voor vragen over:</span>
        <ul>
          <li>Vakken</li>
          <li>Soorten trajecten</li>
          <li>Vrijstellingen</li>
          <li>...</li>
        </ul>
      </div>
      <div className='contact_method'>
        <h2>Contacteer de dienst studieadvies</h2>
        <span className='text'>Je vindt alle contactgegevens op de <a className='contact_method__link' href='https://www.arteveldehogeschool.be/contact/studieadvies'>contactpagina van de Dienst Studieadvies</a></span>
        <span className='text'>Voor vragen over:</span>
        <ul>
          <li>Studiekeuze</li>
          <li>Studeren met een functiebeperking</li>
          <li>Specifieke onderwijsbehoeften</li>
          <li>Studiemethode</li>
          <li>Taalondersteuning</li>
          <li>...</li>
        </ul>
      </div>
      <div className='contact_method'>
        <h2>Chat met een student</h2>
        <p>
          Luister bij een student hoe die de vakken, opdrachten, docenten en het studentenleven ervaart.<br />
          <a className='contact_method__link' href='https://www.arteveldehogeschool.be/chat-met-een-medewerker-student?popcardRedirectData=P2RlZ3JlZT01ZmQ5Y2ZmYmI5NDFiYTA0MDc2MGRiNzcmbGFiZWw9UHJvZ3JhbW1lcmVu&amp;ub_medium=product&amp;ub_source=University%20Popcard&amp;ub_campaign&amp;ub_content'>Verstuur je vraag via chat</a> en je krijgt binnen de 24 uur antwoord.<br />
          <span className='text--italic'>Tussen 1 juli en 1 september is de chat niet beschikbaar.</span>
        </p>
      </div>
      <div className='contact_method'>
        <h2>Contacteer de dienst studentenvoorzieningen (stuvo)</h2>
        <span className='text'>Tel: 09 234 92 30</span>
        <span className='text'>Email: <a className='contact_method__link' href=''>stuvo@arteveldehs.be</a></span>
        <span className='text'>Voor vragen over:</span>
        <ul>
          <li>Financiële plaatje van je inschrijving</li>
          <li>Studiebeurs en studiefinanciering</li>
          <li>Op kot gaan</li>
          <li>Psychosociale begeleiding</li>
          <li>...</li>
        </ul>
      </div>
      <div className='contact_method'>
        <h2>Chat met een docent</h2>
        <p>
          Krijg je graag advies van een docent in de opleiding? Of heb je vragen over je toekomstmogelijkheden na deze opleiding? <a className='contact_method__link' href='https://www.arteveldehogeschool.be/chat-met-een-medewerker-student?popcardRedirectData=YnVkZGllcy9zdGFmZj9kZXBhcnRtZW50PUdyYWR1YWF0JTIwUHJvZ3JhbW1lcmVuJmxhYmVsPUdyYWR1YWF0JTIwUHJvZ3JhbW1lcmVu&amp;ub_medium=product&amp;ub_source=University%20Popcard%20-%20Staff&amp;ub_campaign&amp;ub_content'>Verstuur je vraag via chat</a> en je krijgt binnen de 48 uur antwoord. 
          <span className="text--italic">Tussen 1 juli en 18 augustus is de chat niet beschikbaar. </span>
        </p>
      </div>
      <div className='contact_method'>
        <h2>Contacteer de dienst studentenadministratie</h2>
        <span className='text'>Je vindt alle contactgegevens op de <a className='contact_method__link' href='https://www.arteveldehogeschool.be/contact/studentenadministratie'>contactpagina van de Dienst Studentenadministratie</a></span>
        <span className='text'>Voor vragen over:</span>
        <ul>
          <li>Inschrijven</li>
          <li>Studiegeld</li>
          <li>Specifieke onderwijsbehoeften</li>
          <li>Toelatingsvoorwaarden</li>
          <li>...</li>
        </ul>
      </div>
    </section>
  )
};

export default ContactComponent;