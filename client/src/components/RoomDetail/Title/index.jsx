import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';
import Container from '../../../components/Container';
import Text from '../../../components/Text';
import Button from '../../../components/Button';

const Title = ({ className }) => {
  const classProps = classNames(style['title-wrapper'], className);

  return (
    <Container className={classProps}>
      <Container className={style['title-container']}>
        <Container className={style['titles']}>
          <Container className={style['title']}>
            <Text tag='h1'>
              [장기거주환영] Free WiFi / 종합운동장 2분, 잠실새내 5분! 아늑한
              갬성 하우스
            </Text>
          </Container>
          <Container className={style['sub-title']}>
            <Container className={style['star-container']}>
              <Text className={style['star']}>★</Text>
              <Button className={style['star-btn']}>
                <Text className={style['point']}>4.75</Text>&nbsp;
                <Text className={style['count']}>(12)</Text>
              </Button>
            </Container>
            <Container className={style['medal-container']}>
              <Text className={style['medal']}>🏅</Text>
              <Text className={style['host']}>슈퍼호스트</Text>
            </Container>
            <Container className={style['location-container']}>
              <Text className={style['location']}>
                <a href=''>송파구, 서울특별시, 한국</a>
              </Text>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Title;
