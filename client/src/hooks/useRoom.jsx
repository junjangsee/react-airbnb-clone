import React from 'react';
import Api from '../apis/Api';

const api = new Api('http://localhost:8080');

function useRoom() {
  const [room, setRoom] = React.useState([]);

  React.useEffect(async () => {
    const room = await api.get('/room');
    setRoom(room.data);
  }, []);

  return room;
}

export default useRoom;
