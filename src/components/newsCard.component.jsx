

import { Fragment} from "react";

const Card = (props) => {
  return (
    <Fragment>
      {props.articlesData.map(({ title, description, urlToImage, url, author, source }, index) => (
        <div className="card" key={index}>
          <div className="imageContainer">
            <img src={urlToImage} alt={title} />
          </div>
          <div className="cardContent">
            <h3>{title}</h3>
            <p>
              {description}
              <a href={url} target="_blank" rel="noopener noreferrer">
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

