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

  handleChangeType = (filterType) => {
    let filters = {...this.state.filters}
    filters.type = filterType
    this.setState({filters})
  }

  handlePetsClick = () => {
    let url
    if (this.state.filters.type === 'all') {
      url = '/api/pets'
    } else {
      url = '/api/pets?type=' + this.state.filters.type
    }
    this.petsFetch(url)
  }

  petsFetch(url) {
    fetch(url)
    .then(res => res.json())
    .then(pets => {
      this.setState({pets: []})
      pets.forEach((pet) => {
        let newPets = this.state.pets.concat(pet)
        this.setState({
          pets: newPets
        })
      })})
    }

  handleAdoption = (id) => {
    let pets = [...this.state.pets]
    let index = pets.findIndex((pet) => {return pet.id === id})
    let pet = {...pets[index]}
    pet.isAdopted = !pet.isAdopted
    pets[index] = pet
    this.setState({pets: pets})
  }

  // allows immediate load of all pets
  // componentDidMount() {
  //   this.petsFetch('/api/pets')
  // }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handlePetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoption}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
