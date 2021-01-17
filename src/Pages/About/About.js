import React from 'react'; 
import "./About.css";
import HL from '../../Components/HL';
import TeamPhoto from '../../Content/Image/team.jpg';
import StaffCard from './AboutComponent/StaffCard';
  
function About () { 
    return (
            <div class="col-md-8" style={{margin: "0 auto"}}>
                <h1>Vision</h1>
                <q>The vision of  Dragon Cave is to spread the rich heritage and tapestry of the Peranakan culture and heirlooms.</q>
                <hr />
                <h1>Mission</h1>
                <p>To educate and expose the people to Peranakan traditions and that each valuable piece has a story to tell.</p>
                <hr />
                <h1>Commitment</h1>
                <p>To bring back the rich Peranakan heritage and culture, so that it will continue to be passed down to the generation to come.</p>
                <hr />
                <h1>Meet The Team</h1>
                <img src={TeamPhoto} />
                <StaffCard />
            </div>
    )
} 
export default About; 