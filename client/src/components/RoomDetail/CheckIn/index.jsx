import React from 'react';
import Wrapper from '../Wrapper';
import style from './index.module.scss';
import Text from '../../Text';
import Container from '../../Container';
import Button from '../../Button';

const CheckIn = () => {
  return (
    <>
      <Wrapper className='contents-padding'>
        <Container className={style['checkin-container']}>
          <Container tag='section' className={style['title']}>
            <Text tag='h2'>체크인 날짜를 선택해주세요.</Text>
            <Text>여행 날짜를 입력하여 정확한 요금을 확인하세요.</Text>
          </Container>
          <Container className={style['calendar-container']}>
            <Container className={style['calendar']}>
              Calendar 추가 예정
            </Container>
          </Container>
          <Container className={style['date-container']}>
            <Button>날짜 지우기</Button>
          </Container>
        </Container>
      </Wrapper>
    </>
  );
};

export default CheckIn;
