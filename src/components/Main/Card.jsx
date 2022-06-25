import { data } from "../../helper/data";

const Card = (data) => {
  const { id, image, title, desc } = data;
  return (
    <div className="cards" key={id}>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <img src={image} alt="img" />
      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};
export default Card;
