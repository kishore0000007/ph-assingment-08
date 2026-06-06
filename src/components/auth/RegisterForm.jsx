 'use client'

import { useState } from 'react'
import { Mail, Lock, User, Image as ImageIcon, Eye, EyeOff } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { toast } from 'react-toastify'

const styles = `
	@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

	.sb-reg-wrap {
		min-height: 100vh;
		background: #060a14;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 40px 16px;
		font-family: 'DM Sans', sans-serif;
		position: relative;
		overflow: hidden;
	}

	/* Dot grid */
	.sb-reg-wrap::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: radial-gradient(rgba(0, 210, 255, 0.07) 1px, transparent 1px);
		background-size: 36px 36px;
		pointer-events: none;
	}

	/* Ambient blobs */
	.sb-reg-blob1 {
		position: absolute;
		top: -120px;
		right: -100px;
		width: 420px;
		height: 420px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(0, 210, 255, 0.1) 0%, transparent 70%);
		pointer-events: none;
	}
	.sb-reg-blob2 {
		position: absolute;
		bottom: -100px;
		left: -80px;
		width: 380px;
		height: 380px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(0, 85, 255, 0.09) 0%, transparent 70%);
		pointer-events: none;
	}

	/* Card */
	.sb-reg-card {
		position: relative;
		z-index: 10;
		width: 100%;
		max-width: 460px;
		background: linear-gradient(160deg, #0d1526, #0a1020);
		border: 1px solid rgba(0, 210, 255, 0.15);
		border-radius: 20px;
		padding: 36px 32px;
		box-shadow: 0 0 60px rgba(0, 210, 255, 0.07), 0 24px 48px rgba(0,0,0,0.5);
	}

	/* Top glow line */
	.sb-reg-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(0, 210, 255, 0.4), transparent);
		border-radius: 20px 20px 0 0;
	}

	/* Header */
	.sb-reg-header {
		text-align: center;
		margin-bottom: 28px;
	}

	.sb-reg-icon {
		width: 56px;
		height: 56px;
		margin: 0 auto 16px;
		border-radius: 14px;
		background: linear-gradient(135deg, rgba(0,210,255,0.15), rgba(0,85,255,0.15));
		border: 1px solid rgba(0, 210, 255, 0.25);
		display: flex;
		align-items: center;
		justify-content: center;
		color: #00d2ff;
		box-shadow: 0 0 20px rgba(0, 210, 255, 0.15);
	}

	.sb-reg-title {
		font-family: 'Syne', sans-serif;
		font-size: 1.7rem;
		font-weight: 800;
		color: #ffffff;
		letter-spacing: -0.5px;
		margin-bottom: 6px;
	}
	.sb-reg-title span { color: #00d2ff; }

	.sb-reg-sub {
		font-size: 0.85rem;
		color: rgba(160, 195, 235, 0.5);
		line-height: 1.6;
	}

	/* Form fields */
	.sb-reg-form {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.sb-reg-field {
		display: flex;
		flex-direction: column;
		gap: 7px;
	}

	.sb-reg-label {
		font-size: 0.75rem;
		font-weight: 600;
		color: rgba(170, 205, 240, 0.7);
		letter-spacing: 0.07em;
		text-transform: uppercase;
	}

	.sb-reg-input-wrap {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 0 14px;
		border-radius: 10px;
		border: 1px solid rgba(0, 210, 255, 0.15);
		background: rgba(0, 210, 255, 0.04);
		transition: border-color 0.2s, box-shadow 0.2s;
	}
	.sb-reg-input-wrap:focus-within {
		border-color: rgba(0, 210, 255, 0.45);
		box-shadow: 0 0 0 3px rgba(0, 210, 255, 0.08);
	}

	.sb-reg-input-icon {
		color: rgba(0, 210, 255, 0.55);
		flex-shrink: 0;
		display: flex;
		align-items: center;
	}

	.sb-reg-input {
		flex: 1;
		height: 44px;
		background: transparent;
		border: none;
		outline: none;
		font-family: 'DM Sans', sans-serif;
		font-size: 0.9rem;
		color: #e8f0ff;
	}
	.sb-reg-input::placeholder {
		color: rgba(160, 195, 235, 0.3);
	}

	.sb-reg-eye {
		background: transparent;
		border: none;
		cursor: pointer;
		color: rgba(160, 195, 235, 0.45);
		display: flex;
		align-items: center;
		padding: 0;
		transition: color 0.2s;
		flex-shrink: 0;
	}
	.sb-reg-eye:hover { color: #00d2ff; }

	/* Submit button */
	.sb-reg-submit {
		width: 100%;
		height: 46px;
		border-radius: 10px;
		border: none;
		background: linear-gradient(135deg, #00d2ff, #0055ff);
		color: #ffffff;
		font-family: 'DM Sans', sans-serif;
		font-size: 0.92rem;
		font-weight: 700;
		letter-spacing: 0.02em;
		cursor: pointer;
		transition: all 0.25s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		box-shadow: 0 0 20px rgba(0, 210, 255, 0.3), 0 4px 14px rgba(0,0,0,0.4);
		margin-top: 4px;
	}
	.sb-reg-submit:hover:not(:disabled) {
		transform: translateY(-1px);
		box-shadow: 0 0 30px rgba(0, 210, 255, 0.45), 0 6px 18px rgba(0,0,0,0.4);
		filter: brightness(1.08);
	}
	.sb-reg-submit:disabled {
		opacity: 0.65;
		cursor: not-allowed;
		transform: none;
	}

	/* Spinner */
	.sb-reg-spinner {
		width: 15px;
		height: 15px;
		border: 2px solid rgba(255,255,255,0.35);
		border-top-color: #fff;
		border-radius: 50%;
		animation: spin 0.7s linear infinite;
		flex-shrink: 0;
	}
	@keyframes spin { to { transform: rotate(360deg); } }

	/* Divider */
	.sb-reg-divider {
		display: flex;
		align-items: center;
		gap: 12px;
		margin: 4px 0;
	}
	.sb-reg-divider-line {
		flex: 1;
		height: 1px;
		background: rgba(0, 210, 255, 0.1);
	}
	.sb-reg-divider-text {
		font-size: 0.72rem;
		color: rgba(160, 195, 235, 0.35);
		font-weight: 600;
		letter-spacing: 0.08em;
	}

	/* Google button */
	.sb-reg-google {
		width: 100%;
		height: 46px;
		border-radius: 10px;
		border: 1px solid rgba(0, 210, 255, 0.18);
		background: rgba(0, 210, 255, 0.05);
		color: rgba(210, 230, 255, 0.8);
		font-family: 'DM Sans', sans-serif;
		font-size: 0.88rem;
		font-weight: 600;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 9px;
		transition: all 0.2s;
	}
	.sb-reg-google:hover {
		background: rgba(0, 210, 255, 0.1);
		border-color: rgba(0, 210, 255, 0.35);
		color: #e8f0ff;
	}

	/* Footer text */
	.sb-reg-footer {
		text-align: center;
		font-size: 0.82rem;
		color: rgba(160, 195, 235, 0.45);
		margin-top: 4px;
	}
	.sb-reg-footer a {
		color: #00d2ff;
		font-weight: 700;
		text-decoration: none;
		transition: opacity 0.2s;
	}
	.sb-reg-footer a:hover { opacity: 0.8; text-decoration: underline; }
`

const RegisterForm = () => {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	const handleRegister = async (formData) => {
		const name = formData.get('name')
		const image = formData.get('image')
		const email = formData.get('email')
		const password = formData.get('password')
		const confirmPassword = formData.get('confirmPassword')

		if (password !== confirmPassword) {
			toast.warning('Passwords do not match', { position: 'top-right', autoClose: 4000 })
			return
		}
		if (password.length < 6) {
			toast.warning('Password must be at least 6 characters', { position: 'top-right', autoClose: 4000 })
			return
		}

		try {
			await authClient.signUp.email(
				{ name, email, password, image },
				{
					onRequest: () => setLoading(true),
					onSuccess: () => {
						setLoading(false)
						toast.success('Account created! 🚀 Welcome to SmartByte', { position: 'top-right', autoClose: 3000 })
						router.push('/')
					},
					onError: (ctx) => {
						setLoading(false)
						toast.error(ctx.error.message || 'Registration failed. Please try again', { position: 'top-right', autoClose: 4000 })
					},
				},
			)
		} catch (err) {
			setLoading(false)
			toast.error('Something went wrong', { position: 'top-right', autoClose: 4000 })
			console.log(err)
		}
	}

	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: styles }} />

			<div className='sb-reg-wrap'>
				<div className='sb-reg-blob1' />
				<div className='sb-reg-blob2' />

				<div className='sb-reg-card'>

					{/* Header */}
					<div className='sb-reg-header'>
						<div className='sb-reg-icon'>
							<User size={24} />
						</div>
						<h1 className='sb-reg-title'>Create <span>Account</span></h1>
						<p className='sb-reg-sub'>Join SmartByte and explore the world of tech</p>
					</div>

					{/* Form */}
					<form action={handleRegister} className='sb-reg-form'>

						{/* Full Name */}
						<div className='sb-reg-field'>
							<label className='sb-reg-label'>Full Name</label>
							<div className='sb-reg-input-wrap'>
								<span className='sb-reg-input-icon'><User size={16} /></span>
								<input name='name' type='text' placeholder='John Doe' required className='sb-reg-input' />
							</div>
						</div>

						{/* Profile Image URL */}
						<div className='sb-reg-field'>
							<label className='sb-reg-label'>Profile Image URL</label>
							<div className='sb-reg-input-wrap'>
								<span className='sb-reg-input-icon'><ImageIcon size={16} /></span>
								<input name='image' type='text' placeholder='https://example.com/profile.jpg' className='sb-reg-input' />
							</div>
						</div>

						{/* Email */}
						<div className='sb-reg-field'>
							<label className='sb-reg-label'>Email</label>
							<div className='sb-reg-input-wrap'>
								<span className='sb-reg-input-icon'><Mail size={16} /></span>
								<input name='email' type='email' placeholder='hello@smartbyte.io' required className='sb-reg-input' />
							</div>
						</div>

						{/* Password */}
						<div className='sb-reg-field'>
							<label className='sb-reg-label'>Password</label>
							<div className='sb-reg-input-wrap'>
								<span className='sb-reg-input-icon'><Lock size={16} /></span>
								<input name='password' type={showPassword ? 'text' : 'password'} placeholder='••••••••' required className='sb-reg-input' />
								<button type='button' className='sb-reg-eye' onClick={() => setShowPassword(!showPassword)}>
									{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
								</button>
							</div>
						</div>

						{/* Confirm Password */}
						<div className='sb-reg-field'>
							<label className='sb-reg-label'>Confirm Password</label>
							<div className='sb-reg-input-wrap'>
								<span className='sb-reg-input-icon'><Lock size={16} /></span>
								<input name='confirmPassword' type={showConfirmPassword ? 'text' : 'password'} placeholder='••••••••' required className='sb-reg-input' />
								<button type='button' className='sb-reg-eye' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
									{showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
								</button>
							</div>
						</div>

						{/* Submit */}
						<button type='submit' disabled={loading} className='sb-reg-submit'>
							{loading ? (
								<><div className='sb-reg-spinner' /> Creating Account...</>
							) : (
								<>
									<svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
										<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/><circle cx='9' cy='7' r='4'/><line x1='19' y1='8' x2='19' y2='14'/><line x1='22' y1='11' x2='16' y2='11'/>
									</svg>
									Create Account
								</>
							)}
						</button>

						{/* Divider */}
						<div className='sb-reg-divider'>
							<div className='sb-reg-divider-line' />
							<span className='sb-reg-divider-text'>OR</span>
							<div className='sb-reg-divider-line' />
						</div>

						{/* Google */}
						<button
							type='button'
							className='sb-reg-google'
							onClick={() => toast.info('Google signup coming soon! 🚀', { position: 'top-right', autoClose: 3000 })}
						>
							<FcGoogle size={20} />
							Continue with Google
						</button>

						{/* Login link */}
						<p className='sb-reg-footer'>
							Already have an account?{' '}
							<Link href='/login'>Sign in</Link>
						</p>

					</form>
				</div>
			</div>
		</>
	)
}

export default RegisterForm