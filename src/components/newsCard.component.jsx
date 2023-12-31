

import { Fragment} from "react";

const Card = (props) => {
  return (
    <Fragment>
      {
      props.articlesData == undefined ? <h1>No Data Found</h1> :
      props.articlesData.map(({ title, description, urlToImage, url, author, source }, index) => (
        <div className="card" key={index}>
          <div className="imageContainer">
            <img src={urlToImage} alt={title} />
          </div>
          <div className="cardContent">
            <h3>{title}</h3>
            <p>
              {description}
              <a href={url} target="_blank" >
                Read More
              </a>
            </p>
            <div className="cardFooter">
              <span>{author}</span>
              <span>{source.name}</span>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Card;

