import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div className="title-cont">
      <h2 className="title-cont-text">{title}</h2>
      {children}
    </div>
  );
};

export default React.memo(Section);
