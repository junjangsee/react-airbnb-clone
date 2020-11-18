import React from 'react';
import style from './index.module.scss';
import Container from '../../Container';
import Text from '../../Text';
import Wrapper from '../Wrapper';

const Option = ({ location, areas }) => {
  if (!location) {
    return null;
  }

  return (
    <>
      <Container className={style['separator']}></Container>
      <Wrapper className='contents-padding'>
        <Container className={style['option-wrapper']}>
          <Container tag='section' className={style['title']}>
            <Text tag='h2'>
              {location.address} 및 인근의 다른 옵션 살펴보기
            </Text>
            <Container className={style['more']}>
              {location.address}의 숙소 더 보기:
              <Text>
                주택 &middot; B&B &middot; 로프트 &middot; 저택 또는 별장
                &middot; 콘도
              </Text>
            </Container>
          </Container>
          <Container className={style['areas-container']}>
            {areas.map((area, index) => (
              <Container key={index} className={style['area']}>
                {area}
              </Container>
            ))}
          </Container>
        </Container>
      </Wrapper>
    </>
  );
};

export default Option;
