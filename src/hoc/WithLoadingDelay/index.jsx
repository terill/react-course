import React, { useState } from 'react';
import Loader from 'react-loader-spinner';

function WithLoadingDelay(props) {
  const [loadingState, setLoadingState] = useState(true);

  setTimeout(() => {
    setLoadingState(false);
  }, 2000);

  if (loadingState) {
    return <Loader type="Rings" color="#777" height={100} width={350} />;
  }
  return props.children;
}

export default WithLoadingDelay;
