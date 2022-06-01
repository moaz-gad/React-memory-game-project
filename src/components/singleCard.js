import "./singleCard.css";
const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) handleChoice(card);
  };
 
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" alt="front card" src= {process.env.PUBLIC_URL + card.src} />
        <img
          className="back"
          alt="back card"
          src= {process.env.PUBLIC_URL+"/img/cover.png"}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
