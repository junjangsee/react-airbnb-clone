import React from 'react';
import style from './index.module.scss';
import Container from '../../Container';
import Image from '../../Image';

const RoomInfo = ({ icon, title, description, more }) => {
  return (
    <>
      <Container className={style['info-container']}>
        <Container className={style['icon']}>
          <Image src={icon} width={24} height={24} />
        </Container>
        <Container className={style['info']}>
          <Container className={style['title']}>{title}</Container>
          <Container className={style['description']}>
            {description}
            {more ? <a href=''>{more}</a> : null}
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default RoomInfo;
