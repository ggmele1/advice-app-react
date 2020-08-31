import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
    state = { advice: '' };

    componentDidMount() {
        this.fetchAdvice();
    }


    // Method that fetched API data
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice') // JSON API
            .then((response) => {
                const { advice } = response.data.slip; // destructured advice rom response.data.slip.advice 
                this.setState({ advice }) // !IMPORTANT prop 'advice' refers to state prop. Value refers to the destructured response()
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { advice } = this.state;
        return (
            <div className="app">
                <h6 className="name">Giuseppe Mele</h6>
                <div className="bg"></div>
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                </div>
                <button className="btn btn-1 hover-filled-opacity" onClick={this.fetchAdvice}>
                    <span>Give Me Advice</span>
                </button>
                
            </div>
        );
    }
}

export default App;