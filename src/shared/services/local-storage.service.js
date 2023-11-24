export const loadStateByNameFromLocalStorage = (stateName) => {
  try {
    const serializedState = localStorage.getItem(stateName);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Can`t load state', err)
    return undefined;
  }
};

export const saveStateToLocalStorage = (stateName, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateName, serializedState);
  } catch (err) {
    console.error('Can`t save state', err)
    return undefined;
  }
};
