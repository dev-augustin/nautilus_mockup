import React from 'react';
import bioImg from '../assets/bio_and_beyond.jpeg';
import wise_sciImg from '../assets/wise_sci_and_engineering.png';
import tlas from '../assets/tlas.jpeg';
import abstract from '../assets/abstractions.jpeg';
import earth from '../assets/earth.jpeg';
import cosmos from '../assets/cosmos.jpeg';
import poetry from '../assets/poetry.jpeg';
import aging from '../assets/aging.png' ;
import alliance from '../assets/alliance.png' ;
import maxplanck from '../assets/maxplanck.jpeg' ;

function Content(){
    return(
        <React.Fragment> 
            <div class="container">
                <div class="image"><img src={bioImg} alt="ima"/></div>
                <div class="image"><img src={wise_sciImg} alt="sdfsd" /> </div>
                <div class="image"><img src={abstract} alt="sdf"/> </div>
                <div class="image"><img src={earth} alt="sdf"/></div>
                <div class="image"><img src={tlas} alt="sdf"/></div>
                <div class="image"><img src={cosmos} alt="sdf"/></div>
                <div class="image"><img src={poetry} alt="sdf"/></div> 
                <div class="image"><img src={aging} alt="sdf"/></div>
                <div class="image"><img src={alliance} alt="sdf"/></div>
                <div class="image"><img src={maxplanck} alt="sdf"/></div>
            </div>
        </React.Fragment>
);
}
export default Content