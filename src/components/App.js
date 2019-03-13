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

  onChangeType = (e) => {
    this.setState({filters: {type: e.target.value}})
  }

  onFindPetsClick = () => {
    let url
    this.state.filters.type === 'all' ? url = '/api/pets' : url = `/api/pets?type=${this.state.filters.type}`
    fetch(url)
    .then(resp => resp.json())
    .then(pets => this.setState({pets}))
  }

  onAdoptPet = (id) => {
    const pets = this.state.pets.map(p => {
      return p.id === id ? { ...p, isAdopted: true } : p
    })
    this.setState({ pets })
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
              <Filters
                onChangeType = {this.onChangeType}
                onFindPetsClick = {this.onFindPetsClick}
                />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                petsData = {this.state.pets}
                onAdoptPet = {this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
