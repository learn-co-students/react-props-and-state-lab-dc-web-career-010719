import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets = () => {
    return this.props.pets.map(p =>
      <Pet
        key={p.id}
        petObj={p}
        onAdoptPet={this.props.onAdoption}
      />
    )
  }

  render() {
    return (
      <div className="ui cards">
        {this.renderPets()}
      </div>
    )
  }

}

export default PetBrowser
