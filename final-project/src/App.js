import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Layout from "./components/Layout/Layout.js";
import Home from "./components/Home/Home";
import NoPage from "./components/NoPage/NoPage";
import Reservation from "./components/Reservation/Reservation";
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>;
          <Route index element={<Home/>}/>;
          <Route path="reservation" element={<Reservation/>}/>;
          <Route path="*" element={<NoPage/>}/>;
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
