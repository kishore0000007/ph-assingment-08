 import React from 'react'
import ProductDetails from '../../../components/modules/SingleProduct/ProductDetails'
 const SingleProductDetails = async ({ params }) => {
  const { id } = await params

  const res = await fetch(
    `${process.env.BETTER_AUTH_URL}/data.json`,
    {
      cache: 'no-store',
    }
  )

  const products = await res.json()

  const product = products.find(
    (item) => item.id === Number(id)
  )

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  )
}

export default SingleProductDetails