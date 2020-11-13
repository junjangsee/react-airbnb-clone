import React from 'react';
import style from './index.module.scss';
import Wrapper from '../Wrapper';
import Text from '../../Text';
import Container from '../../Container';
import Image from '../../Image';
import alarm from '../../../images/alarm.gif';

const SpecialPrice = () => {
  return (
    <>
      <Wrapper>
        <Container className={style['special-wrapper']}>
          <Container className={style['special-container']}>
            <Container className={style['description']}>
              <Text tag='h1'>11월 8일 - 11월 20일 동안 10% 할인</Text>
              <Text>특별가 제안을 이용하려면 7일 이내에 예약하세요.</Text>
            </Container>
          </Container>
          <Container className={style['alarm-container']}>
            <Image src={alarm} width={40} heigth={40} />
          </Container>
        </Container>
      </Wrapper>
    </>
  );
};

export default SpecialPrice;
