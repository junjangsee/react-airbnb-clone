import React from 'react';
import Carousel from '../../components/Carousel';
import rooms from '../../shared/__mocks__/rooms';

const RoomDetailContainer = () => {
  return <Carousel images={rooms} />;
};

export default RoomDetailContainer;
