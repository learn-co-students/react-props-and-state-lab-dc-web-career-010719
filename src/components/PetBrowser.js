import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePetComponents(){
    return this.props.thePets.map((pet)=>{ return <Pet key={pet.id}
                                                       petObj={pet}
                                                       onAdoptPet={this.props.onAdoptPet}
                                                       isAdopted={pet.isAdopted}/>})
  }


  render() {
    return <div className="ui cards">{this.generatePetComponents()}</div>
  }
}

export default PetBrowser
