import React from 'react';
import style from './index.module.scss';
import Wrapper from '../Wrapper';
import Text from '../../Text';
import Container from '../../Container';

const Description = ({ description }) => {
  return (
    <>
      <Wrapper className='contents-padding'>
        <Container className={style['description-container']}>
          <Container className={style['description']}>
            <Text className={style['content']}>
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </Text>
          </Container>
          <Container className={style['to-host']}>
            <a href=''>호스트에게 연락하기</a>
          </Container>
        </Container>
      </Wrapper>
    </>
  );
};

export default Description;
