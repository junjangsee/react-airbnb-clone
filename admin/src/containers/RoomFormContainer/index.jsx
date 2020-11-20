import React from 'react';
import RoomForm from '../../components/RoomForm';

const RoomFormContainer = () => {
  const onSubmit = (formData) => {
    console.log(formData);
    // TODO : formData를 POST 요청
    // TODO : customHook으로 server에서 만든 POST API 데이터로 formData 쏘기
  };

  return <RoomForm onSubmit={onSubmit} />;
};

export default RoomFormContainer;
