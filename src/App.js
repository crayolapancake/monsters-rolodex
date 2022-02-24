import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/cardList/cardList.jsx';
import { SearchBox } from './components/searchBox/searchBox.jsx';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
      ],
      searchField: '',
      placeholder: 'Search Monsters'
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField, placeholder } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App" style={{ backgroundColor: '#071b52' }}>
        <h1 className='title'>Monsters Rolodex</h1>
        <SearchBox
          handleChange={(e) => this.setState({ searchField: e.target.value })}
          placeholder={placeholder}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

/* PROMISES
before promises, there was callback hell: nested callbaks.
Asynch: fun when a chain of functions rely on an output to continue.

const myPromise = new Promise(( resolve, reject )=> {
  // this object will eventually have a value with resolve or reject; reject causes error.
  if (true) {
    setTimeout(() => {
        resolve('success')
      }, 1000)
  } else {
    reject('failure')
  }

 

  after 1 second, resolve will now hold 'success' value.
})

  myPromise
    .then(value => console.log(value))
    .catch(rejectValue => console.log(rejectValue));
  // finish running my promise and THEN log the value, or CATCH if it's rejected.
  // can chain .then
*/
