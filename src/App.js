import "./App.css";
import Body from "./Components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="font-bold text-3xl text-red-600">
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
