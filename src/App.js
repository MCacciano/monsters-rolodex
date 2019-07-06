import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

import './App.css';
import { Search } from './components/search/search.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: '',
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const users = await res.json();
      this.setState({ monsters: users });
    } catch (err) {
      console.error(err);
    }
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  filterMonsters = () => {
    const { monsters, search } = this.state;
    return monsters.filter(monster =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  render() {
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <Search
          type="search"
          name="search"
          placeholder="Search Monsters"
          onInputChange={this.onInputChange}
        />
        <CardList monsters={this.filterMonsters()} />
      </div>
    );
  }
}

export default App;
