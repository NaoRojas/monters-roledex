import { Component } from 'react'

class CardList extends Component {
  render() {
    return (
      <div className="grid gap-4 grid-cols-4 mt-4">
        {this.props.monsters.map((monster) => (
          <div
            className="rounded-xl border bg-card text-card-foreground shadow p-4"
            key={monster.id}
          >
            <h4>{monster.name} </h4>
          </div>
        ))}
      </div>
    )
  }
}

export default CardList
