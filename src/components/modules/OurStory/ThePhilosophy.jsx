import React from 'react';

 const PILLARS = [
	{
		icon: (
			<svg width='26' height='26' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round'>
				<rect x='4' y='4' width='6' height='6' rx='1'/><rect x='14' y='4' width='6' height='6' rx='1'/><rect x='4' y='14' width='6' height='6' rx='1'/><path d='M14 17h6M17 14v6'/>
			</svg>
		),
		title: 'Cutting-Edge Tech',
		description: "We stock only the latest and most innovative products — from flagship smartphones to next-gen smart home devices that push the boundaries of what's possible.",
	},
	{
		icon: (
			<svg width='26' height='26' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round'>
				<path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/>
			</svg>
		),
		title: 'Trusted Quality',
		description: 'Every item goes through rigorous vetting. We partner only with verified manufacturers and authorised distributors to ensure 100% authentic products.',
	},
	{
		icon: (
			<svg width='26' height='26' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.6' strokeLinecap='round' strokeLinejoin='round'>
				<circle cx='12' cy='12' r='10'/><path d='M12 8v4l3 3'/>
			</svg>
		),
		title: 'Fast & Reliable Delivery',
		description: 'Same-day dispatch, real-time tracking, and free returns. We believe getting your tech fast is just as important as the tech itself.',
	},
]

const styles = `
	@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

	.sb-phil {
		background: linear-gradient(180deg,#080e1c 0%,#060a14 100%);
		padding: 96px 0;
		font-family: 'DM Sans', sans-serif;
		position: relative;
		overflow: hidden;
	}
	.sb-phil::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: radial-gradient(rgba(0,210,255,0.06) 1px, transparent 1px);
		background-size: 36px 36px;
		pointer-events: none;
	}
	.sb-phil-inner {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 24px;
		text-align: center;
		position: relative;
		z-index: 1;
	}
	.sb-phil-badge {
		display: inline-flex;
		align-items: center;
		gap: 7px;
		padding: 5px 14px;
		margin-bottom: 16px;
		font-size: 0.62rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		border-radius: 99px;
		border: 1px solid rgba(0,210,255,0.3);
		background: rgba(0,210,255,0.07);
		color: #00d2ff;
	}
	.sb-phil-badge-dot {
		width: 5px; height: 5px; border-radius: 50%;
		background: #00d2ff;
		box-shadow: 0 0 7px rgba(0,210,255,0.9);
		animation: pulse 2s infinite;
	}
	@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }

	.sb-phil-title {
		font-family: 'Syne', sans-serif;
		font-size: clamp(1.8rem, 4vw, 2.8rem);
		font-weight: 800;
		color: #fff;
		letter-spacing: -0.5px;
		line-height: 1.1;
		margin-bottom: 52px;
	}
	.sb-phil-title span { color: #00d2ff; }

	.sb-phil-grid {
		display: grid;
		gap: 20px;
		grid-template-columns: 1fr;
	}
	@media(min-width:768px){ .sb-phil-grid { grid-template-columns: repeat(3,1fr); } }

	.sb-phil-card {
		background: linear-gradient(160deg,#0d1526,#0a1020);
		border: 1px solid rgba(0,210,255,0.12);
		border-radius: 16px;
		padding: 32px 24px;
		text-align: left;
		transition: all 0.25s ease;
		position: relative;
		overflow: hidden;
	}
	.sb-phil-card::before {
		content: '';
		position: absolute;
		top: 0; left: 0; right: 0;
		height: 1px;
		background: linear-gradient(90deg,transparent,rgba(0,210,255,0.25),transparent);
		opacity: 0;
		transition: opacity 0.25s;
	}
	.sb-phil-card:hover {
		border-color: rgba(0,210,255,0.3);
		transform: translateY(-4px);
		box-shadow: 0 0 28px rgba(0,210,255,0.1), 0 12px 28px rgba(0,0,0,0.4);
	}
	.sb-phil-card:hover::before { opacity: 1; }

	.sb-phil-icon {
		width: 56px; height: 56px;
		border-radius: 14px;
		background: rgba(0,210,255,0.08);
		border: 1px solid rgba(0,210,255,0.2);
		display: flex; align-items: center; justify-content: center;
		color: #00d2ff;
		margin-bottom: 20px;
		transition: transform 0.25s ease;
	}
	.sb-phil-card:hover .sb-phil-icon { transform: scale(1.08); }

	.sb-phil-card-title {
		font-family: 'Syne', sans-serif;
		font-size: 1.1rem;
		font-weight: 700;
		color: #e8f0ff;
		margin-bottom: 10px;
	}
	.sb-phil-card-desc {
		font-size: 0.875rem;
		color: rgba(160,195,235,0.52);
		line-height: 1.75;
	}
`

const ThePhilosophy = () => (
	<>
		<style dangerouslySetInnerHTML={{ __html: styles }} />
		<section className='sb-phil'>
			<div className='sb-phil-inner'>
				<div className='sb-phil-badge'>
					<span className='sb-phil-badge-dot' />
					Chapter II
				</div>
				<h2 className='sb-phil-title'>
					Our Core <span>Pillars</span>
				</h2>
				<div className='sb-phil-grid'>
					{PILLARS.map(({ icon, title, description }) => (
						<div key={title} className='sb-phil-card'>
							<div className='sb-phil-icon'>{icon}</div>
							<h3 className='sb-phil-card-title'>{title}</h3>
							<p className='sb-phil-card-desc'>{description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	</>
)

export default ThePhilosophy