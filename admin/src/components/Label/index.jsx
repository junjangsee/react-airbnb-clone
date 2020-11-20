import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';

const Label = ({ className, htmlFor, children }) => {
  const classProps = classNames(style.label, className);

  return (
    <label className={classProps} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
