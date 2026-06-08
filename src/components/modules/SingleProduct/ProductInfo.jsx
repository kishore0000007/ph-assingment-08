 import { Star } from 'lucide-react'

const styles = `
	@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

	.sb-pinfo { margin-bottom: 28px; font-family: 'DM Sans', sans-serif; }

	.sb-pinfo-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		margin-bottom: 16px;
		flex-wrap: wrap;
	}

	.sb-pinfo-cat {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 5px 14px;
		border-radius: 99px;
		border: 1px solid rgba(0, 210, 255, 0.28);
		background: rgba(0, 210, 255, 0.07);
		font-size: 0.68rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #00d2ff;
	}

	.sb-pinfo-rating {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 0.85rem;
		color: rgba(160, 195, 235, 0.6);
	}
	.sb-pinfo-rating-num {
		font-weight: 600;
		color: #e8f0ff;
	}

	.sb-pinfo-title {
		font-family: 'Syne', sans-serif;
		font-size: clamp(1.6rem, 4vw, 2.4rem);
		font-weight: 800;
		color: #ffffff;
		letter-spacing: -0.5px;
		line-height: 1.1;
		margin-bottom: 14px;
	}

	.sb-pinfo-price {
		font-family: 'Syne', sans-serif;
		font-size: 2rem;
		font-weight: 800;
		color: #00d2ff;
		letter-spacing: -0.5px;
		margin-bottom: 18px;
		text-shadow: 0 0 20px rgba(0, 210, 255, 0.3);
	}

	.sb-pinfo-desc {
		font-size: 0.95rem;
		line-height: 1.8;
		color: rgba(170, 200, 235, 0.6);
	}
`

const ProductInfo = ({ product }) => {
	const label = product.name ?? product.title ?? 'Product'
	const rating = product.rating ?? 4.9
	const reviewCount = product.reviews ?? product.reviewCount ?? 128

	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: styles }} />
			<div className='sb-pinfo'>

				{/* Category + Rating */}
				<div className='sb-pinfo-top'>
					<span className='sb-pinfo-cat'>{product.category}</span>
					<div className='sb-pinfo-rating'>
						<Star size={15} style={{ fill: '#f59e0b', color: '#f59e0b' }} />
						<span className='sb-pinfo-rating-num'>{rating}</span>
						<span>({reviewCount} reviews)</span>
					</div>
				</div>

				{/* Title */}
				<h1 className='sb-pinfo-title'>{label}</h1>

				{/* Price */}
				<p className='sb-pinfo-price'>${(product.price ?? 0).toFixed(2)}</p>

				{/* Description */}
				<p className='sb-pinfo-desc'>{product.description}</p>

			</div>
		</>
	)
}

export default ProductInfo