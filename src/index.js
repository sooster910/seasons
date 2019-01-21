import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component{
   
    state={lat:null,errormessage:''};
    componentDidMount(){
        console.log("ComponentDidmount starts")
        window.navigator.geolocation.getCurrentPosition(
            position=>{console.log(position)
                //call setstate
                this.setState({lat:position.coords.latitude})
            
            },
            err=>{
                this.setState({errorMessage:err.message})
            
            }
            );

    }
    renderContent(){
        console.log("render starts")
        if(this.state.errorMessage && !this.state.lat){
            return<div>Error:{this.state.errorMessage}</div>

        }
         else if(!this.state.errorMessage && this.state.lat){
            return(//<div>Latitude : {this.state.lat}</div>
                    <SeasonDisplay lat={this.state.lat}/>
            );
        } return<Spinner/>

    }
    
    render(){
      return(
        <div clssName="border red">
            {this.renderContent()}
        </div>
      );
        

    }
}




    ReactDOM.render(<App />, document.querySelector('#root'))