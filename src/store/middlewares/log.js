const log = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("Prev State:", store.getState());
  console.log("Dispatching: ", action.type);
  let result = next(action);
  console.log("NextState: ", store.getState());

  console.groupEnd();
  return result;
};

export default log;
