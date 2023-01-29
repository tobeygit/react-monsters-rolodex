import CardList from "./components/card-list/card-list.component";
import './App.css';
import SearchBox from "./components/search-box/search-box.component";
import { useState, useEffect } from "react";

const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  useEffect(() => {
    console.log('effect fired')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users))
  }, [])
  
  useEffect(() => {
     const newFilteredMonsters = monsters.filter((monster) => {
      return  monster.name.toLowerCase().includes(searchField);
    })
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }
  
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

/*

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
    

    return (
    
    );
  }
}
*/

export default App;
