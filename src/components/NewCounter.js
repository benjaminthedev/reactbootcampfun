import React, { Component } from 'react';

class NewCounter extends Component{

    constructor(props){
        super(props);

        this.addOne = this.addOne.bind(this);


        this.state ={ 
            count: 0, 
            name: 'test counters'
        } 
    }

        addOne(){
            this.setState((prevState) => {
                return{
                    count: prevState.count + 1
                };
            });
        }

        minusOne(){
            this.setState((prevState) => {
                return{
                    count: prevState.count - 1
                };
            });
        }


        reset(){
            this.setState(() => {
                return{
                    count: 0
                };
            })
        }


              


    render(){
        return(
            <div>
                <h1>New Counter App</h1>
                <p>Current Count: {this.state.count}</p>
                <em>{this.state.name}</em><br />
                <br />
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )    
    }
};

export default NewCounter;