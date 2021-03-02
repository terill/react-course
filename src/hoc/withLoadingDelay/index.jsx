import React, { useState } from 'react';
import Loader from 'react-loader-spinner';

function withLoadingDelay(WrappedComponent) {
  return function WithLoadingDelay(props) {
    const [loadingState, setLoadingState] = useState(true);

    setTimeout(() => {
      setLoadingState(false);
    }, 2000);

    return loadingState ? (
      <Loader type="Rings" color="#777" height={100} width={350} />
    ) : (
      <WrappedComponent {...props} />
    );
  };
}

export default withLoadingDelay;
