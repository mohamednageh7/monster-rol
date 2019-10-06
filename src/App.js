import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
 constructor() {
    super();
    this.state = {
      monster:[],
      searchbar: ''
    }
  }


componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then( respond => respond.json())
  .then( users => this.setState({monster: users}))
}

textChange = (e) => {
  this.setState({
    searchbar: e.target.value
  })
}

filterMonster = () => {
  const {monster, searchbar} = this.state;
  return monster.filter( item => item.name.toLowerCase().includes(searchbar.toLowerCase()))
}

render(){
  return (
    <div className="App">
      <h1>Monsters rolodex</h1>
      <SearchBox handleChange={this.textChange} placeholder='Search Monsters' />
      <CardList monster = {this.filterMonster()}/>
      
    </div>
  );
}

}

export default App;
