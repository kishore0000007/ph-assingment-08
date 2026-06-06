 const styles = `
	@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

	.sb-pai {
		margin-top: 72px;
		border-top: 1px solid rgba(0, 210, 255, 0.12);
		padding-top: 64px;
		font-family: 'DM Sans', sans-serif;
	}

	.sb-pai-grid {
		display: grid;
		gap: 40px;
		grid-template-columns: 1fr;
	}
	@media (min-width: 768px) {
		.sb-pai-grid { grid-template-columns: repeat(3, 1fr); }
	}

	.sb-pai-block {}

	.sb-pai-block-header {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 16px;
	}

	.sb-pai-icon {
		width: 34px;
		height: 34px;
		border-radius: 8px;
		background: rgba(0, 210, 255, 0.08);
		border: 1px solid rgba(0, 210, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		color: #00d2ff;
		flex-shrink: 0;
	}

	.sb-pai-title {
		font-family: 'Syne', sans-serif;
		font-size: 1rem;
		font-weight: 700;
		color: #e8f0ff;
		letter-spacing: -0.2px;
	}

	.sb-pai-text {
		font-size: 0.85rem;
		line-height: 1.8;
		color: rgba(160, 195, 235, 0.6);
	}

	.sb-pai-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.sb-pai-tag {
		padding: 5px 12px;
		border-radius: 6px;
		background: rgba(0, 210, 255, 0.07);
		border: 1px solid rgba(0, 210, 255, 0.18);
		color: #00d2ff;
		font-size: 0.72rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}
`

const ProductAdditionalInfo = ({ product }) => {
	const specs =
		product.specs ||
		'Engineered with premium-grade components, advanced thermal management, and cutting-edge processing technology. Built to deliver peak performance for professionals and enthusiasts alike.'

	const compatibility = product.compatibility || [
		'Windows 11',
		'macOS',
		'Android',
		'USB-C',
		'Bluetooth 5.3',
	]

	const warranty =
		product.warranty ||
		'Covered by a 2-year manufacturer warranty. Contact our support team within 30 days for hassle-free returns. Extended warranty plans available at checkout.'

	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: styles }} />
			<section className='sb-pai'>
				<div className='sb-pai-grid'>

					{/* Specs */}
					<div className='sb-pai-block'>
						<div className='sb-pai-block-header'>
							<div className='sb-pai-icon'>
								<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
									<rect x='4' y='4' width='6' height='6' rx='1'/><rect x='14' y='4' width='6' height='6' rx='1'/><rect x='4' y='14' width='6' height='6' rx='1'/><path d='M14 17h6M17 14v6'/>
								</svg>
							</div>
							<h3 className='sb-pai-title'>Tech Specifications</h3>
						</div>
						<p className='sb-pai-text'>{specs}</p>
					</div>

					{/* Compatibility */}
					<div className='sb-pai-block'>
						<div className='sb-pai-block-header'>
							<div className='sb-pai-icon'>
								<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
									<path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/>
								</svg>
							</div>
							<h3 className='sb-pai-title'>Compatibility</h3>
						</div>
						<div className='sb-pai-tags'>
							{compatibility.map((item, idx) => (
								<span key={idx} className='sb-pai-tag'>{item}</span>
							))}
						</div>
					</div>

					{/* Warranty */}
					<div className='sb-pai-block'>
						<div className='sb-pai-block-header'>
							<div className='sb-pai-icon'>
								<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
									<path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'/><polyline points='22 4 12 14.01 9 11.01'/>
								</svg>
							</div>
							<h3 className='sb-pai-title'>Warranty & Returns</h3>
						</div>
						<p className='sb-pai-text'>{warranty}</p>
					</div>

				</div>
			</section>
		</>
	)
}

export default ProductAdditionalInfo