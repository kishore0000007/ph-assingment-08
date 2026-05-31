 'use client'

import Link from 'next/link'
import { Cpu } from 'lucide-react'
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa'

const styles = `
	@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

	.sb-footer {
		background: linear-gradient(180deg, #0a0f1e 0%, #060a14 100%);
		border-top: 1px solid rgba(0, 210, 255, 0.15);
		font-family: 'DM Sans', sans-serif;
		position: relative;
		overflow: hidden;
	}

	.sb-footer::before {
		content: '';
		position: absolute;
		inset: 0;
		background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%2300d2ff' fill-opacity='0.018'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
		pointer-events: none;
	}

	/* Top glow accent */
	.sb-footer-glow {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 50%;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(0, 210, 255, 0.5), transparent);
	}

	.sb-footer-inner {
		max-width: 1280px;
		margin: 0 auto;
		padding: 60px 24px 32px;
		position: relative;
	}

	/* ── Brand section ── */
	.sb-brand {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 44px;
	}

	.sb-brand-logo {
		display: flex;
		align-items: center;
		gap: 12px;
		text-decoration: none;
		margin-bottom: 20px;
	}

	.sb-brand-icon {
		width: 48px;
		height: 48px;
		border-radius: 12px;
		background: linear-gradient(135deg, #00d2ff, #0055ff);
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 24px rgba(0, 210, 255, 0.45), 0 0 50px rgba(0, 210, 255, 0.15);
		position: relative;
		overflow: hidden;
		flex-shrink: 0;
	}
	.sb-brand-icon::after {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%);
		animation: sheen 3.5s infinite;
	}
	@keyframes sheen {
		0% { transform: translateX(-100%); }
		100% { transform: translateX(100%); }
	}

	.sb-brand-name {
		font-family: 'Syne', sans-serif;
		font-weight: 800;
		font-size: 2rem;
		color: #ffffff;
		line-height: 1;
		letter-spacing: -0.5px;
	}
	.sb-brand-name span { color: #00d2ff; }

	.sb-brand-divider {
		width: 80px;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(0, 210, 255, 0.45), transparent);
		margin-bottom: 20px;
	}

	.sb-brand-desc {
		max-width: 520px;
		text-align: center;
		font-size: 0.875rem;
		line-height: 1.8;
		color: rgba(180, 205, 235, 0.55);
		font-weight: 400;
	}

	/* ── Nav links ── */
	.sb-nav {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 4px;
		margin-bottom: 40px;
		list-style: none;
		padding: 0;
	}

	.sb-nav-link {
		position: relative;
		text-decoration: none;
		font-size: 0.875rem;
		font-weight: 500;
		color: rgba(210, 230, 255, 0.65);
		padding: 7px 16px;
		border-radius: 8px;
		transition: color 0.2s ease, background 0.2s ease;
		letter-spacing: 0.01em;
	}
	.sb-nav-link:hover {
		color: #00d2ff;
		background: rgba(0, 210, 255, 0.08);
	}
	.sb-nav-link::after {
		content: '';
		position: absolute;
		bottom: 3px;
		left: 50%;
		transform: translateX(-50%) scaleX(0);
		width: 55%;
		height: 1.5px;
		background: linear-gradient(90deg, transparent, #00d2ff, transparent);
		transition: transform 0.25s ease;
		border-radius: 99px;
	}
	.sb-nav-link:hover::after { transform: translateX(-50%) scaleX(1); }

	/* ── Social icons ── */
	.sb-socials {
		display: flex;
		justify-content: center;
		gap: 12px;
		margin-bottom: 44px;
	}

	.sb-social-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 42px;
		height: 42px;
		border-radius: 50%;
		border: 1px solid rgba(0, 210, 255, 0.2);
		background: rgba(0, 210, 255, 0.05);
		color: rgba(0, 210, 255, 0.65);
		transition: all 0.25s ease;
		text-decoration: none;
	}
	.sb-social-btn:hover {
		background: linear-gradient(135deg, #00d2ff, #0055ff);
		border-color: transparent;
		color: #fff;
		transform: translateY(-2px) scale(1.08);
		box-shadow: 0 0 18px rgba(0, 210, 255, 0.4), 0 4px 12px rgba(0,0,0,0.3);
	}

	/* ── Bottom bar ── */
	.sb-bottom {
		border-top: 1px solid rgba(0, 210, 255, 0.1);
		padding-top: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 8px;
	}

	.sb-copyright {
		font-size: 0.78rem;
		color: rgba(130, 160, 200, 0.45);
		letter-spacing: 0.02em;
		text-align: center;
	}

	.sb-copyright span {
		color: rgba(0, 210, 255, 0.5);
		font-weight: 600;
	}

	.sb-tagline-bottom {
		font-size: 0.65rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: rgba(0, 210, 255, 0.28);
		font-weight: 500;
	}
`

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: styles }} />
			<footer className='sb-footer'>
				<div className='sb-footer-glow' />

				<div className='sb-footer-inner'>

					{/* ── Brand ── */}
					<div className='sb-brand'>
						<Link href='/' className='sb-brand-logo'>
							<div className='sb-brand-icon'>
								<Cpu size={24} color='#fff' strokeWidth={1.8} />
								{/* Replace with your logo: <Image src='/logo1.png' alt='SmartByte' width={30} height={30} className='object-contain' /> */}
							</div>
							<span className='sb-brand-name'>Smart<span>Byte</span></span>
						</Link>

						<div className='sb-brand-divider' />

						<p className='sb-brand-desc'>
							Your one-stop destination for everything tech — from cutting-edge gadgets
							to everyday essentials. Curated with precision, delivered with care.
						</p>
					</div>

					{/* ── Navigation ── */}
					<ul className='sb-nav'>
						{[
							{ label: 'Home', href: '/' },
							{ label: 'Shop', href: '/shop' },
							{ label: 'Our Story', href: '/story' },
							{ label: 'Contact', href: '/contact' },
						].map((link) => (
							<li key={link.href}>
								<Link href={link.href} className='sb-nav-link'>
									{link.label}
								</Link>
							</li>
						))}
					</ul>

					{/* ── Socials ── */}
					<div className='sb-socials'>
						<Link href='#' className='sb-social-btn' aria-label='Instagram'>
							<FaInstagram size={17} />
						</Link>
						<Link href='#' className='sb-social-btn' aria-label='Facebook'>
							<FaFacebookF size={16} />
						</Link>
						<Link href='#' className='sb-social-btn' aria-label='Pinterest'>
							<FaPinterestP size={17} />
						</Link>
					</div>

					{/* ── Bottom bar ── */}
					<div className='sb-bottom'>
						<p className='sb-copyright'>
							© 2018 – {year} <span>SmartByte</span>. All rights reserved.
						</p>
						<p className='sb-tagline-bottom'>Everything Tech, One Place.</p>
					</div>

				</div>
			</footer>
		</>
	)
}

export default Footer