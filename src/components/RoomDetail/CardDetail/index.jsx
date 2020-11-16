import React from 'react';
import classNames from 'classnames';
import style from './index.module.scss';
import Container from '../../Container';
import Image from '../../Image';
import Button from '../../Button';
import cardLike from '../../../images/cardLike.svg';

const CardDetail = ({ className, children, image }) => {
  const classProps = classNames(
    style['card-detail-room-container'],
    style[`${className}`]
  );

  return (
    <Container className={style['card-detail-wrapper']}>
      <Container className={classProps}>
        <Container className={style['card-detail']}>
          <Container className={style['image-container']}>
            <Image className={style['image']} src={image} />
            <Button className={style['like-btn']}>
              <Image src={cardLike} width={24} heigth={24} />
            </Button>
          </Container>
          <Container className={style['text-container']}>{children}</Container>
        </Container>
      </Container>
    </Container>
  );
};

export default CardDetail;
