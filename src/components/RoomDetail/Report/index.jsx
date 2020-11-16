import React from 'react';
import style from './index.module.scss';
import Wrapper from '../Wrapper';
import Container from '../../Container';
import Image from '../../Image';
import Text from '../../Text';
import report from '../../../images/report.svg';

const Report = () => {
  return (
    <>
      <Wrapper>
        <Container className={style['report-container']}>
          <Image src={report} width={16} height={16} />
          <Text>숙소 신고하기</Text>
        </Container>
      </Wrapper>
    </>
  );
};

export default Report;
