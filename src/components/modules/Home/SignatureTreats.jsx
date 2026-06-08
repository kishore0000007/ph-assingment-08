 import ProductCard from '../../Shared/ProductCard'
import fs from 'fs'
import path from 'path'

const styles = `
	@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

	.sb-featured {
		position: relative;
		padding: 80px 0;
		background: #060a14;
		font-family: 'DM Sans', sans-serif;
		overflow: hidden;
	}

	.sb-featured::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: radial-gradient(rgba(0, 210, 255, 0.07) 1px, transparent 1px);
		background-size: 36px 36px;
		pointer-events: none;
	}

	.sb-featured-glow {
		position: absolute;
		top: -120px;
		left: 50%;
		transform: translateX(-50%);
		width: 600px;
		height: 400px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(0, 210, 255, 0.07) 0%, transparent 70%);
		pointer-events: none;
	}

	.sb-featured-inner {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 24px;
		position: relative;
		z-index: 1;
	}

	.sb-featured-header {
		text-align: center;
		margin-bottom: 52px;
	}

	.sb-featured-badge {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		padding: 5px 14px;
		margin-bottom: 16px;
		font-size: 0.65rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		border-radius: 99px;
		border: 1px solid rgba(0, 210, 255, 0.3);
		background: rgba(0, 210, 255, 0.07);
		color: #00d2ff;
	}

	.sb-featured-badge-dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #00d2ff;
		box-shadow: 0 0 7px rgba(0, 210, 255, 0.9);
		animation: pulse 2s infinite;
	}
	@keyframes pulse {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.4; transform: scale(0.7); }
	}

	.sb-featured-title {
		font-family: 'Syne', sans-serif;
		font-size: clamp(1.8rem, 4vw, 2.6rem);
		font-weight: 800;
		color: #ffffff;
		letter-spacing: -0.5px;
		line-height: 1.1;
		margin-bottom: 12px;
	}

	.sb-featured-title span { color: #00d2ff; }

	.sb-featured-divider {
		width: 60px;
		height: 2px;
		background: linear-gradient(90deg, transparent, #00d2ff, transparent);
		margin: 14px auto;
		border-radius: 99px;
	}

	.sb-featured-subtitle {
		font-size: 0.9rem;
		color: rgba(170, 200, 235, 0.5);
		font-weight: 400;
		max-width: 420px;
		margin: 0 auto;
		line-height: 1.7;
	}

	.sb-featured-grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 20px;
	}
	@media (min-width: 640px) { .sb-featured-grid { grid-template-columns: repeat(2, 1fr); } }
	@media (min-width: 1024px) { .sb-featured-grid { grid-template-columns: repeat(3, 1fr); } }

	.sb-featured-cta { text-align: center; margin-top: 48px; }

	.sb-cta-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 12px 28px;
		border-radius: 10px;
		border: 1px solid rgba(0, 210, 255, 0.3);
		background: rgba(0, 210, 255, 0.07);
		color: #00d2ff;
		font-family: 'DM Sans', sans-serif;
		font-size: 0.88rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		text-decoration: none;
		cursor: pointer;
		transition: all 0.25s ease;
	}
	.sb-cta-btn:hover {
		background: rgba(0, 210, 255, 0.14);
		border-color: rgba(0, 210, 255, 0.55);
		box-shadow: 0 0 18px rgba(0, 210, 255, 0.2);
		transform: translateY(-1px);
		color: #00d2ff;
	}
	.sb-cta-arrow { transition: transform 0.2s ease; }
	.sb-cta-btn:hover .sb-cta-arrow { transform: translateX(3px); }
`

const SignatureTreats = async () => {
	const filePath = path.join(process.cwd(), 'public', 'data.json')
	const fileContents = fs.readFileSync(filePath, 'utf8')
	const products = JSON.parse(fileContents)

	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: styles }} />

			<section className='sb-featured'>
				<div className='sb-featured-glow' />

				<div className='sb-featured-inner'>

					<div className='sb-featured-header'>
						<div className='sb-featured-badge'>
							<span className='sb-featured-badge-dot' />
							Hand-Picked For You
						</div>
						<h2 className='sb-featured-title'>
							Featured <span>Products</span>
						</h2>
						<div className='sb-featured-divider' />
						<p className='sb-featured-subtitle'>
							Top-rated summer essentials curated just for you — explore our most loved products.
						</p>
					</div>

					<div className='sb-featured-grid'>
						{products.slice(0, 3).map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>

					<div className='sb-featured-cta'>
						<a href='/shop' className='sb-cta-btn'>
							View All Products
							<svg
								className='sb-cta-arrow'
								width='15'
								height='15'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path d='M5 12h14M12 5l7 7-7 7' />
							</svg>
						</a>
					</div>

				</div>
			</section>
		</>
	)
}

export default SignatureTreats