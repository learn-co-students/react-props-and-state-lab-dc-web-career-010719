import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (newType) => {
    this.setState({
      filters: {
        type: newType}
    })
  }

  onFindPetsClick = () => {
    let type = this.returnType()
    if (type === `all`){
      fetch(`/api/pets`)
      .then(res=>res.json())
      .then(json=> this.setStatePets(json))}
   else (
     fetch(`/api/pets?type=${type}`)
     .then(res=>res.json())
     .then(json=> this.setStatePets(json)))
  }

  setStatePets(newpets){
    this.setState({pets: newpets})
  }

  returnType(){
    return this.state.filters.type
  }

  handleAdopt=(id)=>{

      let newPets = (this.state.pets.map((pet)=> {
        if(pet.id === id){
          pet.isAdopted = !pet.isAdopted
        }
        return pet
    }))
  this.setStatePets(newPets)
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
              <Filters onChange= {this.onChangeType} onFindPets= {this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet= {this.handleAdopt} thePets= {this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
