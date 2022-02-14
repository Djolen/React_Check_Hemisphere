import React from 'react';   
import './Hemisphere.css';
import northern from './image/northern.jpg'; 
import southern from './image/southern.jpg'; 

const HemisphereConfig = {
    Northern:{
        text: 'it is northern hemisphere', 
        picture: northern
    }, 
    Southern:{ 
        text: 'it is southern hemisphere', 
        picture: southern
    }
}

const HemisphereDisplay = ({latitude}) => { 

console.log(latitude) 
const hemisphere = latitude > 0 ? 'Northern' : 'Southern';  
const {text, picture} = HemisphereConfig[hemisphere]

return(
    <div className={hemisphere}>  
     <div className='ui raised text container segment'> 
        <div className='image'> <img src={picture} alt="pic" /> </div>
        <div className='ui red bottom attached label'> <h1> {text} </h1> </div>       
     </div>
    </div>
)
} 

export default HemisphereDisplay;