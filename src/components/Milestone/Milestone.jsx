import React from 'react';
import './Milestone.scss';

const Milestone = ({ year, title, description, image, index, slug }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`milestone ${isLeft ? 'left' : 'right'}`}>
      <div className="milestone__content">
        <img src={image} alt={title} />
        <div className="milestone__text">
          <h2>{year}</h2>
          <h3>{title}</h3>
          <p>{description}</p>

          {slug && (
            <div className="milestone__readmore">
              <a href={`/${slug}`} className="read-more-btn">
                Read More →
              </a>
            </div>
          )}
        </div>
      </div>
      <span className="milestone__dot" />
    </div>
  );
};

export default Milestone;
