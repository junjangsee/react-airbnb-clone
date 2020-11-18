import React from 'react';
import Wrapper from '../Wrapper';
import style from './index.module.scss';
import Text from '../../Text';
import Image from '../../Image';
import Card from '../../Card';
import Container from '../../Container';

const Review = ({ reviewers }) => {
  if (!reviewers) {
    return null;
  }

  const calcReviewScore = () => {
    const totalScore = reviewers.reduce((acc, currentValue) => {
      return acc + parseInt(currentValue.score, 10);
    }, 0);

    return Math.round((totalScore / reviewers.length) * 100) / 100;
  };

  return (
    <>
      <Wrapper className='contents-padding'>
        <Container className={style['review-wrapper']}>
          <Container tag='section' className={style['title']}>
            <Text tag='h2'>
              <Text className={style['star']}>★</Text>&nbsp;
              <Container className={style['score']}>
                <Text>
                  {calcReviewScore()}점(후기 {reviewers.length}개)
                </Text>
              </Container>
            </Text>
          </Container>
          <Container className={style['reviews-container']}>
            <Container className={style['card-wrapper']}>
              {reviewers.map((reviewer, index) => (
                <Container key={index} className={style['card-container']}>
                  <Card className={style['card']}>
                    <Container className={style['profile']}>
                      <Container className={style['thumbnail']}>
                        <Image
                          src={reviewer.thumbnail}
                          width={40}
                          height={40}
                        />
                      </Container>
                      <Container className={style['info']}>
                        <Text className={style['nickname']}>
                          {reviewer.nickname}
                        </Text>
                        <Text className={style['date']}>{reviewer.date}</Text>
                      </Container>
                    </Container>
                    <Container className={style['description']}>
                      <Text tag='p'>{reviewer.description}</Text>
                    </Container>
                  </Card>
                </Container>
              ))}
            </Container>
          </Container>
          <Container className={style['review-container']}>
            <a href=''>후기 {reviewers ? reviewers.length : 0}개 모두 보기</a>
          </Container>
        </Container>
      </Wrapper>
    </>
  );
};

export default Review;
