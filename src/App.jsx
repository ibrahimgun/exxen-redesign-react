import Home from "./pages/home/Home";
import "./app.scss";
import Watch from "./pages/watch/Watch";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/Watch" component={Watch} />
    </div>
  );
}

export default App;
