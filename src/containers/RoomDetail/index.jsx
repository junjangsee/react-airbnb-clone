import React from 'react';
import Wrapper from '../../components/RoomDetail/Wrapper';
import Carousel from '../../components/Carousel';
import HostInfo from '../../components/RoomDetail/HostInfo';
import RoomInfo from '../../components/RoomDetail/RoomInfo';
import SpecialPrice from '../../components/RoomDetail/SpecialPrice';
import Title from '../../components/RoomDetail/Title';
import rooms from '../../shared/__mocks__/rooms';
import roomInfos from '../../shared/__mocks__/roomInfos';
import Description from '../../components/RoomDetail/Description';

const RoomDetailContainer = () => {
  return (
    <>
      <Carousel images={rooms} />
      <Title />
      <SpecialPrice />
      <HostInfo />
      <Wrapper className='contents-padding'>
        {roomInfos.map((info, index) => (
          <RoomInfo key={index} {...info} />
        ))}
      </Wrapper>
      <Description />
    </>
  );
};

export default RoomDetailContainer;
