import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Login from "./components/Login";
import Register from "./components/Register";
import Orders from "./components/Orders";
import Cart from "./components/cart";

export default function App(){
  return (
    <>
      <Header/>
      <Content/>
      <Login/>
      <Register/>
      <Cart/>
      <Orders/>
      <Footer/>
    </>
  );
  
} 