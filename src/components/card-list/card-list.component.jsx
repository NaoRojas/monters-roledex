import { Component } from 'react'

class CardList extends Component {
  render() {
    return (
      <div className="grid gap-4 grid-cols-5">
        {this.props.monsters.map((monster) => (
          <div
            className="rounded-xl border bg-card flex flex-col justify-center items-center shadow p-4"
            key={monster.id}
          >
            <img
              className="w-32"
              src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
              alt={monster.name}
            />
            <h4 className="text-center">{monster.name} </h4>
          </div>
        ))}
      </div>
    )
  }
}

export default CardList
