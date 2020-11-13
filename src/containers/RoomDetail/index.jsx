import React from 'react';
import Carousel from '../../components/Carousel';
import HostInfo from '../../components/RoomDetail/HostInfo';
import SpecialPrice from '../../components/RoomDetail/SpecialPrice';
import Title from '../../components/RoomDetail/Title';
import rooms from '../../shared/__mocks__/rooms';

const RoomDetailContainer = () => {
  return (
    <>
      <Carousel images={rooms} />
      <Title />
      <SpecialPrice />
      <HostInfo />
    </>
  );
};

export default RoomDetailContainer;
