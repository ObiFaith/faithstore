import {
  Home,
  Login,
  Layout,
  Signup,
  OrderSummary,
  ForgotPassword,
  ProductDetails,
} from ".";
import { useApi } from "./store/api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const { fetchData } = useApi();
  fetchData();

  /* const MyVideo = () => <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing={false} volume={0.5} /> 
		<MyVideo />
	*/

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<OrderSummary />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
