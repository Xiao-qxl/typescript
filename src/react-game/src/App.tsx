import React from 'react';
import { GameComp } from './components/GameComp';

interface IState {
  num: number
}

export class App extends React.Component {
  state: IState = {
    num: 0
  }
  render() {
    return (
      /*      
      <CountFnComp num={this.state.num} onChange={(n) => {
        this.setState({
          num: n
        })
      }} />
       */
      <div>
        <GameComp />
      </div>
    );
  }
}

export default App;
