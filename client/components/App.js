/*
    ./client/components/App.jsx
*/
import React from 'react';
import './../scss/app.scss'
//import {BrowserRoter as Router, Route, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
//import {browserHistory} from 'react-router';
import HomePage from './homePage.js';
import Footer from './footer.js';
import NavBar from './navBar.js';
import Main from './main.js';

class App extends React.Component{
    render() {
        return (

                    <HomePage />
                /*
                    <NavBar />
                    <Route name="home" exact path="/" component = {HomePage} />
                    <Main />
                    <Footer />*/

        );
    }
}

export default App;
//ReactDOM.render(<App />, document.getElementById('app'))