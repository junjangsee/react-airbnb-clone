import React from 'react';
import style from './index.module.scss';
import Container from '../../Container';
import Text from '../../Text';
import Button from '../../Button';

const Footer = () => {
  return (
    <>
      <Container tag='footer' className={style['footer-container']}>
        <Container className={style['text']}>
          <Container className={style['comment']}>
            <Text>요금을 확인하려면 날짜를 입력하세요.</Text>
          </Container>
          <Container className={style['score']}>
            <Text className={style['icon']}>★</Text>&nbsp;
            <Text className={style['avg']}>4.75</Text>&nbsp;
            <Text className={style['count']}>(65)</Text>
          </Container>
        </Container>
        <Container className={style['reservation']}>
          <Button>
            <Text>예약 가능 여부 보기</Text>
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
