import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePets(){
    return this.props.thePets.map((pet)=>{return <Pet key={pet.id}
                                                      petOBJ={pet}
                                                      isAdopted={pet.isAdopted}
                                                      onAdoptPet={this.props.onAdoptPet}/>})
  }

  render() {
    return <div className="ui cards">{this.generatePets()}</div>
  }
}

export default PetBrowser
