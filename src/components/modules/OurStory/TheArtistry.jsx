
const PROCESS = [
	{
		step: 1,
		title: 'Precision Engineering',
		description:
			'Every product in our catalog is tested and verified by our tech experts to ensure it meets the highest performance standards before it reaches you.',
	},
	{
		step: 2,
		title: 'Curated Selection',
		description:
			'We partner directly with top manufacturers and brands worldwide, handpicking only the gadgets that deliver real-world value and innovation.',
	},
	{
		step: 3,
		title: 'Expert Support',
		description:
			'Our team of certified technicians is on standby to guide every customer from purchase to setup, ensuring you get the most from your tech.',
	},
]

const styles = `
	@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

	.sb-art {
		position: relative;
		padding: 96px 0;
		background: #060a14;
		overflow: hidden;
		font-family: 'DM Sans', sans-serif;
	}
	.sb-art::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: radial-gradient(rgba(0,210,255,0.06) 1px, transparent 1px);
		background-size: 36px 36px;
		pointer-events: none;
	}
	.sb-art-blob {
		position: absolute;
		top: -100px;
		left: -80px;
		width: 500px;
		height: 500px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(0,85,255,0.09) 0%, transparent 70%);
		pointer-events: none;
	}
	.sb-art-inner {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 24px;
		position: relative;
		z-index: 1;
	}
	.sb-art-grid {
		display: grid;
		gap: 64px;
		align-items: center;
		grid-template-columns: 1fr;
	}
	@media(min-width:1024px){ .sb-art-grid { grid-template-columns: 1fr 1fr; } }

	.sb-art-img-wrap {
		position: relative;
		display: flex;
		justify-content: center;
	}
	.sb-art-img-glow {
		position: absolute;
		inset: -20px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(0,210,255,0.1) 0%, transparent 70%);
		pointer-events: none;
	}
	.sb-art-img {
		width: 100%;
		border-radius: 20px;
		border: 1px solid rgba(0,210,255,0.15);
		box-shadow: 0 0 40px rgba(0,210,255,0.08), 0 20px 40px rgba(0,0,0,0.5);
		transition: transform 0.3s ease;
		position: relative;
		z-index: 1;
		display: block;
	}
	.sb-art-img:hover { transform: scale(1.02); }

	.sb-art-badge {
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
	.sb-art-badge-dot {
		width: 5px; height: 5px; border-radius: 50%;
		background: #00d2ff;
		box-shadow: 0 0 7px rgba(0,210,255,0.9);
		animation: pulse 2s infinite;
	}
	@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }

	.sb-art-title {
		font-family: 'Syne', sans-serif;
		font-size: clamp(1.8rem, 4vw, 2.8rem);
		font-weight: 800;
		color: #fff;
		letter-spacing: -0.5px;
		line-height: 1.1;
		margin-bottom: 36px;
	}
	.sb-art-title span { color: #00d2ff; }

	.sb-art-steps { display: flex; flex-direction: column; gap: 28px; }

	.sb-art-step {
		display: flex;
		align-items: flex-start;
		gap: 20px;
		transition: transform 0.2s ease;
		cursor: default;
	}
	.sb-art-step:hover { transform: translateX(4px); }

	.sb-art-step-num {
		flex-shrink: 0;
		width: 44px; height: 44px;
		border-radius: 10px;
		background: linear-gradient(135deg, #00d2ff, #0055ff);
		display: flex; align-items: center; justify-content: center;
		font-family: 'Syne', sans-serif;
		font-size: 0.95rem;
		font-weight: 800;
		color: #fff;
		box-shadow: 0 0 16px rgba(0,210,255,0.3);
	}
	.sb-art-step-title {
		font-family: 'Syne', sans-serif;
		font-size: 1rem;
		font-weight: 700;
		color: #e8f0ff;
		margin-bottom: 6px;
	}
	.sb-art-step-desc {
		font-size: 0.875rem;
		color: rgba(160,195,235,0.55);
		line-height: 1.75;
	}
`

const TheArtistry = () => (
	<>
		<style dangerouslySetInnerHTML={{ __html: styles }} />
		<section className='sb-art'>
			<div className='sb-art-blob' />
			<div className='sb-art-inner'>
				<div className='sb-art-grid'>

					{/* Image */}
					<div className='sb-art-img-wrap'>
						<div className='sb-art-img-glow' />
						<img
							src='https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop'
							alt='SmartByte Tech Curation'
							className='sb-art-img'
						/>
					</div>

					{/* Text */}
					<div>
						<div className='sb-art-badge'>
							<span className='sb-art-badge-dot' />
							Chapter III
						</div>
						<h2 className='sb-art-title'>
							Built by Experts, <br />
							<span>Delivered with Care.</span>
						</h2>
						<div className='sb-art-steps'>
							{PROCESS.map(({ step, title, description }) => (
								<div key={step} className='sb-art-step'>
									<div className='sb-art-step-num'>{step}</div>
									<div>
										<h4 className='sb-art-step-title'>{title}</h4>
										<p className='sb-art-step-desc'>{description}</p>
									</div>
								</div>
							))}
						</div>
					</div>

				</div>
			</div>
		</section>
	</>
)

export default TheArtistry