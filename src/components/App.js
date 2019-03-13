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
    this.setState({
      filters: {type: e.target.value}
    })
  }

  onFindPetsClick = (e) => {
    console.log("You are aboout to make your first fetch call with React!!")
    let fetchURL = `/api/pets`
    let filter = this.state.filters.type

    filter !== 'all' ? fetchURL += `?type=${filter}` : fetchURL

    // if (this.state.filters.type === 'all'){
    //   fetchURL = `/api/pets`
    // } else {
    //   fetchURL = `/api/pets?type=${this.state.filters.type}`
    // }
    fetch(fetchURL)
    .then(res => res.json())
    .then(fetchedPets => {
      this.setState({pets: fetchedPets})
    })
  }

  onAdoptPet = (id) => {

    let updatedPets = this.state.pets.map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true
        return pet
       } else {
         return pet
       }
    })
    
    this.setState({pets: updatedPets})

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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
