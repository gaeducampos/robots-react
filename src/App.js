import { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import logo from './logo.svg';
import './App.css';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { SearchBox } from './components/search-box/search-box.component.jsx'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searhField: ''
    };

  }

  handleChange = (e) => {
    this.setState({ searhField: e.target.value })
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searhField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searhField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }


}

export default App;
