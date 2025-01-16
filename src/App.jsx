import { Component } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component'
import SearchBar from './components/search-bar/search-bar.component'

class App extends Component {
  constructor(props) {
    // Initialitze the state
    console.log(' 1')
    super(props)
    this.state = {
      monsters: [],
      searchMonsterName: '',
    }
  }

  componentDidMount() {
    console.log(' 3')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }

  filteredMonsters = () => {
    const { monsters, searchMonsterName } = this.state
    return monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchMonsterName.toLowerCase())
    )
  }

  onSearchMonster = (e) => {
    // Is better to create a function onSearchMonster to handle the search
    // for performance reasons

    this.setState({ searchMonsterName: e.target.value })
  }

  render() {
    console.log('Render 2')
    return (
      <>
        <div className="flex flex-col space-y-8 m-52 justify-center">
          <h1 className="text-3xl font-bold text-center mb-2">Monsters</h1>
          <SearchBar className="mb-2" onSearchMonster={this.onSearchMonster} />
          <CardList className="mt-4" monsters={this.filteredMonsters()} />
        </div>
      </>
    )
  }
}

export default App
