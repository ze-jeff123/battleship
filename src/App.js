import { Component } from 'react';
import './App.css';
import StartGame from './components/StartGame';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisplayingStarGameScreen : true,
      opponentType : null,
    }
  }
  
  selectComputer = () => {
    this.setState({
      opponentType : 'computer',
      isDisplayingStarGameScreen : false,
    });
  }

  selectHuman = () => {
    this.setState({
      isDisplayingStarGameScreen : false,
      opponentType : 'human',
    });
  }

  render() {
    return (
      <>
        {
          this.state.isDisplayingStarGameScreen ? 
          <StartGame selectComputer={this.selectComputer} selectHuman={this.selectHuman} /> :
          <>
            
          </>
        }
      </>
    )
  }
}

export default App;
