import React from 'react';
import Axios from 'axios';

function useRoom() {
  const [room, setRoom] = React.useState(null);

  React.useEffect(async () => {
    const response = await Axios.get('http://localhost:8080/room');
    setRoom(response.data);
  }, []);

  return room;
}

export default useRoom;
