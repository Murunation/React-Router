import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import { MENUS, users } from "./util/data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function LoginCheck(userName, password) {
    users.forEach((user) => {
      if (userName === user.userName && password === user.password) {
        console.log("Zuw");
        setIsLoggedIn(true);
      } else {
        console.log("Buruu");
      }
    });
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={MENUS[0].url} element={<Home />} />
        <Route path={MENUS[1].url} element={<About />} />
        <Route
          path={MENUS[2].url}
          element={<Login LoginCheck={LoginCheck} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
