//Indecision

import React, { Component } from 'react';
import Action from './Action';
class Indecision extends Component {

    constructor(props){
        super(props);
            this.state = {
                options: ['One', 'Two', 'Three']
            };
    }

    render(){
        return(
                <div>
                    <h1>Indecision Section Here</h1>
                    
                    <Action hasOption={this.state.options.length > 0} />
                    <options options={this.state.options} />
                </div>
            )
        }
    }
    
export default Indecision;