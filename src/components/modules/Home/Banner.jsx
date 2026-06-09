 import Link from 'next/link'

const styles = `
	@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

	.sb-banner {
		position: relative;
		overflow: hidden;
		min-height: 100vh;
		padding-top: 64px;
		display: flex;
		align-items: center;
		font-family: 'DM Sans', sans-serif;
		background: #060a14;
	}

	.sb-banner-bg {
		position: absolute;
		inset: 0;
		background: url('/banner.jpg') center center / cover no-repeat;
		opacity: 0.18;
	}

	.sb-banner-pattern {
		position: absolute;
		inset: 0;
		background-image: radial-gradient(rgba(0, 210, 255, 0.12) 1px, transparent 1px);
		background-size: 40px 40px;
		pointer-events: none;
	}

	.sb-banner-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			rgba(6, 10, 20, 0.55) 0%,
			rgba(6, 10, 20, 0.3) 40%,
			rgba(6, 10, 20, 0.8) 100%
		);
	}

	.sb-blob-1 {
		position: absolute;
		top: -120px;
		right: -100px;
		width: 500px;
		height: 500px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(0, 210, 255, 0.12) 0%, transparent 70%);
		pointer-events: none;
	}
	.sb-blob-2 {
		position: absolute;
		bottom: -140px;
		left: -100px;
		width: 460px;
		height: 460px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(0, 85, 255, 0.1) 0%, transparent 70%);
		pointer-events: none;
	}
	.sb-blob-3 {
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 600px;
		height: 600px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(0, 210, 255, 0.05) 0%, transparent 65%);
		pointer-events: none;
	}

	.sb-circuit {
		position: absolute;
		inset: 0;
		pointer-events: none;
		opacity: 0.07;
	}

	.sb-banner-inner {
		position: relative;
		z-index: 10;
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 24px;
		width: 100%;
		text-align: center;
	}

	.sb-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 7px 18px;
		margin-bottom: 28px;
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		border-radius: 99px;
		border: 1px solid rgba(0, 210, 255, 0.35);
		background: rgba(0, 210, 255, 0.08);
		color: #00d2ff;
		backdrop-filter: blur(12px);
		animation: fadeDown 0.7s ease both;
	}
	.sb-badge-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #00d2ff;
		box-shadow: 0 0 8px rgba(0, 210, 255, 0.8);
		animation: pulse 2s infinite;
	}
	@keyframes pulse {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.5; transform: scale(0.8); }
	}

	.sb-heading {
		font-family: 'Syne', sans-serif;
		font-weight: 800;
		font-size: clamp(2.6rem, 7vw, 5.5rem);
		line-height: 1.08;
		letter-spacing: -1.5px;
		color: #ffffff;
		margin-bottom: 24px;
		animation: fadeUp 0.8s ease 0.1s both;
	}
	.sb-heading-accent {
		color: #00d2ff;
		display: inline-block;
		position: relative;
	}
	.sb-heading-accent::after {
		content: '';
		position: absolute;
		bottom: 4px;
		left: 0;
		width: 100%;
		height: 2px;
		background: linear-gradient(90deg, #00d2ff, #0055ff, transparent);
		border-radius: 99px;
	}

	.sb-desc {
		max-width: 580px;
		margin: 0 auto 40px;
		font-size: 1.05rem;
		line-height: 1.8;
		color: rgba(190, 215, 245, 0.65);
		font-weight: 400;
		animation: fadeUp 0.8s ease 0.2s both;
	}

	.sb-buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 14px;
		animation: fadeUp 0.8s ease 0.3s both;
	}

	.sb-btn-primary {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 14px 32px;
		border-radius: 10px;
		border: none;
		background: linear-gradient(135deg, #00d2ff, #0055ff);
		color: #fff;
		font-family: 'DM Sans', sans-serif;
		font-size: 0.95rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		text-decoration: none;
		cursor: pointer;
		transition: all 0.25s ease;
		box-shadow: 0 0 24px rgba(0, 210, 255, 0.35), 0 4px 16px rgba(0,0,0,0.4);
	}
	.sb-btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 0 36px rgba(0, 210, 255, 0.5), 0 8px 20px rgba(0,0,0,0.4);
		filter: brightness(1.08);
		color: #fff;
	}

	.sb-btn-secondary {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 14px 32px;
		border-radius: 10px;
		border: 1px solid rgba(0, 210, 255, 0.3);
		background: rgba(0, 210, 255, 0.07);
		color: rgba(200, 230, 255, 0.85);
		font-family: 'DM Sans', sans-serif;
		font-size: 0.95rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		text-decoration: none;
		cursor: pointer;
		transition: all 0.25s ease;
		backdrop-filter: blur(12px);
	}
	.sb-btn-secondary:hover {
		background: rgba(0, 210, 255, 0.14);
		border-color: rgba(0, 210, 255, 0.55);
		color: #00d2ff;
		transform: translateY(-2px);
		box-shadow: 0 0 18px rgba(0, 210, 255, 0.2);
	}

	.sb-stats {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 32px;
		margin-top: 64px;
		padding-top: 40px;
		border-top: 1px solid rgba(0, 210, 255, 0.1);
		animation: fadeUp 0.8s ease 0.45s both;
	}
	.sb-stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
	}
	.sb-stat-num {
		font-family: 'Syne', sans-serif;
		font-size: 1.8rem;
		font-weight: 800;
		color: #00d2ff;
		line-height: 1;
		letter-spacing: -0.5px;
	}
	.sb-stat-label {
		font-size: 0.72rem;
		color: rgba(150, 185, 220, 0.5);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-weight: 500;
	}
	.sb-stat-divider {
		width: 1px;
		height: 36px;
		background: rgba(0, 210, 255, 0.15);
		align-self: center;
	}

	.sb-scroll {
		position: absolute;
		bottom: 32px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		z-index: 10;
		animation: fadeUp 1s ease 0.6s both;
	}
	.sb-scroll-line {
		width: 1px;
		height: 36px;
		background: linear-gradient(to bottom, rgba(0, 210, 255, 0.6), transparent);
		animation: scrollPulse 1.8s ease-in-out infinite;
	}
	.sb-scroll-label {
		font-size: 0.6rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: rgba(0, 210, 255, 0.4);
		font-weight: 500;
	}
	@keyframes scrollPulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.3; }
	}

	@keyframes fadeUp {
		from { opacity: 0; transform: translateY(24px); }
		to { opacity: 1; transform: translateY(0); }
	}
	@keyframes fadeDown {
		from { opacity: 0; transform: translateY(-16px); }
		to { opacity: 1; transform: translateY(0); }
	}
`

const Banner = () => {
	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: styles }} />

			<header className='sb-banner'>

				<div className='sb-banner-bg' />
				<div className='sb-banner-pattern' />
				<div className='sb-banner-overlay' />
				<div className='sb-blob-1' />
				<div className='sb-blob-2' />
				<div className='sb-blob-3' />

				<svg className='sb-circuit' viewBox='0 0 1200 700' preserveAspectRatio='none'>
					<path d='M0 350 H300 V150 H600 V350 H900 V550 H1200' stroke='#00d2ff' strokeWidth='1' fill='none' />
					<path d='M0 200 H200 V500 H500 V200 H800 V500 H1200' stroke='#0055ff' strokeWidth='0.8' fill='none' />
					<circle cx='300' cy='150' r='4' fill='#00d2ff' />
					<circle cx='600' cy='350' r='4' fill='#00d2ff' />
					<circle cx='900' cy='550' r='4' fill='#00d2ff' />
					<circle cx='200' cy='500' r='3' fill='#0055ff' />
					<circle cx='500' cy='200' r='3' fill='#0055ff' />
					<circle cx='800' cy='500' r='3' fill='#0055ff' />
				</svg>

				<div className='sb-banner-inner'>

					<div className='sb-badge'>
						<span className='sb-badge-dot' />
						Summer Essentials, One Place
					</div>

					<h1 className='sb-heading'>
						Your Summer Starts <br />
						<span className='sb-heading-accent'>Right Here.</span>
					</h1>

					<p className='sb-desc'>
						Discover handpicked summer essentials — from UV protection to beach gear.
						Stay cool, stay protected, and make every sunny day count.
					</p>

					<div className='sb-buttons'>
						<Link href='/shop' className='sb-btn-primary'>
							<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
								<circle cx='9' cy='21' r='1'/><circle cx='20' cy='21' r='1'/>
								<path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'/>
							</svg>
							Shop Now
						</Link>
						<Link href='/story' className='sb-btn-secondary'>
							<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
								<circle cx='12' cy='12' r='10'/>
								<path d='M12 8v4l3 3'/>
							</svg>
							Our Story
						</Link>
					</div>

					<div className='sb-stats'>
						<div className='sb-stat'>
							<span className='sb-stat-num'>12+</span>
							<span className='sb-stat-label'>Products</span>
						</div>
						<div className='sb-stat-divider' />
						<div className='sb-stat'>
							<span className='sb-stat-num'>5K+</span>
							<span className='sb-stat-label'>Happy Customers</span>
						</div>
						<div className='sb-stat-divider' />
						<div className='sb-stat'>
							<span className='sb-stat-num'>8+</span>
							<span className='sb-stat-label'>Categories</span>
						</div>
						<div className='sb-stat-divider' />
						<div className='sb-stat'>
							<span className='sb-stat-num'>4.7★</span>
							<span className='sb-stat-label'>Rating</span>
						</div>
					</div>

				</div>

				<div className='sb-scroll'>
					<div className='sb-scroll-line' />
					<span className='sb-scroll-label'>Scroll</span>
				</div>

			</header>
		</>
	)
}

export default Banner