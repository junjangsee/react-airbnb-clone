import React from 'react';
import Api from '../apis/Api';

const api = new Api('http://localhost:8080');

function useHost() {
  const [host, setHost] = React.useState({});

  React.useEffect(async () => {
    const host = await api.get('/host');
    setHost(host.data);
  }, []);

  return host;
}

export default useHost;
