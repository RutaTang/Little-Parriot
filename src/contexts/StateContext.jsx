import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

const StateProvider = (props) => {
  const [ playFullScreen, setPlayFullScreen ] = useState(false);
  return (
    <StateContext.Provider value={{ playFullScreen, setPlayFullScreen }}>
      {props.children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
