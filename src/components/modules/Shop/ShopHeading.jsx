 'use client'

import { useState } from 'react'

const styles = `
	@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

	.sb-shop-heading {
		position: relative;
		padding: 56px 24px 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 28px;
		font-family: 'DM Sans', sans-serif;
		overflow: hidden;
	}

	/* Ambient glow */
	.sb-sh-glow {
		position: absolute;
		top: -80px;
		left: 50%;
		transform: translateX(-50%);
		width: 500px;
		height: 300px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(0, 210, 255, 0.07) 0%, transparent 70%);
		pointer-events: none;
	}

	/* ── Text block ── */
	.sb-sh-text { position: relative; z-index: 1; }

	.sb-sh-badge {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		padding: 5px 14px;
		margin-bottom: 14px;
		font-size: 0.62rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		border-radius: 99px;
		border: 1px solid rgba(0, 210, 255, 0.3);
		background: rgba(0, 210, 255, 0.07);
		color: #00d2ff;
	}
	.sb-sh-badge-dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #00d2ff;
		box-shadow: 0 0 7px rgba(0, 210, 255, 0.9);
		animation: pulse 2s infinite;
		flex-shrink: 0;
	}
	@keyframes pulse {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.4; transform: scale(0.7); }
	}

	.sb-sh-title {
		font-family: 'Syne', sans-serif;
		font-size: clamp(1.7rem, 4vw, 2.4rem);
		font-weight: 800;
		color: #ffffff;
		letter-spacing: -0.5px;
		line-height: 1.1;
		margin-bottom: 10px;
	}
	.sb-sh-title span { color: #00d2ff; }

	.sb-sh-divider {
		width: 56px;
		height: 2px;
		background: linear-gradient(90deg, transparent, #00d2ff, transparent);
		margin: 12px auto;
		border-radius: 99px;
	}

	.sb-sh-sub {
		font-size: 0.875rem;
		color: rgba(170, 200, 235, 0.5);
		max-width: 400px;
		margin: 0 auto;
		line-height: 1.7;
	}

	/* ── Filter buttons ── */
	.sb-sh-filters {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 8px;
		position: relative;
		z-index: 1;
	}

	.sb-filter-btn {
		font-family: 'DM Sans', sans-serif;
		font-size: 0.82rem;
		font-weight: 600;
		padding: 8px 20px;
		border-radius: 99px;
		cursor: pointer;
		transition: all 0.2s ease;
		letter-spacing: 0.02em;
		border: 1px solid rgba(0, 210, 255, 0.22);
		background: rgba(0, 210, 255, 0.05);
		color: rgba(180, 215, 245, 0.65);
	}
	.sb-filter-btn:hover {
		border-color: rgba(0, 210, 255, 0.45);
		background: rgba(0, 210, 255, 0.1);
		color: #00d2ff;
	}

	/* Active state */
	.sb-filter-btn.active {
		background: linear-gradient(135deg, #00d2ff, #0055ff);
		border-color: transparent;
		color: #ffffff;
		box-shadow: 0 0 18px rgba(0, 210, 255, 0.35), 0 2px 8px rgba(0, 0, 0, 0.3);
	}
	.sb-filter-btn.active:hover {
		filter: brightness(1.08);
		box-shadow: 0 0 24px rgba(0, 210, 255, 0.5), 0 4px 12px rgba(0, 0, 0, 0.3);
	}
`

const categories = [
	'All Products',
	'Smartphones',
	'Laptops',
	'Audio',
	'Tablets',
	'Monitors',
	'Accessories',
	'Cameras',
	'Drones',
	'Smartwatches',
]

const ShopHeading = () => {
	const [active, setActive] = useState('All Products')

	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: styles }} />

			<div className='sb-shop-heading'>
				<div className='sb-sh-glow' />

				{/* ── Title ── */}
				<div className='sb-sh-text'>
					<div className='sb-sh-badge'>
						<span className='sb-sh-badge-dot' />
						Browse the Store
					</div>

					<h2 className='sb-sh-title'>
						Shop Our <span>Collection</span>
					</h2>

					<div className='sb-sh-divider' />

					<p className='sb-sh-sub'>
						Explore top-rated gadgets and gear — curated for tech enthusiasts, priced for everyone.
					</p>
				</div>

				{/* ── Filters ── */}
				<div className='sb-sh-filters'>
					{categories.map((cat) => (
						<button
							key={cat}
							className={`sb-filter-btn${active === cat ? ' active' : ''}`}
							onClick={() => setActive(cat)}
						>
							{cat}
						</button>
					))}
				</div>
			</div>
		</>
	)
}

export default ShopHeading