import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './index.module.scss';
import Container from '../Container';
import Text from '../Text';

const Sidebar = ({ manages }) => {
  return (
    <>
      <Container tag='nav' className={style['sidebar-wrapper']}>
        <Container className={style['sidebar-container']}>
          <Container className={style['title-container']}>
            <Link to='/'>
              <Text tag='h1'>Admin</Text>
            </Link>
          </Container>
          <Container className={style['manage-container']}>
            <ul className={style['manages']}>
              {manages.map((manage, index) => (
                <li key={index} className={style['manage']}>
                  <NavLink
                    to={`${manage.path}`}
                    activeStyle={{ backgroundColor: '#35c5ff' }}>
                    <Container className={style['text-container']}>
                      <Text className={style['text']}>{manage.manage}</Text>
                    </Container>
                  </NavLink>
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
