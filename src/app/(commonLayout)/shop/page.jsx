import Products from '@/components/modules/Shop/Products'
import ShopHeading from '@/components/modules/Shop/ShopHeading'

const ShopPage = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`, {
		cache: 'no-store',
	})

	const products = await res.json()

	return (
		<section>
			<ShopHeading />
			<Products products={products} />
		</section>
	)
}

export default ShopPage