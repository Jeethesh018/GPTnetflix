import "./App.css";
import Body from "./Components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className=" text-3xl">
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
