import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';
import Container from '../../../components/Container';
import Text from '../../../components/Text';
import Button from '../../../components/Button';

const Title = ({ className, room, host }) => {
  const { roomTitle, reviewers, location } = room;
  const { isSuperHost } = host;
  const classProps = classNames(style['title-wrapper'], className);

  const calcReviewScore = () => {
    const totalScore = reviewers.reduce((acc, currentValue) => {
      return acc + parseInt(currentValue.score, 10);
    }, 0);

    return Math.round((totalScore / reviewers.length) * 100) / 100;
  };

  return (
    <Container className={classProps}>
      <Container className={style['title-container']}>
        <Container className={style['titles']}>
          <Container className={style['title']}>
            <Text tag='h1'>{roomTitle}</Text>
          </Container>
          <Container className={style['sub-title']}>
            {reviewers ? (
              <Container className={style['star-container']}>
                <Text className={style['star']}>★</Text>
                <Button className={style['star-btn']}>
                  <Text className={style['point']}>{calcReviewScore()}</Text>
                  &nbsp;
                  <Text className={style['count']}>({reviewers.length})</Text>
                </Button>
              </Container>
            ) : null}
            {isSuperHost ? (
              <Container className={style['medal-container']}>
                <Text className={style['medal']}>🏅</Text>
                <Text className={style['host']}>슈퍼호스트</Text>
              </Container>
            ) : null}
            {location ? (
              <Container className={style['location-container']}>
                <Text className={style['location']}>
                  <a href=''>
                    {location.address}, {location.city}, {location.country}
                  </a>
                </Text>
              </Container>
            ) : null}
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Title;
