import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

const StateProvider = (props) => {
  const [ playFullScreen, setPlayFullScreen ] = useState(false);
	const [ page, setPage ] = useState(0);
  return (
    <StateContext.Provider value={{ playFullScreen, setPlayFullScreen,page, setPage }}>
      {props.children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
