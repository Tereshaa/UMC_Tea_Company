import React from 'react';
import './Card.css'; 

export function Card({ title, description, backgroundImage, hoverImage, onClick, isActive }) {
  return (
    <div className={`card-demo ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div 
        className="card" 
        style={{ backgroundImage: `url(${backgroundImage})`, objectFit: 'cover' }}
      >
        <div className="text">
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
        </div>
        <div 
          className="card-hover"
          style={{ backgroundImage: `url(${hoverImage})` }}
        />
      </div>
    </div>
  );
}
