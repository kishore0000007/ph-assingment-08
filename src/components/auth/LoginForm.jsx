  'use client'

import { useState } from 'react'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const styles = `
	@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

	.sb-login-wrap {
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
	.sb-login-wrap::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: radial-gradient(rgba(0, 210, 255, 0.07) 1px, transparent 1px);
		background-size: 36px 36px;
		pointer-events: none;
	}
	.sb-login-blob1 {
		position: absolute;
		top: -120px; left: -100px;
		width: 420px; height: 420px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(0, 85, 255, 0.1) 0%, transparent 70%);
		pointer-events: none;
	}
	.sb-login-blob2 {
		position: absolute;
		bottom: -100px; right: -80px;
		width: 380px; height: 380px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(0, 210, 255, 0.1) 0%, transparent 70%);
		pointer-events: none;
	}
	.sb-login-card {
		position: relative;
		z-index: 10;
		width: 100%;
		max-width: 440px;
		background: linear-gradient(160deg, #0d1526, #0a1020);
		border: 1px solid rgba(0, 210, 255, 0.15);
		border-radius: 20px;
		padding: 36px 32px;
		box-shadow: 0 0 60px rgba(0, 210, 255, 0.07), 0 24px 48px rgba(0,0,0,0.5);
	}
	.sb-login-card::before {
		content: '';
		position: absolute;
		top: 0; left: 0; right: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(0, 210, 255, 0.4), transparent);
		border-radius: 20px 20px 0 0;
	}
	.sb-login-header {
		text-align: center;
		margin-bottom: 28px;
	}
	.sb-login-icon {
		width: 56px; height: 56px;
		margin: 0 auto 16px;
		border-radius: 14px;
		background: linear-gradient(135deg, rgba(0,210,255,0.15), rgba(0,85,255,0.15));
		border: 1px solid rgba(0, 210, 255, 0.25);
		display: flex; align-items: center; justify-content: center;
		color: #00d2ff;
		box-shadow: 0 0 20px rgba(0, 210, 255, 0.15);
	}
	.sb-login-title {
		font-family: 'Syne', sans-serif;
		font-size: 1.7rem;
		font-weight: 800;
		color: #ffffff;
		letter-spacing: -0.5px;
		margin-bottom: 6px;
	}
	.sb-login-title span { color: #00d2ff; }
	.sb-login-sub {
		font-size: 0.85rem;
		color: rgba(160, 195, 235, 0.5);
		line-height: 1.6;
	}
	.sb-login-form {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.sb-login-field {
		display: flex;
		flex-direction: column;
		gap: 7px;
	}
	.sb-login-label {
		font-size: 0.75rem;
		font-weight: 600;
		color: rgba(170, 205, 240, 0.7);
		letter-spacing: 0.07em;
		text-transform: uppercase;
	}
	.sb-login-input-wrap {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 0 14px;
		border-radius: 10px;
		border: 1px solid rgba(0, 210, 255, 0.15);
		background: rgba(0, 210, 255, 0.04);
		transition: border-color 0.2s, box-shadow 0.2s;
	}
	.sb-login-input-wrap:focus-within {
		border-color: rgba(0, 210, 255, 0.45);
		box-shadow: 0 0 0 3px rgba(0, 210, 255, 0.08);
	}
	.sb-login-input-icon {
		color: rgba(0, 210, 255, 0.55);
		flex-shrink: 0;
		display: flex;
		align-items: center;
	}
	.sb-login-input {
		flex: 1;
		height: 44px;
		background: transparent;
		border: none;
		outline: none;
		font-family: 'DM Sans', sans-serif;
		font-size: 0.9rem;
		color: #e8f0ff;
	}
	.sb-login-input::placeholder { color: rgba(160, 195, 235, 0.3); }
	.sb-login-eye {
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
	.sb-login-eye:hover { color: #00d2ff; }
	.sb-login-forgot {
		display: flex;
		justify-content: flex-end;
		margin-top: -6px;
	}
	.sb-login-forgot a {
		font-size: 0.78rem;
		font-weight: 600;
		color: rgba(0, 210, 255, 0.65);
		text-decoration: none;
		transition: color 0.2s;
	}
	.sb-login-forgot a:hover { color: #00d2ff; text-decoration: underline; }
	.sb-login-submit {
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
	.sb-login-submit:hover:not(:disabled) {
		transform: translateY(-1px);
		box-shadow: 0 0 30px rgba(0, 210, 255, 0.45), 0 6px 18px rgba(0,0,0,0.4);
		filter: brightness(1.08);
	}
	.sb-login-submit:disabled { opacity: 0.65; cursor: not-allowed; transform: none; }
	.sb-login-spinner {
		width: 15px; height: 15px;
		border: 2px solid rgba(255,255,255,0.35);
		border-top-color: #fff;
		border-radius: 50%;
		animation: sbspin 0.7s linear infinite;
		flex-shrink: 0;
	}
	@keyframes sbspin { to { transform: rotate(360deg); } }
	.sb-login-divider {
		display: flex;
		align-items: center;
		gap: 12px;
		margin: 2px 0;
	}
	.sb-login-divider-line { flex: 1; height: 1px; background: rgba(0, 210, 255, 0.1); }
	.sb-login-divider-text {
		font-size: 0.72rem;
		color: rgba(160, 195, 235, 0.35);
		font-weight: 600;
		letter-spacing: 0.08em;
	}
	.sb-login-google {
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
	.sb-login-google:hover {
		background: rgba(0, 210, 255, 0.1);
		border-color: rgba(0, 210, 255, 0.35);
		color: #e8f0ff;
	}
	.sb-login-footer {
		text-align: center;
		font-size: 0.82rem;
		color: rgba(160, 195, 235, 0.45);
		margin-top: 2px;
	}
	.sb-login-footer a {
		color: #00d2ff;
		font-weight: 700;
		text-decoration: none;
		transition: opacity 0.2s;
	}
	.sb-login-footer a:hover { opacity: 0.8; text-decoration: underline; }
`

const LoginForm = () => {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false)

	// ── Google login ──
	const handleGoogleLogin = async () => {
		try {
			await authClient.signIn.social({
				provider: 'google',
				callbackURL: '/',
			})
		} catch (error) {
			console.error(error)
			toast.error('Google login failed', { position: 'top-right', autoClose: 4000 })
		}
	}

	// ── Email login ──
	const handleLogin = async (formData) => {
		const email = formData.get('email')
		const password = formData.get('password')

		try {
			await authClient.signIn.email(
				{ email, password },
				{
					onRequest: () => setLoading(true),

					onSuccess: () => {
						setLoading(false)
						toast.success('Welcome back! 🚀 Login successful', {
							position: 'top-right',
							autoClose: 3000,
						})
						router.push('/')
					},

					onError: (ctx) => {
						setLoading(false)
						toast.error(ctx.error.message || 'Login failed. Please try again', {
							position: 'top-right',
							autoClose: 4000,
						})
					},
				},
			)
		} catch (error) {
			setLoading(false)
			toast.error('An unexpected error occurred', {
				position: 'top-right',
				autoClose: 4000,
			})
			console.error(error)
		}
	}

	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: styles }} />

			<div className='sb-login-wrap'>
				<div className='sb-login-blob1' />
				<div className='sb-login-blob2' />

				<div className='sb-login-card'>

					{/* ── Header ── */}
					<div className='sb-login-header'>
						<div className='sb-login-icon'>
							<Lock size={24} />
						</div>
						<h1 className='sb-login-title'>Welcome <span>Back</span></h1>
						<p className='sb-login-sub'>Sign in to your SmartByte account</p>
					</div>

					{/* ── Form ── */}
					<form action={handleLogin} className='sb-login-form'>

						{/* Email */}
						<div className='sb-login-field'>
							<label className='sb-login-label'>Email</label>
							<div className='sb-login-input-wrap'>
								<span className='sb-login-input-icon'><Mail size={16} /></span>
								<input
									name='email'
									type='email'
									placeholder='hello@smartbyte.io'
									required
									className='sb-login-input'
								/>
							</div>
						</div>

						{/* Password */}
						<div className='sb-login-field'>
							<label className='sb-login-label'>Password</label>
							<div className='sb-login-input-wrap'>
								<span className='sb-login-input-icon'><Lock size={16} /></span>
								<input
									name='password'
									type={showPassword ? 'text' : 'password'}
									placeholder='••••••••'
									required
									className='sb-login-input'
								/>
								<button
									type='button'
									className='sb-login-eye'
									onClick={() => setShowPassword(!showPassword)}
								>
									{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
								</button>
							</div>
						</div>

						{/* Forgot password */}
						<div className='sb-login-forgot'>
							<Link href='/forgot-password'>Forgot password?</Link>
						</div>

						{/* Submit */}
						<button type='submit' disabled={loading} className='sb-login-submit'>
							{loading ? (
								<><div className='sb-login-spinner' /> Signing In...</>
							) : (
								<>
									<svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
										<path d='M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4'/><polyline points='10 17 15 12 10 7'/><line x1='15' y1='12' x2='3' y2='12'/>
									</svg>
									Sign In
								</>
							)}
						</button>

						{/* Divider */}
						<div className='sb-login-divider'>
							<div className='sb-login-divider-line' />
							<span className='sb-login-divider-text'>OR</span>
							<div className='sb-login-divider-line' />
						</div>

						{/* Google */}
						<button
							type='button'
							className='sb-login-google'
							onClick={handleGoogleLogin}
						>
							<FcGoogle size={20} />
							Continue with Google
						</button>

						{/* Register link */}
						<p className='sb-login-footer'>
							Don&apos;t have an account?{' '}
							<Link href='/register'>Create one</Link>
						</p>

					</form>
				</div>
			</div>
		</>
	)
}

export default LoginForm