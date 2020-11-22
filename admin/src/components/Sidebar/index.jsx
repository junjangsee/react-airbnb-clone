import React from 'react';
import style from './index.module.scss';
import Container from '../Container';
import Text from '../Text';

const Sidebar = ({ manages }) => {
  const handleClick = (e) => {
    const activeTarget = document.querySelector(`.${style['on']}`);

    if (activeTarget) {
      activeTarget.classList.remove(style['on']);
    }

    e.currentTarget.classList.toggle(style['on']);
  };

  return (
    <>
      <Container tag='nav' className={style['sidebar-wrapper']}>
        <Container className={style['sidebar-container']}>
          <Container className={style['title-container']}>
            <Text tag='h1'>Admin</Text>
          </Container>
          <Container className={style['manage-container']}>
            <ul className={style['manages']}>
              {manages.map((manage, index) => (
                <li
                  key={index}
                  className={style['manage']}
                  onClick={handleClick}>
                  <Container>
                    <Text className={style['text']}>{manage.manage}</Text>
                  </Container>
                </li>
              ))}
            </ul>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Sidebar;
