import LoginFormContainer from "./components/containers/LoginFormContainer";
import TodosContainer from "./components/containers/TodoContainer";
import TodoFormContainer from "./components/containers/TodoFormContainer";
import Filteroptions from './components/pure/FilterOptions';
import "./styles.css";

export default function AppReduxSaga() {
  return (
    <div className="App">
      <LoginFormContainer />
    </div>
  );
}
