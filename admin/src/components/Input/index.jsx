import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';

const Input = ({
  className,
  type,
  placeholder,
  id,
  name,
  value,
  onClick,
  checked,
  onChange,
  min,
  max,
}) => {
  const classProps = classNames(style.input, className);

  return (
    <input
      className={classProps}
      type={type}
      checked={checked}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onClick={onClick}
      onChange={onChange}
      min={min}
      max={max}
      autoComplete='off'
    />
  );
};

export default Input;
