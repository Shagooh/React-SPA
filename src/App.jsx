import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";


import HomePage from "./views/HomePage"
import PlansPage from "./views/ContactoPage"
import NotFound from "./views/NotFound"

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
        path="/"
        element={<HomePage/>}
        />
        <Route
        path="/contacto"
        element={<PlansPage/>}
        />
        <Route
        path="/*"
        element={<NotFound/>}
        />
      </Routes>

    </div>
  );
};
export default App;
