import React from 'react'

class Pet extends React.Component {
  handleAdopt = (event) => this.props.onAdoptPet(this.props.pet.id)   

  render() {
    const {id, name, age, weight, type, gender, isAdopted} = this.props.pet
    
    let button
    if (isAdopted)
      button = <button className="ui disabled button" onClick={this.handleAdopt}>Already adopted</button>
    else
      button = <button className="ui primary button" onClick={this.handleAdopt}>Adopt pet</button>

    return (
      <div className="card" key={id}>
        <div className="content">
          <a className="header">
            {gender === 'male' ? '\u2642' : '\u2640'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {button}
        </div>
      </div>
    )
  }
}

export default Pet
