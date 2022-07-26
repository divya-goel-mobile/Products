//import Banner from '../../AppBanner/src/components/banner'
import ProductList from "./components/Home";
import { BrowserRouter } from "react-router-dom";
export default function Root(props) {
  return (
    <BrowserRouter>
      <ProductList />
      {/* <Banner text={"Insurance that keeps your stuff safe"} subText={"Renter tested. Landlord approved. Starting from $5/mo."}/> */}
    </BrowserRouter>
  );
}
