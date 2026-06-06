 'use client'

import { useState } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { ArrowLeft, Check, ShoppingCart, Zap, Shield, Truck } from 'lucide-react'

import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import QuantitySelector from './QuantitySelector'
import ProductAdditionalInfo from './ProductAdditionalInfo'

const styles = `
	@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

	.sb-pd {
		min-height: 100vh;
		background: #060a14;
		padding: 48px 0 80px;
		font-family: 'DM Sans', sans-serif;
		position: relative;
	}

	/* Dot grid bg */
	.sb-pd::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: radial-gradient(rgba(0, 210, 255, 0.06) 1px, transparent 1px);
		background-size: 36px 36px;
		pointer-events: none;
	}

	.sb-pd-inner {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 24px;
		position: relative;
		z-index: 1;
	}

	/* Back button */
	.sb-pd-back {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		font-size: 0.88rem;
		font-weight: 600;
		color: rgba(0, 210, 255, 0.7);
		text-decoration: none;
		margin-bottom: 36px;
		padding: 7px 14px;
		border-radius: 8px;
		border: 1px solid rgba(0, 210, 255, 0.18);
		background: rgba(0, 210, 255, 0.05);
		transition: all 0.2s;
	}
	.sb-pd-back:hover {
		color: #00d2ff;
		background: rgba(0, 210, 255, 0.1);
		border-color: rgba(0, 210, 255, 0.38);
	}

	/* Main grid */
	.sb-pd-grid {
		display: grid;
		gap: 28px;
		grid-template-columns: 1fr;
	}
	@media (min-width: 1024px) {
		.sb-pd-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
	}

	/* Cards */
	.sb-pd-card {
		background: linear-gradient(160deg, #0d1526, #0a1020);
		border: 1px solid rgba(0, 210, 255, 0.12);
		border-radius: 16px;
		padding: 24px;
		position: relative;
	}
	.sb-pd-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(0, 210, 255, 0.25), transparent);
		border-radius: 16px 16px 0 0;
	}

	/* Add to cart button */
	.sb-pd-btn {
		width: 100%;
		padding: 14px;
		border-radius: 10px;
		border: none;
		background: linear-gradient(135deg, #00d2ff, #0055ff);
		color: #ffffff;
		font-family: 'DM Sans', sans-serif;
		font-size: 0.95rem;
		font-weight: 700;
		letter-spacing: 0.02em;
		cursor: pointer;
		transition: all 0.25s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 9px;
		box-shadow: 0 0 22px rgba(0, 210, 255, 0.3), 0 4px 16px rgba(0,0,0,0.4);
	}
	.sb-pd-btn:hover:not(:disabled) {
		transform: translateY(-1px);
		box-shadow: 0 0 32px rgba(0, 210, 255, 0.45), 0 6px 20px rgba(0,0,0,0.4);
		filter: brightness(1.08);
	}
	.sb-pd-btn:disabled {
		opacity: 0.65;
		cursor: not-allowed;
		transform: none;
	}
	.sb-pd-btn.added {
		background: linear-gradient(135deg, #00b894, #007a6a);
		box-shadow: 0 0 22px rgba(0, 185, 140, 0.3);
	}

	/* Divider */
	.sb-pd-divider {
		margin: 20px 0;
		height: 1px;
		background: rgba(0, 210, 255, 0.1);
	}

	/* Trust markers */
	.sb-pd-trust {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
	}

	.sb-pd-trust-item {
		display: flex;
		align-items: center;
		gap: 7px;
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(0, 210, 255, 0.55);
	}

	.sb-pd-spinner {
		width: 16px;
		height: 16px;
		border: 2px solid rgba(255,255,255,0.3);
		border-top-color: #fff;
		border-radius: 50%;
		animation: spin 0.7s linear infinite;
		flex-shrink: 0;
	}
	@keyframes spin { to { transform: rotate(360deg); } }
`

const ProductDetails = ({ product, onAddToCart }) => {
	const [qty, setQty] = useState(1)
	const [occasion, setOccasion] = useState('')
	const [instructions, setInstructions] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [isAdded, setIsAdded] = useState(false)

	const handleAddToCart = async (e) => {
		e.preventDefault()

		if (!occasion) {
			toast.warning('Please select an occasion', { position: 'top-right', autoClose: 3000 })
			return
		}

		setIsLoading(true)
		try {
			await new Promise((r) => setTimeout(r, 800))
			onAddToCart?.({ ...product, quantity: qty, occasion, instructions })
			toast.success(`🛒 Added ${qty}× ${product.title} to your cart!`)
			setIsAdded(true)
			setTimeout(() => {
				setIsAdded(false)
				setQty(1)
				setOccasion('')
				setInstructions('')
			}, 3000)
		} catch {
			toast.error('Failed to add item to cart')
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: styles }} />
			<div className='sb-pd'>
				<div className='sb-pd-inner'>

					{/* Back */}
					<Link href='/shop' className='sb-pd-back'>
						<ArrowLeft size={15} />
						Back to Shop
					</Link>

					{/* Grid */}
					<div className='sb-pd-grid'>

						{/* Image card */}
						<div className='sb-pd-card'>
							<ProductImage image={product.image} title={product.title} />
						</div>

						{/* Info card */}
						<div className='sb-pd-card'>
							<ProductInfo product={product} />

							<form onSubmit={handleAddToCart} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
								<QuantitySelector
									qty={qty}
									setQty={setQty}
									occasion={occasion}
									setOccasion={setOccasion}
									instructions={instructions}
									setInstructions={setInstructions}
								/>

								{/* Add to cart */}
								<button
									type='submit'
									disabled={isLoading}
									className={`sb-pd-btn${isAdded ? ' added' : ''}`}
								>
									{isLoading ? (
										<><div className='sb-pd-spinner' /> Processing...</>
									) : isAdded ? (
										<><Check size={17} /> Added to Cart!</>
									) : (
										<><ShoppingCart size={17} /> Add to Cart</>
									)}
								</button>
							</form>

							{/* Divider + Trust */}
							<div className='sb-pd-divider' />
							<div className='sb-pd-trust'>
								<div className='sb-pd-trust-item'>
									<Zap size={14} />
									Fast Dispatch
								</div>
								<div className='sb-pd-trust-item'>
									<Truck size={14} />
									Free Shipping
								</div>
								<div className='sb-pd-trust-item'>
									<Shield size={14} />
									2-Year Warranty
								</div>
							</div>
						</div>

					</div>

					{/* Additional info */}
					<ProductAdditionalInfo product={product} />

				</div>
			</div>
		</>
	)
}

export default ProductDetails