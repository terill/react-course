const log = ({ getState }) => next => action => {
  console.log('[redux] action:', action);
  const result = next(action);
  console.log('[redux] next state:', getState());
  return result;
};

export default log;
