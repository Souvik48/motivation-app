  import React from 'react';
  import axios from 'axios';
  import './App.css';


  //we use axios to make certain get request to API
  class App extends React.Component{

    state = {
        advice: ''
    }

    componentDidMount(){
        //This exactly executes at the render of our component
       // console.log('COMPONENT DID MOUNT')
       this.fetchAdvice();
    }

    //A function inside a class is known as method,this is why we don't need const before declaring function
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip; //destructure
            //console.log(response.data.slip.advice);
            //console.log(advice);
            this.setState({advice: advice})
            //if both property and value name is same we can write
            //like this --> this.setState({advice})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render(){
        const {advice} = this.state;
        return(
            <div className="app">
            
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    
                </div>
                <br/>
                <button className="button" onClick={this.fetchAdvice}>
                        <span>SHOW ME SOME OTHER QUOTES!</span>
                    </button>
            </div>
            );
    }
}

export default App;