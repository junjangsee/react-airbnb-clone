import React from 'react';
import Wrapper from '../Wrapper';
import style from './index.module.scss';
import Text from '../../Text';
import Container from '../../Container';
import Button from '../../Button';

const Location = () => {
  return (
    <>
      <Wrapper className='contents-padding'>
        <Container className={style['location-container']}>
          <Container tag='section' className={style['title']}>
            <Text tag='h2'>위치 </Text>
            <Text>송파구, 서울특별시, 한국</Text>
          </Container>
          <Container className={style['map-container']}>
            <Button className={style['map-btn']}>
              <Container className={style['map']}>
                Google map 추가 예정
              </Container>
            </Button>
            <Container className={style['notice']}>
              <Text>정확한 위치는 예약 완료 후에 표시됩니다.</Text>
            </Container>
          </Container>
          <Container className={style['detail-container']}>
            <a href=''>자세한 위치 정보</a>
          </Container>
        </Container>
      </Wrapper>
    </>
  );
};

export default Location;
