import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/seach-box/seach-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      creatures: [],
      seachField: '',
    };
  }

  handleChange = e => {
    this.setState({ seachField: e.target.value });
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(creatures => this.setState({ creatures }));
  }
  render() {
    const { creatures, seachField } = this.state;
    const filteredCreatures = creatures.filter(
      creature =>
        creature.name.toLowerCase().includes(seachField.toLowerCase()) ||
        creature.email.toLowerCase().includes(seachField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Creatures Rolodex</h1>
        <SearchBox
          placeholder="Seach creatures..."
          handleChange={this.handleChange}
        />

        <CardList creatures={filteredCreatures} />
      </div>
    );
  }
}

export default App;
