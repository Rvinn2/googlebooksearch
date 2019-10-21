import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome To Google Book Search.</h1>
                <Link to="/books">View My books </Link>
            </div>
        );
    }
}

export default Home;