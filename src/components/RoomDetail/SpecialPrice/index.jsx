import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';
import Container from '../../Container';

const SpecialPrice = ({ className }) => {
  const classProps = classNames(style['special-wrapper'], className);

  return (
    <>
      <Container className={classProps}>
        <Container className={style['special-container']}></Container>
      </Container>
    </>
  );
};

export default SpecialPrice;
