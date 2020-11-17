import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';

const Container = ({
  className,
  display,
  margin,
  padding,
  width,
  height,
  tag: Tag = 'div',
  children,
}) => {
  const classProps = classNames(style.container, className);

  return (
    <Tag
      className={classProps}
      style={{ display, margin, padding, width, height }}>
      {children}
    </Tag>
  );
};

export default Container;
