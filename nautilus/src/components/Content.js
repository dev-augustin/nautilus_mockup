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
                <div class="image" id="img1">
                    <h3> Biology+Beyond</h3>
                    <img src={bioImg} alt="dgdd"/>
                    <h3>Making Sense of the Genome, at Last by Mas Pnnj</h3>
                </div>
                <div class="image" id="img2">
                    <h3>
                       Wome in Science &Enginerring </h3>
                    <img src={wise_sciImg} alt="sdfsd"/>
                    <h3>Making Sense of the Genome, at Last by Mas Pnnj</h3>
                </div>
                <div class="image" id="img3">
                    <h3>Making Sense of the Genome, at Last by Mas Pnnj</h3>
                       <img src={abstract} alt="sdf"/>
                    <h3>Making Sense of the Genome, at Last by Mas Pnnj</h3>
                </div>
                <div class="image">
                <h3>Making Sense of the Genome, at Last by Mas Pnnj</h3>
                    <img src={earth} alt="dsf"/>
                    <h3>sddvdgdv</h3>
                </div>
                <div class="image">
                <h3>Making Sense of the Genome, at Last by Mas Pnnj</h3>
                    <img src={tlas} alt="sdfsdfsdf"/>
                    <h3>Making Sense of the Genome, at Last by Mas Pnnj</h3>
                </div>
                <div class="image">
                <h3>Making Sense of the Genome, at Last by Mas Pnnj</h3>
                    <img src={cosmos} alt="sdsdfsdff"/>
                    <h3>Making Sense of the Genome, at Last by Mas Pnnj</h3>
                </div>
                <div class="image">
                <h3>Making Sense of the Genome, at Last by Mas Pnnj</h3>
                    <img src={poetry} alt="sdf"/>
                    <h3>Making Sense of the Genome, at Last by Mas Pnnj</h3>
                </div> 
                <div class="image">
                <h3>Making Sense of the Genome, at Last by Mas Pnnj</h3>
                    <img src={aging} alt="sdf"/>
                    <h3>Making Sense of the Genome, at Last by Mas Pnnj</h3>
                </div>
                <div class="image">
                <h3>Making Sense of the Genome, at Last by Mas Pnnj</h3>
                    <img src={alliance} alt="sdf"/>
                    <h3>Making Sense of the Genome, at Last by Mas Pnnj</h3>
                </div>
                <div class="image">
                <h3>Making Sense of the Genome, at Last by Mas Pnnj</h3>
                    <img src={maxplanck} alt="sdf"/>
                    <h3>Making Sense of the Genome, at Last by Mas Pnnj</h3>
                </div>
            </div>
        </React.Fragment>
);
}
export default Content