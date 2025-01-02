import TopContainer from "./components/sections/TopContainer";
import LineBar from "./components/frequent/LineBar";
import ProductsPage from "./components/products/ProductsPage";
export default function Home() {
  return (
    <div>
      <TopContainer/>
      <LineBar/>
      <ProductsPage/>
      <LineBar/>


    </div>
  );
}
