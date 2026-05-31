 import ShopHeading from "../../components/modules/Shop/ShopHeading";
    import Products from "../../components/modules/Shop/Products";
 import React from "react";
const ShopPage = async () => {
  const res = await fetch(`${process.env.BETTER_AUTH_URL}/data.json`);
  const products = await res.json();

  return (
    <section>
      <ShopHeading />
      <Products products={products} />
    </section>
  );
}

export default ShopPage