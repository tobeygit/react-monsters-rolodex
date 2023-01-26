import CardList from "./components/card-list/card-list.component";
import './App.css';
import { Component } from "react";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  
  constructor() {
    // console.log('constructor')
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }
  }
  
  componentDidMount() {
    // console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(
      (monsters) => {
        this.setState(() => {
          return { monsters: monsters, filterMonsters: monsters  }
        }, () => {
          // console.log(this.state.monsters)
        })
      });
  }
  
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }
  
  render() {
    // console.log('render from appJs')
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    
    const filteredMonsters = monsters.filter((monster) => {
      return  monster.name.toLowerCase().includes(searchField);
    })
    return (
      <div className='App'>
        <h1 className='app-title'>Cat monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeHolder='search monsters'
          className='search-box'
        />
        <CardList cards={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
