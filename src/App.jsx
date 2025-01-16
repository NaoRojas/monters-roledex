import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: {
        first: 'John',
        last: 'Doe',
      },
      company: 'Apple',
    }
  }
  changeName = () => {
    this.setState(
      {
        name: {
          first: 'Jane',
          last: 'Doe',
        },
      },
      () => {
        console.log('Name changed to Jane')
      }
    )
  }
  render() {
    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <p>
            Hi {this.state.name.first}, I work at {this.state.company}
          </p>
        </div>
        <button onClick={() => this.changeName()}>Change Name</button>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }
}

export default App
