import React from 'react';
import style from './index.module.scss';
import Wrapper from '../Wrapper';
import Text from '../../Text';
import Container from '../../Container';

const Description = () => {
  return (
    <>
      <Wrapper className='contents-padding'>
        <Container className={style['description-container']}>
          <Container className={style['description']}>
            <Text className={style['content']}>
              ★코로나19 예방을 위해 전문업체를 통해 살균/소독을 실시하고
              있습니다.
              <br />
              <br />
              ★NO청소비 NO추가비용! 깔끔하게 숙박비용만 내고 이용하세요.
              <br />
              <br />
              따뜻한 햇볕이 잘드는 고층에 위치한 조용한 방입니다. 혼자 여유로이
              머물다 가실 분들을 위해 아늑하게 준비했습니다. :)
              <br />
              <br />
              <span>숙소</span>
              <br />
              종합운동장역 2분, 잠실새내역 5분거리에 위치했습니다. 주요상권에
              위치해 근처 병원, 약국, 편의점, 카페 등 접근성이 용이합니다.
              <br />
              <br />
              <span>게스트 이용 가능 공간/시설</span>
              <br />집 전체를 게스트가 온전히 사용하실 수 있는 단독하우스
              입니다.
              <br />
              <br />
              <span>기타 주의사항</span>
              게스트의 안전을 위해 에어비앤비 이외의 별도 메신저를 통해 연락을
              강요하지 않습니다. 오로지 에어비앤비를 통해서만 연락을 주고
              받습니다.
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
