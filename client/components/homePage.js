import React, { Component } from 'react';

const img_url = 'https://i.imgur.com/FloUGEv.jpg';
///*<img src = {img_url}/>*/

class HomePage extends Component {
    render() {
        return (
            <div>
                <div class = 'wrapper'>
                    <div class='description'>
                        <p class='description_content'>Nu bygger vi något</p>
                    </div>
                </div>
                <h1>homepage</h1>
            </div>
        )
    }
}

export default HomePage;