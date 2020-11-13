import React from 'react';
import style from './index.module.scss';
import Container from '../../Container';

const Wrapper = ({ children }) => {
  return (
    <>
      <Container className={style['wrapper']}>
        <Container className={style['container']}>
          <Container className={style['contents']}>{children}</Container>
        </Container>
      </Container>
    </>
  );
};

export default Wrapper;
