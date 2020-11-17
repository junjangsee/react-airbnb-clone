import React from 'react';
import style from './index.module.scss';
import classNames from 'classnames';
import back from '../../../images/back.svg';
import like from '../../../images/like.svg';
import share from '../../../images/share.svg';
import Container from '../../Container';
import Image from '../../Image';
import Button from '../../Button';

const Header = () => {
  const classProps = classNames(style['header-wrapper']);

  return (
    <Container tag='header' className={classProps}>
      <Container className={style['header-container']}>
        <Container className={style['left-container']}>
          <Button className='back-btn'>
            <Container>
              <Image src={back} width={16} height={16} alt='back button' />
            </Container>
          </Button>
        </Container>
        <Container className={style['right-container']}>
          <Button className={style['share-btn']}>
            <Container>
              <Image src={share} width={16} height={16} alt='share button' />
            </Container>
          </Button>
          <Button className='like-btn'>
            <Container>
              <Image src={like} width={16} height={16} alt='like button' />
            </Container>
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default Header;
