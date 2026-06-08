  import ShopHeading from '../../components/modules/Shop/ShopHeading'
import Products from '../../components/modules/Shop/Products'
import React from 'react'
import fs from 'fs'
import path from 'path'

const ShopPage = async () => {
  const filePath = path.join(process.cwd(), 'public', 'data.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const products = JSON.parse(fileContents)

  return (
    <section>
      <ShopHeading />
      <Products products={products} />
    </section>
  )
}

export default ShopPage