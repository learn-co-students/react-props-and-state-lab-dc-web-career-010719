import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  fetchPets = () => {
    let uri = `/api/pets`
    if (this.state.filters.type !== 'all') {
      uri = `/api/pets?type=${this.state.filters.type}`
    }
    fetch(uri)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
  };

  onChangeType = (type) => {

    this.setState({
      filters: {
        type: type
      }
    })
    // console.log(this.state.filters.type)
  }

  onFindPetsClick = () => {
    this.fetchPets()
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
