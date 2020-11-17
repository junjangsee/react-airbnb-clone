import React from 'react';
import classNames from 'classnames';
import style from './index.module.scss';
import Container from '../../Container';
import Image from '../../Image';
import Text from '../../Text';
import Button from '../../Button';
import cardLike from '../../../images/cardLike.svg';

const CardDetail = ({ className, roomsInfo, nearsInfo }) => {
  const classProps = classNames(
    style['card-detail-room-container'],
    style[`${className}`]
  );

  return (
    <Container className={style['card-detail-wrapper']}>
      {roomsInfo
        ? roomsInfo.map((info, index) => (
            <Container key={index} className={classProps}>
              <Container className={style['card-detail']}>
                <Container className={style['image-container']}>
                  <Image className={style['image']} src={info.src} />
                  <Button className={style['like-btn']}>
                    <Image src={cardLike} width={24} heigth={24} />
                  </Button>
                </Container>
                <Container className={style['text-container']}>
                  <Container className={style['score']}>
                    <Text className={style['icon']}>★</Text>&nbsp;
                    <Text className={style['avg']}>{info.avg}</Text>&nbsp;
                    <Text className={style['count']}>({info.reviews})</Text>
                  </Container>
                  <Container className={style['rooms']}>
                    {info.type} &middot; {info.rooms}
                  </Container>
                  <Container className={style['description']}>
                    {info.description}
                  </Container>
                </Container>
              </Container>
            </Container>
          ))
        : null}
      {nearsInfo
        ? nearsInfo.map((info, index) => (
            <Container key={index} className={classProps}>
              <Container className={style['card-detail']}>
                <Container className={style['image-container']}>
                  <Image className={style['image']} src={info.src} />
                  <Button className={style['like-btn']}>
                    <Image src={cardLike} width={24} heigth={24} />
                  </Button>
                </Container>
                <Container className={style['text-container']}>
                  <Container className={style['score']}>
                    <Text className={style['icon']}>★</Text>&nbsp;
                    <Text className={style['avg']}>{info.avg}</Text>&nbsp;
                    <Text className={style['count']}>({info.reviews})</Text>
                  </Container>
                  <Container className={style['description']}>
                    {info.description}
                  </Container>
                  <Container className={style['cost']}>
                    <Text className={style['price']}>{info.cost}</Text>/인
                  </Container>
                </Container>
              </Container>
            </Container>
          ))
        : null}
    </Container>
  );
};

export default CardDetail;
