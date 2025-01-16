import { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <input
        type="search"
        className="flex h-12 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        placeholder="Search Monster"
        onChange={this.props.onSearchMonster}
      />
    )
  }
}

export default SearchBar
