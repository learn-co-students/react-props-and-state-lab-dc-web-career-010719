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

  handleAdopt = (id) =>{
    console.log(id);
    this.setState({
      pets: this.state.pets.map((pet)=>{
        if(pet.id === id){
          pet.isAdopted = !pet.isAdopted
        }
        return pet
      })
    })

  }

  onChange = (newType) => {
    this.setState({
                filters: {type: newType}
    })
  }

  getStateType(){
    return this.state.filters.type
  }

  onFindPetsClick = () =>{
    let type = this.getStateType()
    if(type === "all"){
      fetch("/api/pets").then(res=>res.json()).then(json=>this.setPetState(json))
    } else{
      fetch(`/api/pets?type=${type}`).then(res=>res.json()).then(json=>this.setPetState(json))
    }
  }

  setPetState(newPets){
    this.setState({
                pets: newPets
    })
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
              <Filters onchange= {this.onChange} onFindPets={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser thePets={this.state.pets} onAdoptPet={this.handleAdopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
