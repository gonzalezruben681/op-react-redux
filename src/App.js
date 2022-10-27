import TodosContainer from "./components/containers/TodoContainer";
import TodoFormContainer from "./components/containers/TodoFormContainer";
import Filteroptions from './components/pure/FilterOptions';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <TodosContainer></TodosContainer>
        <TodoFormContainer></TodoFormContainer>
        {/* Filter Options contain Filter Container */}
        <Filteroptions></Filteroptions>
    </div>
  );
}
