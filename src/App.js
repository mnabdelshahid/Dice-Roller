import React, {Component} from 'react';
import './App.css';
import Dice from './dice.js';

class App extends Component{
    render(){
            return(
                <div>
                    <div>
                        <h1> Dice Roller</h1>
                          <p >Click on the Dice to Roll!</p>

                    </div>
                        <Dice />
                </div>
            )
    }
}

export default App;
