import { Component } from "react";
import './card.styles.css'

class Card extends Component {
  
  render() {
    const { id, name, email } = this.props.card;
    return(
      <div className='card-container'>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set4&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card;