import './card-list.styles.css'
import Card from "../card/card.component";

const CardList = ({ cards }) => (
  <div className='card-list'>
    {
      cards.map((card) => {
        return <Card card={card} key={card.id}/>
      })
    }
  </div>
);

export default CardList;