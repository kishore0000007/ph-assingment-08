 'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'

const styles = `
	@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

	.sb-pimg { display: flex; flex-direction: column; gap: 16px; font-family: 'DM Sans', sans-serif; }

	.sb-pimg-main {
		position: relative;
		aspect-ratio: 1 / 1;
		overflow: hidden;
		border-radius: 16px;
		border: 1px solid rgba(0, 210, 255, 0.15);
		background: #0d1526;
		box-shadow: 0 0 40px rgba(0, 210, 255, 0.07), 0 8px 32px rgba(0,0,0,0.4);
	}

	.sb-pimg-badge {
		position: absolute;
		top: 14px;
		right: 14px;
		z-index: 10;
		padding: 5px 14px;
		border-radius: 99px;
		border: 1px solid rgba(0, 210, 255, 0.35);
		background: rgba(6, 10, 20, 0.75);
		backdrop-filter: blur(12px);
		font-size: 0.62rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #00d2ff;
	}

	.sb-pimg-thumbs {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;
	}

	.sb-pimg-thumb {
		position: relative;
		aspect-ratio: 1 / 1;
		overflow: hidden;
		border-radius: 10px;
		border: 1px solid rgba(0, 210, 255, 0.12);
		background: #0d1526;
		cursor: pointer;
		transition: border-color 0.2s ease;
		padding: 0;
	}
	.sb-pimg-thumb.active {
		border-color: rgba(0, 210, 255, 0.6);
		box-shadow: 0 0 12px rgba(0, 210, 255, 0.2);
	}
	.sb-pimg-thumb:not(.active):hover {
		border-color: rgba(0, 210, 255, 0.35);
	}

	.sb-pimg-more {
		aspect-ratio: 1 / 1;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		border: 1px solid rgba(0, 210, 255, 0.12);
		background: rgba(0, 210, 255, 0.04);
		color: rgba(0, 210, 255, 0.5);
		cursor: pointer;
		transition: all 0.2s ease;
	}
	.sb-pimg-more:hover {
		border-color: rgba(0, 210, 255, 0.35);
		color: #00d2ff;
		background: rgba(0, 210, 255, 0.08);
	}
`

const ProductImage = ({ image, title, isBestSeller = true }) => {
	const [mainImage, setMainImage] = useState(image)

	const thumbnails = [
		image,
		'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=200',
		'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=200',
	]

	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: styles }} />
			<div className='sb-pimg'>

				{/* Main image */}
				<div className='sb-pimg-main'>
					<Image src={mainImage} alt={title} fill className='object-cover' priority />
					{isBestSeller && (
						<div className='sb-pimg-badge'>Best Seller</div>
					)}
				</div>

				{/* Thumbnails */}
				<div className='sb-pimg-thumbs'>
					{thumbnails.map((thumb, idx) => (
						<button
							key={idx}
							onClick={() => setMainImage(thumb)}
							className={`sb-pimg-thumb${mainImage === thumb ? ' active' : ''}`}
						>
							<Image
								src={thumb}
								alt={`${title} view ${idx + 1}`}
								width={200}
								height={200}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									opacity: mainImage !== thumb ? 0.6 : 1,
									transition: 'opacity 0.2s',
								}}
							/>
						</button>
					))}

					{/* More button */}
					<button className='sb-pimg-more'>
						<Plus size={18} />
					</button>
				</div>

			</div>
		</>
	)
}

export default ProductImage