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

  onChangeType = (event) => {
    const filterType = event.target.value
    this.setState({
      filters: {
        ...this.state.filters,
        type: filterType
      }
    })
  }

  fetchPets = () => {
    let apiURL = '/api/pets'

    const filter = this.state.filters.type
    if (filter !== 'all') apiURL+=`?type=${filter}`
    console.log(apiURL)

    fetch(apiURL)
      .then(res => res.json())
      .then(pets => {
        console.log(pets)
        this.setState({pets: pets})
      })
  }

  onAdoptPet = (id) => {
    console.log('adopt', id)
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
