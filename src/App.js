import React, { useEffect } from "react";
import { getDB, getAPI, getDBtemps } from "./Reducers";
import { useSelector, useDispatch } from "react-redux";
import { Route } from "react-router-dom";
//Componentes React
import LandingPage from "./Components/LandingPage";
import Dogs from "./Components/Dogs";
import Nav from "./Components/Nav";
import { AddDog } from "./Components/AddDog";
import { DogDetails } from "./Components/DogDetails";
import MyDogs from "./Components/MyDogs";
import DetailedInfo from "./Components/DetailedInfo";

//Constantes de rutas
import * as x from "./consts.js";
//Funciones ayudantes
// import * as helper from "./Helpers";

function App() {
  let state1 = useSelector((state) => state.customDogs);
  let state2 = useSelector((state) => state.temperaments);
  let state3 = useSelector((state) => state.apiDogs);
  const dispatch = useDispatch();
  //Esta funcion sincroniza la base de datos con el estado de redux
  useEffect(() => {
    if (state1.length === 0) dispatch(getDB());

    if (state2.length === 0) dispatch(getDBtemps());

    if (state3.length === 0) dispatch(getAPI());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path={x.VERSION} component={Nav} />
      <Route exact path={x.DOGS} component={Dogs} />
      <Route exact path={x.DETAILS} component={DetailedInfo} />
      <Route exact path={x.ADD_DOG} component={AddDog} />
      <Route exact path={x.MY_DOGS} component={MyDogs} />
      <Route
        exact
        path={x.DOGS + "/:dogId"}
        render={({ match }) => <DogDetails dog={match.params.dogId} />}
      />
    </React.Fragment>
  );
}

export default App;
