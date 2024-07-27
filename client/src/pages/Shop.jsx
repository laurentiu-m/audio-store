import ShopHeader from "../components/shop/ShopHeader";
import ShopFilter from "../components/shop/ShopFilter";
import ShopProducts from "../components/shop/ShopProducts";

function Shop() {
  return (
    <div className="pt-[9rem] pb-10 px-7 bg-white flex flex-col gap-10 items-center sm:px-[4rem]">
      <ShopHeader />
      <ShopFilter />
      <ShopProducts />
    </div>
  );
}

export default Shop;
