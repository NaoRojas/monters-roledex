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
    console.log(' 2')
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4">
          <h1 className="text-3xl font-bold tracking-tight">Monsters</h1>
          <SearchBar onSearchMonster={this.onSearchMonster} />
          <CardList monsters={this.filteredMonsters()} />
        </div>
      </>
    )
  }
}

export default App
