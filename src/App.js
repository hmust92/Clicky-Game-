import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
       <Navbar homeLink="#" currentScore={1} topScore={2} /> 

        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}

            image={friend.image}
 
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
