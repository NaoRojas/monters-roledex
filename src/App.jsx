import { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monsters: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }

  render() {
    return (
      <>
        <h1>Monsters</h1>
        <div className="card">
          {this.state.monsters.map((monster) => (
            <h2 key={monster.id}>{monster.name}</h2>
          ))}
        </div>
      </>
    )
  }
}

export default App
