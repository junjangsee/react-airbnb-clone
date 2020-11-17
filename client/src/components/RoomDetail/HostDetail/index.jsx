import React from 'react';
import style from './index.module.scss';
import Wrapper from '../Wrapper';
import Text from '../../Text';
import Container from '../../Container';
import Image from '../../Image';
import superhost from '../../../images/superhost.svg';
import safe from '../../../images/safe.svg';

const HostDetail = ({ host }) => {
  const {
    firstname,
    joinDate,
    thumbnail,
    isSuperHost,
    isAuth,
    description,
    explanations,
    statuses,
  } = host;

  return (
    <>
      <Wrapper className='contents-padding'>
        <Container className={style['host-wrapper']}>
          <Container className={style['host-container']}>
            <Container className={style['text-info']}>
              <Container className={style['host-name']}>
                호스트: {firstname}님
              </Container>
              <Container className={style['join-date']}>
                회원 가입일: {joinDate}
              </Container>
            </Container>
            <Container className={style['thumbnail-info']}>
              <Container className={style['thumbnail-container']}>
                <Image src={thumbnail} />
              </Container>
              <Container className={style['superhost']}>
                {isSuperHost ? (
                  <Image src={superhost} width={28} height={28} />
                ) : null}
              </Container>
            </Container>
          </Container>
          <Container className={style['achievements-container']}>
            <Container className={style['achievement']}>
              <Text className={style['icon']}>★</Text>
              <Text className={style['description']}>후기 21개</Text>
            </Container>
            {isAuth ? (
              <Container className={style['achievement']}>
                <Text className={style['icon']}>✔︎</Text>
                <Text className={style['description']}>본인 인증 완료</Text>
              </Container>
            ) : null}
            {isSuperHost ? (
              <Container className={style['achievement']}>
                <Text className={style['icon']}>☀︎</Text>
                <Text className={style['description']}>슈퍼호스트</Text>
              </Container>
            ) : null}
          </Container>
          <Container className={style['description-container']}>
            <Text tag='p'>{description}</Text>
          </Container>
          <Container className={style['explanation-container']}>
            {explanations.map((explanation, index) => (
              <Container key={index} className={style['explanation']}>
                <Text className={style['title']}>{explanation.title}</Text>
                <Text className={style['description']}>
                  {explanation.description}
                </Text>
              </Container>
            ))}
          </Container>
          <Container className={style['status-container']}>
            {statuses.map((status, index) => (
              <Text key={index} className={style['status']}>
                {status.title}: {status.result}
              </Text>
            ))}
          </Container>
          <Container className={style['call-container']}>
            <a href=''>호스트에게 연락하기</a>
          </Container>
          <Container className={style['safe-container']}>
            <Text>
              안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나
              대화를 나누지 마세요.
            </Text>
            <Image src={safe} width={24} height={24} />
          </Container>
        </Container>
      </Wrapper>
    </>
  );
};

export default HostDetail;
