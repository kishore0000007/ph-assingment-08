'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'
import {
	ArrowLeft, Star, ShoppingCart, Check,
	Package, Tag, Layers, Shield, Truck, Zap,
} from 'lucide-react'

const styles = `
	@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

	.sp-wrap {
		min-height: 100vh;
		background: #060a14;
		padding: 48px 0 80px;
		font-family: 'DM Sans', sans-serif;
		position: relative;
	}
	.sp-wrap::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: radial-gradient(rgba(0,210,255,0.05) 1px, transparent 1px);
		background-size: 36px 36px;
		pointer-events: none;
	}

	.sp-inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 24px;
		position: relative;
		z-index: 1;
	}

	/* Back */
	.sp-back {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		font-size: 0.85rem;
		font-weight: 600;
		color: rgba(0,210,255,0.7);
		text-decoration: none;
		margin-bottom: 40px;
		padding: 7px 14px;
		border-radius: 8px;
		border: 1px solid rgba(0,210,255,0.18);
		background: rgba(0,210,255,0.05);
		transition: all 0.2s;
	}
	.sp-back:hover {
		color: #00d2ff;
		background: rgba(0,210,255,0.1);
		border-color: rgba(0,210,255,0.4);
	}

	/* Grid */
	.sp-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 32px;
	}
	@media (min-width: 1024px) {
		.sp-grid { grid-template-columns: 1fr 1fr; gap: 48px; }
	}

	/* Image */
	.sp-img-wrap {
		position: relative;
		aspect-ratio: 1 / 1;
		border-radius: 20px;
		overflow: hidden;
		border: 1px solid rgba(0,210,255,0.15);
		background: #0d1526;
		box-shadow: 0 0 60px rgba(0,210,255,0.07), 0 16px 48px rgba(0,0,0,0.5);
	}
	.sp-img-badge {
		position: absolute;
		top: 16px;
		left: 16px;
		z-index: 10;
		padding: 5px 12px;
		border-radius: 99px;
		border: 1px solid rgba(0,210,255,0.35);
		background: rgba(6,10,20,0.8);
		backdrop-filter: blur(12px);
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #00d2ff;
	}
	.sp-img-stock-out {
		position: absolute;
		top: 16px;
		right: 16px;
		z-index: 10;
		padding: 5px 12px;
		border-radius: 99px;
		background: rgba(255,60,60,0.85);
		backdrop-filter: blur(12px);
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #fff;
	}

	/* Info panel */
	.sp-info {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.sp-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 10px;
	}
	.sp-category {
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #00d2ff;
		padding: 4px 12px;
		border-radius: 99px;
		border: 1px solid rgba(0,210,255,0.28);
		background: rgba(0,210,255,0.07);
	}
	.sp-rating {
		display: flex;
		align-items: center;
		gap: 5px;
		font-size: 0.85rem;
		color: rgba(160,195,235,0.7);
	}
	.sp-rating-num { font-weight: 600; color: #e8f0ff; }

	.sp-name {
		font-family: 'Syne', sans-serif;
		font-size: clamp(1.8rem, 4vw, 2.6rem);
		font-weight: 800;
		color: #fff;
		letter-spacing: -0.5px;
		line-height: 1.1;
		margin: 0;
	}
	.sp-brand {
		font-size: 0.8rem;
		font-weight: 600;
		color: rgba(0,210,255,0.5);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-top: 6px;
	}

	.sp-price {
		font-family: 'Syne', sans-serif;
		font-size: 2.4rem;
		font-weight: 800;
		color: #00d2ff;
		letter-spacing: -1px;
		text-shadow: 0 0 24px rgba(0,210,255,0.3);
		margin: 0;
	}

	.sp-desc {
		font-size: 0.95rem;
		line-height: 1.8;
		color: rgba(170,200,235,0.65);
		margin: 0;
	}

	/* Stock bar */
	.sp-stock-wrap { display: flex; flex-direction: column; gap: 6px; }
	.sp-stock-label {
		display: flex;
		justify-content: space-between;
		font-size: 0.75rem;
		font-weight: 600;
		color: rgba(160,195,235,0.6);
		text-transform: uppercase;
		letter-spacing: 0.07em;
	}
	.sp-stock-label span:last-child { color: #00d2ff; }
	.sp-stock-bar {
		height: 4px;
		border-radius: 99px;
		background: rgba(0,210,255,0.1);
		overflow: hidden;
	}
	.sp-stock-fill {
		height: 100%;
		border-radius: 99px;
		background: linear-gradient(90deg, #00d2ff, #0066ff);
		transition: width 0.6s ease;
	}

	/* Divider */
	.sp-divider {
		height: 1px;
		background: rgba(0,210,255,0.1);
	}

	/* Qty row */
	.sp-qty-row {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
	}
	.sp-qty-label {
		font-size: 0.78rem;
		font-weight: 600;
		color: rgba(170,205,240,0.7);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		flex-shrink: 0;
	}
	.sp-stepper {
		display: flex;
		align-items: center;
		border-radius: 10px;
		border: 1px solid rgba(0,210,255,0.18);
		background: rgba(0,210,255,0.04);
		overflow: hidden;
	}
	.sp-step-btn {
		width: 38px;
		height: 38px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.1rem;
		font-weight: 600;
		color: rgba(0,210,255,0.7);
		background: transparent;
		border: none;
		cursor: pointer;
		transition: all 0.15s;
	}
	.sp-step-btn:hover { color: #00d2ff; background: rgba(0,210,255,0.1); }
	.sp-step-val {
		width: 44px;
		text-align: center;
		font-size: 0.95rem;
		font-weight: 600;
		color: #e8f0ff;
		background: transparent;
		border: none;
		outline: none;
		font-family: 'DM Sans', sans-serif;
		-moz-appearance: textfield;
	}
	.sp-step-val::-webkit-inner-spin-button,
	.sp-step-val::-webkit-outer-spin-button { -webkit-appearance: none; }

	/* CTA button */
	.sp-btn {
		width: 100%;
		padding: 15px;
		border-radius: 12px;
		border: none;
		background: linear-gradient(135deg, #00d2ff, #0055ff);
		color: #fff;
		font-family: 'DM Sans', sans-serif;
		font-size: 1rem;
		font-weight: 700;
		letter-spacing: 0.02em;
		cursor: pointer;
		transition: all 0.25s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 9px;
		box-shadow: 0 0 24px rgba(0,210,255,0.3), 0 4px 16px rgba(0,0,0,0.4);
	}
	.sp-btn:hover:not(:disabled) {
		transform: translateY(-1px);
		box-shadow: 0 0 36px rgba(0,210,255,0.45), 0 6px 20px rgba(0,0,0,0.4);
		filter: brightness(1.08);
	}
	.sp-btn:disabled { opacity: 0.55; cursor: not-allowed; transform: none; }
	.sp-btn.added {
		background: linear-gradient(135deg, #00b894, #007a6a);
		box-shadow: 0 0 24px rgba(0,185,140,0.3);
	}
	.sp-spinner {
		width: 16px; height: 16px;
		border: 2px solid rgba(255,255,255,0.3);
		border-top-color: #fff;
		border-radius: 50%;
		animation: spin 0.7s linear infinite;
		flex-shrink: 0;
	}
	@keyframes spin { to { transform: rotate(360deg); } }

	/* Trust */
	.sp-trust {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
		padding-top: 4px;
	}
	.sp-trust-item {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(0,210,255,0.5);
	}

	/* Extra info */
	.sp-extra {
		margin-top: 64px;
		border-top: 1px solid rgba(0,210,255,0.1);
		padding-top: 56px;
		display: grid;
		grid-template-columns: 1fr;
		gap: 32px;
	}
	@media (min-width: 768px) {
		.sp-extra { grid-template-columns: repeat(3, 1fr); }
	}
	.sp-extra-block {}
	.sp-extra-header {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 14px;
	}
	.sp-extra-icon {
		width: 34px; height: 34px;
		border-radius: 8px;
		background: rgba(0,210,255,0.08);
		border: 1px solid rgba(0,210,255,0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		color: #00d2ff;
		flex-shrink: 0;
	}
	.sp-extra-title {
		font-family: 'Syne', sans-serif;
		font-size: 0.95rem;
		font-weight: 700;
		color: #e8f0ff;
	}
	.sp-extra-text {
		font-size: 0.85rem;
		line-height: 1.8;
		color: rgba(160,195,235,0.55);
	}
	.sp-extra-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.sp-extra-tag {
		padding: 4px 11px;
		border-radius: 6px;
		background: rgba(0,210,255,0.07);
		border: 1px solid rgba(0,210,255,0.18);
		color: #00d2ff;
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}
`

const occasions = [
	'Personal Use', 'Gift for Someone', 'Birthday',
	'Work / Office', 'Outdoor Adventure', 'Home Use',
]

const SingleProduct = ({ product, onAddToCart }) => {
	const [qty, setQty] = useState(1)
	const [occasion, setOccasion] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [isAdded, setIsAdded] = useState(false)

	const stockPct = Math.min(100, Math.round((product.stock / 60) * 100))
	const outOfStock = product.stock === 0

	const handleAddToCart = async (e) => {
		e.preventDefault()
		if (!occasion) {
			toast.warning('Please select an occasion', { position: 'top-right', autoClose: 3000 })
			return
		}
		setIsLoading(true)
		try {
			await new Promise((r) => setTimeout(r, 800))
			onAddToCart?.({ ...product, quantity: qty, occasion })
			toast.success(`🛒 Added ${qty}× ${product.name} to your cart!`)
			setIsAdded(true)
			setTimeout(() => {
				setIsAdded(false)
				setQty(1)
				setOccasion('')
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
			<div className='sp-wrap'>
				<div className='sp-inner'>

					{/* Back */}
					<Link href='/shop' className='sp-back'>
						<ArrowLeft size={14} />
						Back to Shop
					</Link>

					{/* Main grid */}
					<div className='sp-grid'>

						{/* Image */}
						<div className='sp-img-wrap'>
							<Image
								src={product.image}
								alt={product.name}
								fill
								className='object-cover'
								priority
							/>
							{product.stock <= 10 && product.stock > 0 && (
								<div className='sp-img-badge'>Only {product.stock} left</div>
							)}
							{outOfStock && (
								<div className='sp-img-stock-out'>Out of Stock</div>
							)}
						</div>

						{/* Info */}
						<form className='sp-info' onSubmit={handleAddToCart}>

							{/* Meta */}
							<div className='sp-meta'>
								<span className='sp-category'>{product.category}</span>
								<div className='sp-rating'>
									<Star size={14} style={{ fill: '#f59e0b', color: '#f59e0b' }} />
									<span className='sp-rating-num'>{product.rating}</span>
								</div>
							</div>

							{/* Name + brand */}
							<div>
								<h1 className='sp-name'>{product.name}</h1>
								<p className='sp-brand'>by {product.brand}</p>
							</div>

							{/* Price */}
							<p className='sp-price'>${product.price.toFixed(2)}</p>

							{/* Description */}
							<p className='sp-desc'>{product.description}</p>

							{/* Stock bar */}
							<div className='sp-stock-wrap'>
								<div className='sp-stock-label'>
									<span>Stock</span>
									<span>{product.stock} units left</span>
								</div>
								<div className='sp-stock-bar'>
									<div className='sp-stock-fill' style={{ width: `${stockPct}%` }} />
								</div>
							</div>

							<div className='sp-divider' />

							{/* Qty + Occasion */}
							<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

								<div className='sp-qty-row'>
									<span className='sp-qty-label'>Qty</span>
									<div className='sp-stepper'>
										<button type='button' className='sp-step-btn' onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
										<input
											type='number'
											className='sp-step-val'
											value={qty}
											onChange={e => setQty(Math.max(1, parseInt(e.target.value) || 1))}
										/>
										<button type='button' className='sp-step-btn' onClick={() => setQty(q => Math.min(product.stock, q + 1))}>+</button>
									</div>
								</div>

								<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
									<span className='sp-qty-label'>Buying for</span>
									<select
										value={occasion}
										onChange={e => setOccasion(e.target.value)}
										style={{
											padding: '9px 14px',
											borderRadius: 10,
											border: '1px solid rgba(0,210,255,0.18)',
											background: 'rgba(0,210,255,0.04)',
											color: occasion ? '#e8f0ff' : 'rgba(160,195,235,0.4)',
											fontFamily: "'DM Sans', sans-serif",
											fontSize: '0.88rem',
											fontWeight: 500,
											outline: 'none',
											cursor: 'pointer',
										}}
									>
										<option value='' disabled>Choose occasion</option>
										{occasions.map(o => (
											<option key={o} value={o} style={{ background: '#0d1526', color: '#e8f0ff' }}>{o}</option>
										))}
									</select>
								</div>
							</div>

							{/* CTA */}
							<button
								type='submit'
								disabled={isLoading || outOfStock}
								className={`sp-btn${isAdded ? ' added' : ''}`}
							>
								{isLoading ? (
									<><div className='sp-spinner' />Processing...</>
								) : isAdded ? (
									<><Check size={17} />Added to Cart!</>
								) : outOfStock ? (
									<>Out of Stock</>
								) : (
									<><ShoppingCart size={17} />Add to Cart — ${(product.price * qty).toFixed(2)}</>
								)}
							</button>

							{/* Trust */}
							<div className='sp-trust'>
								<div className='sp-trust-item'><Zap size={13} />Fast Dispatch</div>
								<div className='sp-trust-item'><Truck size={13} />Free Shipping</div>
								<div className='sp-trust-item'><Shield size={13} />2-Year Warranty</div>
							</div>

						</form>
					</div>

					{/* Extra info */}
					<div className='sp-extra'>

						<div className='sp-extra-block'>
							<div className='sp-extra-header'>
								<div className='sp-extra-icon'><Package size={15} /></div>
								<h3 className='sp-extra-title'>Product Details</h3>
							</div>
							<p className='sp-extra-text'>
								{product.description} Crafted with premium materials and designed for lasting quality and everyday comfort.
							</p>
						</div>

						<div className='sp-extra-block'>
							<div className='sp-extra-header'>
								<div className='sp-extra-icon'><Layers size={15} /></div>
								<h3 className='sp-extra-title'>Compatibility</h3>
							</div>
							<div className='sp-extra-tags'>
								{['All Ages', 'Unisex', 'Summer Ready', 'UV Protection', 'Eco Friendly'].map(t => (
									<span key={t} className='sp-extra-tag'>{t}</span>
								))}
							</div>
						</div>

						<div className='sp-extra-block'>
							<div className='sp-extra-header'>
								<div className='sp-extra-icon'><Tag size={15} /></div>
								<h3 className='sp-extra-title'>Warranty & Returns</h3>
							</div>
							<p className='sp-extra-text'>
								Covered by a 2-year manufacturer warranty. Hassle-free returns within 30 days. Extended plans available at checkout.
							</p>
						</div>

					</div>

				</div>
			</div>
		</>
	)
}

export default SingleProduct