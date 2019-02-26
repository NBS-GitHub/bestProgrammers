import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=3')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        const users = data.results;
        this.setState({ users });
      })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <main>
          {this.state.users.length && (
            <>
              <Card user={this.state.users[0]} place='1st' />
              <Card user={this.state.users[1]} place='2nd' />
              <Card user={this.state.users[2]} place='3rd' />
            </>
          )}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;