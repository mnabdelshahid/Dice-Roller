import React, { Component } from 'react';
// import D1 from './download(1).png'
class Dice extends Component {
    constructor (props) {
        super(props)
        this.state = {
            diceCurrent : 0,
            rollCurrent : [],
            // diceImage: [D1, D2, D3, D4, D5, D6]
        }
    }
    handleDiceRoll = () =>{
      // eslint-disable-next-line
        const {diceCurrent, rollCurrent} = this.state
        let randomNum = Math.floor(Math.random() * 6 + 1)
        let logRoll = this.state.rollCurrent.concat([randomNum])
        this.setState({diceCurrent : randomNum});
        this.setState({rollCurrent : logRoll})
        console.log(logRoll)
    }
    render(){
        const {diceCurrent, rollCurrent} = this.state
        return(
            <div id="display">
                <div>
                    <button class={'d'+(diceCurrent)} id="box" onClick={this.handleDiceRoll}>
                    {!diceCurrent}
                  </button>
                </div>
                <div>

                    <h2>Past Rolls</h2>
                    <ul>
                        {rollCurrent.map(roll => {
                            return(
                                <li>
                                    {roll}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Dice
