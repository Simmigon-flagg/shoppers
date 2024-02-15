import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card" >
        <div className="image-container">
          <img onClick={() => alert(title)} src={img} alt={title} className="card-img" />
        </div>
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews" >
            <div onClick={() => alert("Update Stars")}>
              {star} {star} {star} {star}
            </div>
            <span className="total-reviews" onClick={() => alert("Leave a review")}>{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill onClick={() => alert("Add to bag")} className="bag-icon" />
            </div>
          </section>

        </div>

      </section>
    </>
  );
};

export default Card;
