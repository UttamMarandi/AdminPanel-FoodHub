//
// "extends": [
//       "react-app",
// "react-app/jest";
//     ]

// App.js

// import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// //Pages
// import Sidebar from "./components/sidebar/sidebar";
// import Topbar from "./components/topbar/Topbar";
// import Home from "./pages/home/Home";
// import UserList from "./pages/userlist/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser.js/NewUser";
// import ProductList from "./pages/productList/ProductList";
// import Product from "./pages/product/Product";
// import NewProduct from "./pages/newProduct/NewProduct";
// import Login from "./pages/login/Login";
// import { useEffect, useState } from "react";

// function App() {
//   // const [admin, setAdmin] = useState(true);

//   // const resUser = JSON.parse(
//   //   JSON.parse(localStorage.getItem("persist:root")).user
//   // );
//   // const {
//   //   currentUser: { isAdmin },
//   // } = resUser;
//   // console.log("isAdmin", isAdmin);

//   // useEffect(() => {
//   //   setAdmin(isAdmin);
//   // }, [isAdmin]);

//   return (
//     <Router>
//       <Switch>
//         <Topbar />
//         <div className="container">
//           <Sidebar />

//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/users">
//             <UserList />
//           </Route>
//           <Route path="/user/:userId">
//             <User />
//           </Route>
//           <Route path="/newUser">
//             <NewUser />
//           </Route>
//           <Route path="/products">
//             <ProductList />
//           </Route>
//           <Route path="/product/:productsId">
//             <Product />
//           </Route>
//           <Route path="/newProduct">
//             <NewProduct />
//           </Route>
//           <Route exact path="/">
//             <Home />
//           </Route>
//         </div>
//       </Switch>
//     </Router>
//   );
// }

// export default App;
