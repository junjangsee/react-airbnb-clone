import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';

const Card = ({ className, children }) => {
  const classProps = classNames(style['card-container'], className);
  return (
    <>
      <div className={classProps}>{children}</div>
    </>
  );
};

export default Card;
