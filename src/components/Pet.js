import React from 'react'

class Pet extends React.Component {




  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(this.props.petOBJ.gender === "male")? "♀" : "♂"}
            {this.props.petOBJ.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petOBJ.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petOBJ.age}</p>
            <p>Weight: {this.props.petOBJ.weight}</p>
          </div>
        </div>
        <div className="extra content">

          {(this.props.isAdopted)?
            <button className="ui disabled button">Already adopted</button>
          :
            <button onClick={()=>{this.props.onAdoptPet(this.props.petOBJ.id)}} className="ui primary button">Adopt pet</button>
          }

        </div>
      </div>
    )
  }
}

export default Pet
