import React from 'react';
import Axios from 'axios';

function useHost() {
  const [host, setHost] = React.useState({});

  React.useEffect(async () => {
    const response = await Axios.get('http://localhost:8080/host');
    setHost(response.data);
  }, []);

  return host;
}

export default useHost;
