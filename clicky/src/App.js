import React, { Component } from 'react';
import memoryImages from "./memoryImages.json";
import MemoryCard from "./components/MemoryCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import './App.css';




class App extends Component {

state = {
  memoryImages
};


  render() {
    return (
     
  <div>
      <Navbar>Memory Cards</Navbar>
      <Wrapper>
      <div className="container">
          <div className="row">
                   {this.state.memoryImages.map(memory => (
              <div className="col-4">
                   <MemoryCard
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
    );
  }
}

export default App;
