import React from 'react';
import Footer from '../components/RoomDetail/Footer';
import Header from '../components/RoomDetail/Header';
import RoomDetailContainer from '../containers/RoomDetail';

const RoomDetailPage = () => {
  return (
    <>
      <Header />
      <RoomDetailContainer />
      <Footer />
    </>
  );
};

export default RoomDetailPage;
