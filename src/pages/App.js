import React, { useEffect, useState, useReducer } from "react";

import "../styles/styles.scss";
import Footer from "../parts/Footer";
import Body from "../parts/Body";
import Header from "../parts/Header.jsx";
import reducer, { initialState } from "../store/rootReducer";
import { GET_ALL_PLANETS } from "../store/actions";

const BASE_URL = "https://swapi.dev/api/";
export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

function App() {
  const [ready, setReady] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllPlanets = async (url) => {
    try {
      const response = await fetch(url);
      const parsedResponse = await response.json();
      dispatch({ type: GET_ALL_PLANETS, payload: parsedResponse });
      setReady(true);
    } catch (e) {
      console.log(e);
    }
  };

  const handleNav = (value) => {
    if (value === "next") return getAllPlanets(next);
    getAllPlanets(previous);
  };

  useEffect(() => {
    getAllPlanets(`${BASE_URL}planets/`);
  }, []);

  const { previous, next } = state.allPlanets;
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App">
          <div className="container">
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            <Body activeTab={activeTab} ready={ready} />
          </div>
          {activeTab === 1 && (
            <Footer previous={previous} next={next} handleNav={handleNav} />
          )}
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
