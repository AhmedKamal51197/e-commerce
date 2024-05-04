import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClothesList from "./components/ClothesList";
import Layout from "./components/Layout ";
import Register from "./components/Register";
import Login from "./components/Login";
import ItemDetails from "./components/ItemDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ClothesList />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="item-details/:id" element={<ItemDetails />} />
            <Route path="*" element={<>NoPage</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
