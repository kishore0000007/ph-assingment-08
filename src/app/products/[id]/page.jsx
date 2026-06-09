 import productsData from '../../../../public/data.json'
import SingleProduct from '../../../components/modules/SingleProduct/SingleProduct'

const SingleProductDetails = async ({ params }) => {
  const { id } = await params
  const product = productsData.find(item => item.id === Number(id))
  if (!product) return <div>Product not found</div>
  return <SingleProduct product={product} />
}

export default SingleProductDetails