import React from 'react';
import style from './index.module.scss';
import Wrapper from '../Wrapper';
import Text from '../../Text';
import Container from '../../Container';
import Image from '../../Image';
import detail from '../../../images/detail.svg';

const Policy = ({ policies }) => {
  return (
    <>
      {policies.map((policy, index) => (
        <>
          <Wrapper>
            <Container className={style['policy-container']}>
              <Container key={index} tag='section' className={style['title']}>
                <Text tag='h2'>{policy.title}</Text>
                <Text>{policy.description}</Text>
              </Container>
              <Container className={style['detail-image']}>
                <Image src={detail} width={14} height={14} />
              </Container>
            </Container>
          </Wrapper>
        </>
      ))}
    </>
  );
};

export default Policy;
