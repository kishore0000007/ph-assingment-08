 import ProductCard from '../../Shared/ProductCard'
const Products = ({ products }) => {
	return (
		<div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10'>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}

export default Products