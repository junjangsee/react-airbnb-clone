import React from 'react';
import style from './index.module.scss';
import Wrapper from '../Wrapper';
import Text from '../../Text';
import Container from '../../Container';
import Image from '../../Image';
import myProfile from '../../../images/myProfile.jpeg';
import superhost from '../../../images/superhost.svg';

const HostInfo = () => {
  return (
    <>
      <Wrapper>
        <Container className={style['host-wrapper']}>
          <Container className={style['text-info']}>
            <Container className={style['room-type']}>아파트 전체</Container>
            <Container className={style['host-name']}>호스트: 준형님</Container>
          </Container>
          <Container className={style['thumbnail-info']}>
            <Container className={style['thumbnail-container']}>
              <Image src={myProfile} />
            </Container>
            <Container className={style['superhost']}>
              <Image src={superhost} width={28} height={28} />
            </Container>
          </Container>
        </Container>
        <Container className={style['room-wrapper']}>
          <Text className={style['info']}>
            최대 인원&nbsp;<Text>1명</Text>
          </Text>
          <Text className={style['info']}>
            침실&nbsp;<Text>1개</Text>
          </Text>
          <Text className={style['info']}>
            침대&nbsp;<Text>1개</Text>
          </Text>
          <Text className={style['info']}>
            욕실&nbsp;<Text>1개</Text>
          </Text>
        </Container>
      </Wrapper>
    </>
  );
};

export default HostInfo;
