import React from 'react'

class Pet extends React.Component {
  render() {
    // console.log('hello', this.props.data)
    // console.log(this.props.isAdopted)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
          {this.props.data.name}
            {this.props.data.gender === 'male' ? ' ♂' : ' ♀'}
          </a>
          <div className="meta">
            <span className="date">{this.props.data.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.data.age}</p>
            <p>Weight: {this.props.data.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.data.isAdopted ?
          <button className="ui disabled button">Already adopted</button>
          :
          <button
            className="ui primary button"
            onClick={()=> this.props.onAdoptPet(this.props.data.id)}
            >Adopt pet
          </button>}
        </div>
      </div>
    )
  }
}

export default Pet
