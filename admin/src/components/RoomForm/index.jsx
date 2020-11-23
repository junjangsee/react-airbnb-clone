import React from 'react';
import Form from '../Form';
import Input from '../Input';
import Label from '../Label';
import Container from '../Container';

const RoomForm = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    title: '',
    country: '',
    city: '',
    address: '',
    description: '',
  });

  const { title, country, city, address, description } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Container tag='section'>
        <Form method='post' onSubmit={handleSubmit}>
          <Label htmlFor='title'>숙소 제목</Label>
          <Input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={handleChange}
          />
          <br />
          위치
          <Label htmlFor='country'>나라</Label>
          <Input
            type='text'
            name='country'
            id='country'
            value={country}
            onChange={handleChange}
          />
          <br />
          <Label htmlFor='city'>시/도</Label>
          <Input
            type='text'
            name='city'
            id='city'
            value={city}
            onChange={handleChange}
          />
          <br />
          <Label htmlFor='address'>시/군/구</Label>
          <Input
            type='text'
            name='address'
            id='address'
            value={address}
            onChange={handleChange}
          />
          <br />
          <Label htmlFor='description'>숙소 설명</Label>
          <textarea
            type='text'
            name='description'
            id='description'
            value={description}
            onChange={handleChange}
          />
          <br />
          <Input type='submit' value='저장' />
        </Form>
      </Container>
    </>
  );
};

export default RoomForm;
