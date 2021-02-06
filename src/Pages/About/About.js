import React from 'react'; 
import "./About.css";
import TeamPhoto from '../../Content/Image/team.jpg';
import StaffCard from './AboutComponent/StaffCard';
import { CardDeck, CardGroup } from 'react-bootstrap';
  
function About () { 
    return (
        <div class="col-md-8" style={{margin: "0 auto"}}>
            <h1>Vision</h1>
            <p class="Quote">"The vision of  Dragon Cave is to spread the rich heritage and tapestry of the Peranakan culture and heirlooms."</p>
            <hr />
            <h1>Mission</h1>
            <p class="Quote">"To educate and expose the people to Peranakan traditions and that each valuable piece has a story to tell."</p>
            <hr />
            <h1>Commitment</h1>
            <p class="Quote">"To bring back the rich Peranakan heritage and culture, so that it will continue to be passed down to the generation to come."</p>
            <hr />
            <h1>Meet The Team</h1>
            
            <CardDeck>
                <StaffCard
                    Name="Person 1" 
                    Title="Chief Executive Office" 
                    Location="avatar.png"
                    Bio="This is a boi, it does what a boi does. You put bio stuff in here to make it look and sound like what a bio would look and sound like. You should insert your bio here"
                />
                <StaffCard
                    Name="Person 2" 
                    Title="Chief Financial Officer" 
                    Location="avatar.png"
                    Bio="This is a boi, it does what a boi does. You put bio stuff in here to make it look and sound like what a bio would look and sound like. You should insert your bio here"
                />
                <StaffCard
                    Name="Person 3" 
                    Title="Chief Marketing Officer" 
                    Location="avatar.png"
                    Bio="This is a boi, it does what a boi does. You put bio stuff in here to make it look and sound like what a bio would look and sound like. You should insert your bio here"
                />
                <StaffCard
                    Name="Person 4" 
                    Title="Chief Operation Officer" 
                    Location="avatar.png"
                    Bio="This is a boi, it does what a boi does. You put bio stuff in here to make it look and sound like what a bio would look and sound like. You should insert your bio here"
                />
            </CardDeck>
        </div>
    )
} 
export default About; 