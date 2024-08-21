

import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, title, description }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
    padding: '10px',
    margin: '30px',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  content: {
    padding: '16px',
  },
  title: {
    fontSize: '20px',
    margin: '0 0 10px 0',
  },
  description: {
    fontSize: '20px',
    color: '#555',
  },
};

export default Card;
