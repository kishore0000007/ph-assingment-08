 import productsData from '../../../public/data.json'

export const dynamic = 'force-dynamic'

const ShopPage = async () => {
  const products = productsData
  return (
    <section>
      <ShopHeading />
      <Products products={products} />
    </section>
  )
}

export default ShopPage