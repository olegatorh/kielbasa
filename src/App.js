import './App.css';
import {Route, Switch} from "react-router-dom"
import MainPage from "./components/MainPage";
import {ProductPage} from "./components/ProductPage/ProductPage";
import {ProductList} from "./components/ProductPage/ProductList";

function App() {
  return (
      <>
        <Switch>
          <Route exact path={'/'} component={MainPage}/>
          <Route exact path={'/ProductPage'} component={ProductPage}/>
        </Switch>
      </>
  );
}

export default App;
