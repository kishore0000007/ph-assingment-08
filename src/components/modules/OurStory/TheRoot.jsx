 const styles = `
	@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

	.sb-root {
		background: #060a14;
		padding: 96px 0;
		border-top: 1px solid rgba(0,210,255,0.1);
		font-family: 'DM Sans', sans-serif;
		position: relative;
		overflow: hidden;
	}
	.sb-root::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: radial-gradient(rgba(0,210,255,0.06) 1px, transparent 1px);
		background-size: 36px 36px;
		pointer-events: none;
	}
	.sb-root-blob {
		position: absolute;
		top: -80px; right: -80px;
		width: 440px; height: 440px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(0,210,255,0.09) 0%, transparent 70%);
		pointer-events: none;
	}
	.sb-root-inner {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 24px;
		position: relative;
		z-index: 1;
	}
	.sb-root-grid {
		display: grid;
		gap: 64px;
		align-items: center;
		grid-template-columns: 1fr;
	}
	@media(min-width:1024px){ .sb-root-grid { grid-template-columns: 1fr 1fr; } }

	/* Image side */
	.sb-root-img-wrap {
		position: relative;
		order: 2;
	}
	@media(min-width:1024px){ .sb-root-img-wrap { order: 1; } }

	.sb-root-img-blob {
		position: absolute;
		top: -40px; left: -40px;
		width: 200px; height: 200px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(0,85,255,0.15) 0%, transparent 70%);
		pointer-events: none;
	}
	.sb-root-img {
		position: relative;
		z-index: 1;
		width: 100%;
		border-radius: 20px;
		border: 1px solid rgba(0,210,255,0.15);
		box-shadow: 0 0 50px rgba(0,210,255,0.08), 0 24px 48px rgba(0,0,0,0.5);
		display: block;
	}
	.sb-root-est {
		position: absolute;
		bottom: -20px; right: -20px;
		z-index: 20;
		background: linear-gradient(135deg,#0d1526,#0a1020);
		border: 1px solid rgba(0,210,255,0.2);
		padding: 20px 24px;
		border-radius: 14px;
		box-shadow: 0 0 24px rgba(0,210,255,0.1), 0 8px 24px rgba(0,0,0,0.4);
		display: none;
	}
	@media(min-width:768px){ .sb-root-est { display: block; } }
	.sb-root-est-text {
		font-family: 'Syne', sans-serif;
		font-size: 1.4rem;
		font-weight: 800;
		color: #00d2ff;
		letter-spacing: -0.5px;
	}
	.sb-root-est-label {
		font-size: 0.65rem;
		color: rgba(160,195,235,0.45);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 600;
		margin-top: 2px;
	}

	/* Text side */
	.sb-root-text {
		order: 1;
	}
	@media(min-width:1024px){ .sb-root-text { order: 2; } }

	.sb-root-badge {
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
	.sb-root-badge-dot {
		width: 5px; height: 5px; border-radius: 50%;
		background: #00d2ff;
		box-shadow: 0 0 7px rgba(0,210,255,0.9);
		animation: pulse 2s infinite;
	}
	@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }

	.sb-root-title {
		font-family: 'Syne', sans-serif;
		font-size: clamp(1.8rem, 4vw, 2.8rem);
		font-weight: 800;
		color: #fff;
		letter-spacing: -0.5px;
		line-height: 1.1;
		margin-bottom: 20px;
	}
	.sb-root-title span { color: #00d2ff; }

	.sb-root-divider {
		width: 56px; height: 2px;
		background: linear-gradient(90deg, transparent, #00d2ff, transparent);
		margin-bottom: 24px;
		border-radius: 99px;
	}

	.sb-root-p {
		font-size: 1rem;
		color: rgba(170,200,235,0.58);
		line-height: 1.8;
		margin-bottom: 16px;
	}
`

const TheRoot = () => (
	<>
		<style dangerouslySetInnerHTML={{ __html: styles }} />
		<section className='sb-root'>
			<div className='sb-root-blob' />
			<div className='sb-root-inner'>
				<div className='sb-root-grid'>

					{/* Image */}
					<div className='sb-root-img-wrap'>
						<div className='sb-root-img-blob' />
						<img
							src='https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop'
							alt='SmartByte Founders'
							className='sb-root-img'
						/>
						<div className='sb-root-est'>
							<div className='sb-root-est-text'>Est. 2018</div>
							<div className='sb-root-est-label'>SmartByte Origins</div>
						</div>
					</div>

					{/* Text */}
					<div className='sb-root-text'>
						<div className='sb-root-badge'>
							<span className='sb-root-badge-dot' />
							Chapter I
						</div>
						<h2 className='sb-root-title'>
							Where the Journey <br />
							<span>Began.</span>
						</h2>
						<div className='sb-root-divider' />
						<p className='sb-root-p'>
							SmartByte was born in a small garage in Dhaka in 2018, founded by a group of tech enthusiasts who were frustrated by overpriced, low-quality electronics flooding the local market.
						</p>
						<p className='sb-root-p'>
							Their mission was simple: bring the world's best technology directly to people who deserve it — at honest prices, with expert guidance, and without compromise. What started as a passion project quickly became Bangladesh's most trusted tech destination.
						</p>
					</div>

				</div>
			</div>
		</section>
	</>
)

export default TheRoot