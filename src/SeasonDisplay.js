import './SeasonDisplay.css';
import React from 'react';




//make it clean code to avoid duplicate coding
const seasonConfig={
    summer:{
        text : "Let's hit the beach",
        iconName : "sun"
    },
    winter:{
        text : "Burr it is cold",
        iconName :"snowflake"
    }

};



//make logic from season
const getSeason = (latitude, currentMonth)=>{
    if (currentMonth>2 && currentMonth<9){
       return latitude>0 ? 'summer' : 'winter';

    }else{
        return latitude>0 ? 'winter' : 'summer';
    }

}


const SeasonDisplay=(props)=>{
    //console.log(props.lat);
    const season=getSeason(props.lat , new Date().getMonth())
    console.log(season);
    /**  code from instructor 
      const{text, iconName} = seasonConfig[season] //{text, iconName}
      
      return(<div>
        <div className={`season-display ${season}`}>
            <i className={`icon massive ${iconName} icon`}
            <h1>{text}</h1>
        </div>);
    */
 
  //my code
    return(
          
           <div className={`season-display ${season}`}>
           <i className={`icon massive ${seasonConfig[season].iconName}`}/>
           <h1>{seasonConfig[season].text}</h1>
           </div>
          
    );
    
    }





export default SeasonDisplay;