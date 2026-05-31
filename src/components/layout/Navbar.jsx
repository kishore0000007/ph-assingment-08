 'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { Avatar, Button, Dropdown } from '@heroui/react'
import { Menu, Cpu } from 'lucide-react'

import ThemeToggler from '@/lib/ThemeToggler'
import { authClient } from '@/lib/auth-client'

const navLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'Shop', href: '/shop' },
	{ label: 'Our Story', href: '/story' },
]

// ── Inline styles for the tech-forward design ──
const styles = `
	@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

	.sb-navbar {
		position: sticky;
		top: 0;
		z-index: 50;
		background: linear-gradient(135deg, #0a0f1e 0%, #0d1526 60%, #0a1628 100%);
		border-bottom: 1px solid rgba(0, 210, 255, 0.15);
		box-shadow: 0 4px 32px rgba(0, 180, 255, 0.08);
		font-family: 'DM Sans', sans-serif;
	}

	.sb-navbar::before {
		content: '';
		position: absolute;
		inset: 0;
		background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d2ff' fill-opacity='0.018'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
		pointer-events: none;
	}

	.sb-container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 68px;
		position: relative;
	}

	/* ── Logo ── */
	.sb-logo {
		display: flex;
		align-items: center;
		gap: 10px;
		text-decoration: none;
		transition: transform 0.25s ease;
	}
	.sb-logo:hover { transform: translateY(-1px); }

	.sb-logo-icon {
		width: 42px;
		height: 42px;
		border-radius: 10px;
		background: linear-gradient(135deg, #00d2ff 0%, #0080ff 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 18px rgba(0, 210, 255, 0.45), 0 0 40px rgba(0, 210, 255, 0.15);
		position: relative;
		overflow: hidden;
		flex-shrink: 0;
	}
	.sb-logo-icon::after {
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
		0% { transform: translateX(-100%) rotate(0deg); }
		100% { transform: translateX(100%) rotate(0deg); }
	}

	.sb-logo-text { display: flex; flex-direction: column; }
	.sb-logo-name {
		font-family: 'Syne', sans-serif;
		font-weight: 800;
		font-size: 1.35rem;
		letter-spacing: -0.5px;
		color: #ffffff;
		line-height: 1;
	}
	.sb-logo-name span { color: #00d2ff; }
	.sb-logo-tagline {
		font-size: 0.65rem;
		color: rgba(0, 210, 255, 0.6);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-weight: 500;
		margin-top: 1px;
	}

	/* ── Nav Links ── */
	.sb-nav-links {
		display: none;
		align-items: center;
		gap: 2px;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	@media (min-width: 768px) { .sb-nav-links { display: flex; } }

	.sb-nav-link {
		position: relative;
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 500;
		color: rgba(220, 235, 255, 0.75);
		padding: 6px 14px;
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
		bottom: 2px;
		left: 50%;
		transform: translateX(-50%) scaleX(0);
		width: 60%;
		height: 1.5px;
		background: linear-gradient(90deg, transparent, #00d2ff, transparent);
		transition: transform 0.25s ease;
		border-radius: 99px;
	}
	.sb-nav-link:hover::after { transform: translateX(-50%) scaleX(1); }

	/* ── Right side ── */
	.sb-right {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.sb-theme-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 34px;
		height: 34px;
		border-radius: 8px;
		border: 1px solid rgba(0, 210, 255, 0.2);
		background: rgba(0, 210, 255, 0.06);
		transition: border-color 0.2s, background 0.2s;
	}
	.sb-theme-wrap:hover {
		border-color: rgba(0, 210, 255, 0.45);
		background: rgba(0, 210, 255, 0.12);
	}

	/* ── Auth buttons ── */
	.sb-auth-desktop {
		display: none;
		align-items: center;
		gap: 8px;
	}
	@media (min-width: 768px) { .sb-auth-desktop { display: flex; } }

	.sb-btn-login {
		font-family: 'DM Sans', sans-serif;
		font-size: 0.875rem;
		font-weight: 600;
		padding: 7px 18px;
		border-radius: 8px;
		border: 1px solid rgba(0, 210, 255, 0.35);
		background: rgba(0, 210, 255, 0.07);
		color: #00d2ff;
		cursor: pointer;
		text-decoration: none;
		transition: all 0.2s ease;
		letter-spacing: 0.01em;
		display: inline-flex;
		align-items: center;
	}
	.sb-btn-login:hover {
		background: rgba(0, 210, 255, 0.15);
		border-color: rgba(0, 210, 255, 0.65);
		box-shadow: 0 0 14px rgba(0, 210, 255, 0.2);
		color: #00d2ff;
	}

	.sb-btn-register {
		font-family: 'DM Sans', sans-serif;
		font-size: 0.875rem;
		font-weight: 600;
		padding: 7px 18px;
		border-radius: 8px;
		border: none;
		background: linear-gradient(135deg, #00d2ff 0%, #0066ff 100%);
		color: #fff;
		cursor: pointer;
		text-decoration: none;
		transition: all 0.2s ease;
		letter-spacing: 0.01em;
		display: inline-flex;
		align-items: center;
		box-shadow: 0 0 16px rgba(0, 210, 255, 0.3), 0 2px 8px rgba(0,0,0,0.3);
	}
	.sb-btn-register:hover {
		transform: translateY(-1px);
		box-shadow: 0 0 24px rgba(0, 210, 255, 0.45), 0 4px 12px rgba(0,0,0,0.3);
		filter: brightness(1.08);
	}

	.sb-btn-logout {
		font-family: 'DM Sans', sans-serif;
		font-size: 0.8rem;
		font-weight: 600;
		padding: 6px 14px;
		border-radius: 8px;
		border: 1px solid rgba(255, 90, 90, 0.35);
		background: rgba(255, 60, 60, 0.07);
		color: #ff6b6b;
		cursor: pointer;
		transition: all 0.2s ease;
		letter-spacing: 0.01em;
		display: inline-flex;
		align-items: center;
	}
	.sb-btn-logout:hover {
		background: rgba(255, 60, 60, 0.15);
		border-color: rgba(255, 90, 90, 0.6);
		box-shadow: 0 0 12px rgba(255, 60, 60, 0.2);
	}

	/* ── User info ── */
	.sb-user-info { display: flex; flex-direction: column; align-items: flex-end; }
	.sb-user-name { font-size: 0.82rem; font-weight: 600; color: #e8f0ff; line-height: 1.1; }
	.sb-user-email { font-size: 0.68rem; color: rgba(0, 210, 255, 0.55); }

	/* ── Skeleton ── */
	.sb-skeleton {
		height: 34px;
		width: 90px;
		border-radius: 8px;
		background: linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 75%);
		background-size: 200% 100%;
		animation: shimmer 1.4s infinite;
	}
	@keyframes shimmer {
		0% { background-position: 200% 0; }
		100% { background-position: -200% 0; }
	}

	/* ── Mobile hamburger ── */
	.sb-hamburger {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 8px;
		border: 1px solid rgba(0, 210, 255, 0.2);
		background: rgba(0, 210, 255, 0.06);
		color: rgba(0, 210, 255, 0.8);
		cursor: pointer;
		transition: all 0.2s;
	}
	.sb-hamburger:hover {
		border-color: rgba(0, 210, 255, 0.5);
		background: rgba(0, 210, 255, 0.12);
		color: #00d2ff;
	}

	@media (min-width: 768px) {
		.sb-mobile-only { display: none !important; }
	}
	@media (max-width: 767px) {
		.sb-desktop-only { display: none !important; }
		.sb-logo-text { display: none; }
	}
`

const Navbar = () => {
	const router = useRouter()
	const [mounted, setMounted] = useState(false)
	useEffect(() => { setMounted(true) }, [])

	const { data: session, isPending } = authClient.useSession()
	const user = session?.user

	const handleLogout = async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					toast.success('See you soon! 👋 Logged out successfully', {
						position: 'top-right',
						autoClose: 3000,
					})
					router.push('/')
					router.refresh()
				},
			},
		})
	}

	const renderAuthSection = () => {
		if (!mounted) return <div className='sb-skeleton' />
		if (isPending) return <div className='sb-skeleton' />

		if (user) {
			return (
				<div className='sb-auth-desktop'>
					<div className='sb-user-info'>
						<span className='sb-user-name'>{user.name}</span>
						<span className='sb-user-email'>{user.email}</span>
					</div>
					<Link href='/profile'>
						<Avatar
							src={user.image || ''}
							name={user.name || 'User'}
							size='sm'
							isBordered
							style={{ border: '2px solid rgba(0,210,255,0.5)', cursor: 'pointer' }}
						/>
					</Link>
					<button className='sb-btn-logout' onClick={handleLogout}>
						Logout
					</button>
				</div>
			)
		}

		return (
			<div className='sb-auth-desktop'>
				<Link href='/login' className='sb-btn-login'>Login</Link>
				<Link href='/register' className='sb-btn-register'>Register</Link>
			</div>
		)
	}

	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: styles }} />

			<nav className='sb-navbar'>
				<header className='sb-container'>

					{/* ── Logo ── */}
					<Link href='/' className='sb-logo'>
						<div className='sb-logo-icon'>
							{/* Replace with your actual logo image */}
							<Cpu size={22} color='#fff' strokeWidth={1.8} />
							{/* <Image src='/logo1.png' alt='SmartByte' width={28} height={28} className='object-contain' /> */}
						</div>
						<div className='sb-logo-text'>
							<span className='sb-logo-name'>Smart<span>Byte</span></span>
							<span className='sb-logo-tagline'>Everything Tech, One Place.</span>
						</div>
					</Link>

					{/* ── Desktop Nav Links ── */}
					<ul className='sb-nav-links'>
						{navLinks.map((link) => (
							<li key={link.href}>
								<Link href={link.href} className='sb-nav-link'>
									{link.label}
								</Link>
							</li>
						))}
						{mounted && !isPending && user && (
							<li>
								<Link href='/profile' className='sb-nav-link'>My Profile</Link>
							</li>
						)}
					</ul>

					{/* ── Right Side ── */}
					<div className='sb-right'>

						{/* Theme Toggle */}
						<div className='sb-theme-wrap'>
							<ThemeToggler />
						</div>

						{/* Desktop auth */}
						{renderAuthSection()}

						{/* Mobile avatar */}
						{mounted && !isPending && user && (
							<Link href='/profile' className='sb-mobile-only'>
								<Avatar
									src={user.image || ''}
									name={user.name || 'User'}
									size='sm'
									isBordered
									style={{ border: '2px solid rgba(0,210,255,0.5)', cursor: 'pointer' }}
								/>
							</Link>
						)}

						{/* Mobile Hamburger */}
						<div className='sb-mobile-only'>
							<Dropdown>
								<Dropdown.Trigger>
									<div
										role='button'
										tabIndex={0}
										aria-label='Open navigation menu'
										className='sb-hamburger'
									>
										<Menu size={17} />
									</div>
								</Dropdown.Trigger>

								<Dropdown.Popover
									style={{
										background: '#0d1526',
										border: '1px solid rgba(0,210,255,0.2)',
										borderRadius: '12px',
										marginTop: '8px',
										boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 24px rgba(0,210,255,0.08)',
									}}
								>
									<Dropdown.Menu aria-label='Navigation menu'>
										{navLinks.map((link) => (
											<Dropdown.Item key={link.href} textValue={link.label}>
												<Link href={link.href} style={{ display: 'block', width: '100%', fontWeight: 500, color: 'rgba(220,235,255,0.85)', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif" }}>
													{link.label}
												</Link>
											</Dropdown.Item>
										))}

										{mounted && !isPending && user
											? [
													<Dropdown.Item key='profile' textValue='My Profile'>
														<Link href='/profile' style={{ display: 'block', width: '100%', fontWeight: 500, color: '#00d2ff', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif" }}>
															My Profile
														</Link>
													</Dropdown.Item>,
													<Dropdown.Item key='logout' textValue='Logout' className='text-danger' onAction={handleLogout}>
														<span style={{ fontWeight: 600, color: '#ff6b6b', fontFamily: "'DM Sans', sans-serif" }}>Logout</span>
													</Dropdown.Item>,
												]
											: mounted && !isPending && !user
												? [
														<Dropdown.Item key='login' textValue='Login'>
															<Link href='/login' style={{ display: 'block', width: '100%', fontWeight: 600, color: '#00d2ff', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif" }}>
																Login
															</Link>
														</Dropdown.Item>,
														<Dropdown.Item key='register' textValue='Register'>
															<Link href='/register' style={{ display: 'block', width: '100%', fontWeight: 700, color: '#fff', textDecoration: 'none', fontFamily: "'DM Sans', sans-serif" }}>
																Register
															</Link>
														</Dropdown.Item>,
													]
												: []}
									</Dropdown.Menu>
								</Dropdown.Popover>
							</Dropdown>
						</div>

					</div>
				</header>
			</nav>
		</>
	)
}

export default Navbar