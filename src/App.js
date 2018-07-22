import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
        message: "Click an image to begin!",
        topScore: 0,
        currentScore: 0,
        friends: friends,
        unselectedFriends: friends
  };

  componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

        selectFriend = name => {
        const findFriend = this.state.unselectedFriends.find(item => item.name === name);

        if(findFriend === undefined) {
       
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
                currentScore: 0,
                friends: friends,
                unselectedFriends: friends
            });
        }
        else {
           
            const newFriend = this.state.unselectedFriends.filter(item => item.name !== name);
            
            this.setState({ 
                message: "You guessed correctly!",
                currentScore: this.state.currentScore + 1,
                friends: friends,
                unselectedFriends: newFriend
            });
        }

        this.shuffleArray(friends);
    };






  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
       <Navbar homeLink="/" message={this.state.message} currentScore={this.state.currentScore} topScore={this.state.topScore} /> 

        {this.state.friends.map(friend => (
          <FriendCard

            name = {friend.name}
            image={friend.image}
            selectFriend={this.selectFriend}
            currentScore={this.state.currentScore}
            
 
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
