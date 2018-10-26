import React, { Component } from 'react';
import memoryImages from "./memoryImages.json";
import MemoryCard from "./components/MemoryCard";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {

state = {
  memoryImages,
  score: 0,
  topScore: 0,
  clickedMemoryImages: []
};

/* ================ Fisher Yates Shuffle Formula for an Array ========================== */ 

shuffleCards = memoryArray => {
  var i = 0;
  var j = 0;
  var temp = null;

  for (i = memoryArray.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = memoryArray[i];
    memoryArray[i] = memoryArray[j];
    memoryArray[j] = temp;
  }
  return memoryArray;
};

/* ===================================================================================== */


/* ====================== Shuffle Function for Memory Images =========================== */

handleCardShuffle = () => {
  let cardShuffle = this.shuffleCards(memoryImages)
  this.setState({memoryImages: cardShuffle})
}

/* ===================================================================================== */


/* ====================== Click Event on Card to Trigger Shuffle =====================  */

handleCardClick = id => {
  if (this.state.clickedMemoryImages.indexOf(id) === -1){
    this.handleScore();
  this.setState({ clickedMemoryImages: this.state.clickedMemoryImages.concat(id)})
}
else {
  this.handleRestart();
}
};

/* =================================================================================  */

/* ============================= Handle Add Score ==================================  */

handleScore = () => {
  const playerScore = this.state.score + 1;
  this.setState({score: playerScore})
  if(playerScore >= this.state.topScore) {
    this.setState({topScore: playerScore})
  }
  else if(playerScore === 32) {
    alert("Cool Beans... You Won! Go Again!")
  }
  this.handleCardShuffle();
}

/* =================================================================================  */

/* ========================== Handle Game Restart ================================== */

handleRestart = () => {
  alert("Let's Go Again!")
  this.setState({score: 0, topScore: this.state.topScore, clickedMemoryImages: []});
  this.handleCardShuffle();
}

/* ================================================================================= */


/* =========================== Render Page ========================================  */

  render() {
    return (
      <div>
      <Title>
      1980's Movie Soundtrack Memory Game
        </Title>
      <Navbar><span id="score">Score: {this.state.score} </span> <span id="top-score">Top Score: {this.state.topScore} </span></Navbar>
            <Wrapper>
              <div className="container-fluid">
                <div className="row">
                   {this.state.memoryImages.map(memory => (
                  <div className="col-3">
                   <MemoryCard
                      handleCardClick={this.handleCardClick}
                      handleScore={this.handleScore}
                      key={memory.id}
                      id={memory.id}
                      image={memory.image}
                    />
                  </div>
                    ))}
                </div>
              </div>
           </Wrapper>
        <Footer></Footer>
      </div>
    )
  }

/* ==================================================================================== */

}

export default App;
