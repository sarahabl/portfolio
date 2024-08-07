import React from 'react';
import PropTypes from 'prop-types';
import './big_title.css';
import highlightImg from '../../../assets/Highlight.svg'; // Assure-toi que le chemin est correct

const BigTitle = ({ primaryText, secondaryText, description }) => {
  return (
    <div className="title-container">
      <div className="title-text">
        <h1 className="title-primary">
          {primaryText} <span className="title-secondary">{secondaryText}</span>
        </h1>
        {description && <p className="title-description">{description}</p>}
      </div>
      <div className="title-highlight">
        <img src={highlightImg} alt="Highlight" />
      </div>
    </div>
  );
};

BigTitle.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default BigTitle;