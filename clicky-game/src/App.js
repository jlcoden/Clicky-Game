import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
// import Navbar from "./components/Navbar";
// import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedFriends: [],
    score: 0,
    maxScore: 12
  };

  shuffleFriend = id => {
    let clickedFriends = this.state.clickedFriends;

    if (clickedFriends.includes(id)) {
      this.setState({
        clickedFriends: [],
        score: 0,
        status: "Sorry you lost, Game Over!"
      });
      return;
    } else {
      clickedFriends.push(id);

      if (clickedFriends.length === 12) {
        this.setState({
          score: 12,
          status: "Congratulations, You Won!",
          clickedFriends: []
        });
        return;
      }

      this.setState({
        friends,
        clickedFriends,
        score: clickedFriends.length,
        status: " "
      });

      for (let i = friends.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [friends[i], friends[j]] = [friends[j], friends[i]];
      }
    }
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
        <div className="container">
          <Wrapper>
            {this.state.friends.map(friend => (
              <FriendCard
                shuffleFriend={this.shuffleFriend}
                id={friend.id}
                key={friend.id}
                image={friend.image}
              />
            ))}
          </Wrapper>
          <footer>
            <p>Clicky Game!</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
