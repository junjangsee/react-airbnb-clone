import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';

const Form = ({ className, method, onSubmit, children }) => {
  const classProps = classNames(style.form, className);

  return (
    <form className={classProps} method={method} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
