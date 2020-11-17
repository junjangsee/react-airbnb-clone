import React from 'react';
import style from './index.module.scss';
import Wrapper from '../Wrapper';
import Text from '../../Text';
import Image from '../../Image';
import Container from '../../Container';

const Facilities = ({ facilities }) => {
  return (
    <>
      <Wrapper className='contents-padding'>
        <Container className={style['facilities-container']}>
          <Container tag='section' className={style['title']}>
            <Text tag='h2'>편의시설</Text>
          </Container>
          <Container className={style['facilities']}>
            {facilities.map((item, index) => (
              <Container key={index} className={style['list']}>
                <Container className={style['description']}>
                  {item.description}
                </Container>
                <Container className={style['icon']}>
                  <Image src={item.icon} width={24} height={24} />
                </Container>
              </Container>
            ))}
          </Container>
          <Container className={style['detail-container']}>
            <a href=''>편의시설 {facilities.length}개 모두 보기</a>
          </Container>
        </Container>
      </Wrapper>
    </>
  );
};

export default Facilities;
