//import Banner from '../../AppBanner/src/components/banner'
import {Banner} from '@app/appBanner'
import Products from '../../Home/src/components/Products'
import ProductList from './components/ProductList';
export default function Root(props) {

  return  (
    <>
    <ProductList />
      <Banner text={"Insurance that keeps your stuff safe"} subText={"Renter tested. Landlord approved. Starting from $5/mo."}/>
      <Products />
    </>
  )
  ;
}
