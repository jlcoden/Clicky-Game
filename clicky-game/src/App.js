import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
// import Navbar from "./components/Navbar";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  shuffleFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Walking Dead Clicky Game!</h1>
          <p className="App-intro">
            Click on an image to earn points, but don't click on any more than
            once!
          </p>
        </header>

        <Wrapper>
          <Title>Friends List</Title>
          {this.state.friends.map(friend => (
            <FriendCard
              shuffleFriend={this.shuffleFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </Wrapper>
        <footer>
          <p>Clicky Game!</p>
        </footer>
      </div>
    );
  }
}

export default App;
