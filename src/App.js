import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//Pages
import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser.js/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useState } from "react";

function App() {
  const [admin, setAdmin] = useState(false);

  if (localStorage.getItem("persist:root") !== null) {
    const resUser = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).user
    );
    const {
      currentUser: { isAdmin },
    } = resUser;
    console.log("isAdmin", isAdmin);
    setAdmin(isAdmin);
  }

  return (
    <Router>
      <Route path="/login">
        <Login />
      </Route>
      {admin && (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Switch>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productsId">
                <Product />
              </Route>
              <Route path="/newProduct">
                <NewProduct />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
