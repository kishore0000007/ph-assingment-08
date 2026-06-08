 import fs from 'fs'
import path from 'path'
import SingleProduct from '../../../components/modules/SingleProduct/SingleProduct'

const SingleProductDetails = async ({ params }) => {
  const { id } = await params

  const filePath = path.join(process.cwd(), 'public', 'data.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const products = JSON.parse(fileContents)

  const product = products.find(item => item.id === Number(id))

  if (!product) return <div>Product not found</div>

  return <SingleProduct product={product} />
}

export default SingleProductDetails