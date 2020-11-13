import React from 'react';
import style from './index.module.scss';
import Container from '../../Container';
import classNames from 'classnames';

const Wrapper = ({ className, children }) => {
  const classProps = classNames(style['contents'], className);

  return (
    <>
      <Container className={style['wrapper']}>
        <Container className={style['container']}>
          <Container className={classProps}>{children}</Container>
        </Container>
      </Container>
    </>
  );
};

export default Wrapper;
