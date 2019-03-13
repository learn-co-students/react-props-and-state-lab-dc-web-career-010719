import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  petComps = () => {
    // console.log(this.props.pets)
  this.props.pets.map(pet => <Pet />)
  }
  render() {
    return (
    <div className="ui cards">
      {this.props.pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/>)}
    </div>
    )
  }
}

export default PetBrowser
