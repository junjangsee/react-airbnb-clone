import React from 'react';
import style from './index.module.scss';
import Wrapper from '../Wrapper';
import Text from '../../Text';
import Image from '../../Image';
import Container from '../../Container';
import Card from '../../Card';

const BedCase = ({ bedCase }) => {
  return (
    <>
      <Wrapper className='contents-padding'>
        <Container className={style['bed-container']}>
          <Container tag='section' className={style['bed-case']}>
            <Text tag='h2'>침대/침구 유형</Text>
          </Container>
          <Container className={style['case-wrapper']}>
            {bedCase.map((bed, index) => (
              <Container key={index} className={style['card-container']}>
                <Card className={style['card']}>
                  <Container className={style['case-container']}>
                    <Container className={style['icon']}>
                      <Image src={bed.icon} width={24} heigth={24} />
                    </Container>
                    <Container className={style['place']}>
                      {bed.place}
                    </Container>
                    <Container className={style['description']}>
                      {bed.description}
                    </Container>
                  </Container>
                </Card>
              </Container>
            ))}
          </Container>
        </Container>
      </Wrapper>
    </>
  );
};

export default BedCase;
