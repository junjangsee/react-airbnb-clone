import React from 'react';
import Carousel from '../../components/Carousel';
import Title from '../../components/RoomDetail/Title';
import rooms from '../../shared/__mocks__/rooms';

const RoomDetailContainer = () => {
  return (
    <>
      <Carousel images={rooms} />
      <Title />
    </>
  );
};

export default RoomDetailContainer;
