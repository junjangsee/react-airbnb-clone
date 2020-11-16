import React from 'react';
import style from './index.module.scss';
import Container from '../../Container';
import Text from '../../Text';
import Wrapper from '../Wrapper';
import CardDetail from '../CardDetail';

const NearRoom = ({ roomsInfo, nearsInfo }) => {
  return (
    <>
      <Container className={style['separator']}></Container>
      <Wrapper className='contents-padding'>
        <Container className={style['more-room-wrapper']}>
          <Container tag='section' className={style['title']}>
            <Text tag='h2'>숙소 더 보기</Text>
          </Container>
          <CardDetail roomsInfo={roomsInfo} />
        </Container>
        <Container className={style['mid-separator']}></Container>
        <Container className={style['near-wrapper']}>
          <Container tag='section' className={style['title']}>
            <Text tag='h2'>주변의 즐길 거리</Text>
          </Container>
          <CardDetail
            className='card-detail-near-container'
            nearsInfo={nearsInfo}
          />
        </Container>
      </Wrapper>
    </>
  );
};

export default NearRoom;
