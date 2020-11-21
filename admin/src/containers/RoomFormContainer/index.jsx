import React from 'react';
import Api from '../../apis/Api';
import RoomForm from '../../components/RoomForm';

const api = new Api('http://localhost:8080');

const RoomFormContainer = () => {
  const onSubmit = (formData) => {
    postRoomData(formData);
  };

  async function postRoomData(formData) {
    const response = await api.post('/room', formData);
    return response.data;
  }

  return <RoomForm onSubmit={onSubmit} />;
};

export default RoomFormContainer;
