'use client'

import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useSession } from '@/lib/auth-client'

const ORDERS = [
	{
		id: 'SR-9011',
		item: 'Chocolate Truffle Delight',
		price: 32.0,
		status: 'Out for Delivery',
		date: 'Today',
		image:
			'https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=120',
	},
	{
		id: 'SR-8842',
		item: 'Rose Velvet Dream Cake',
		price: 45.0,
		status: 'Delivered',
		date: 'May 12, 2024',
		image:
			'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=100',
	},
]

const REWARDS = [
	{
		icon: '🚚',
		title: 'Free Delivery',
		cost: 100,
		status: 'Active Benefit',
		color: 'emerald',
	},
	{
		icon: '🎁',
		title: 'Surprise Pastry',
		cost: 250,
		status: 'Claim Reward',
		color: 'rose',
	},
	{
		icon: '🎨',
		title: 'Cake Masterclass',
		cost: 1000,
		status: 'Locked',
		color: 'purple',
	},
]

const MyProfilePage = () => {
	const [activeTab, setActiveTab] = useState('orders')

	/* =========================
	   BETTER AUTH SESSION
	========================= */

	const { data: session, isPending } = useSession()

	const user = session?.user

	/* =========================
	   HANDLE REWARD INTERACTION
	========================= */

	const handleRewardClick = (reward) => {
		if (reward.status === 'Locked') {
			toast.warning(`Need ${reward.cost} Buds to unlock this reward 🔒`, {
				position: 'top-right',
				autoClose: 3000,
			})
		} else if (reward.status === 'Active Benefit') {
			toast.success(`You're already enjoying ${reward.title}! 🎉`, {
				position: 'top-right',
				autoClose: 3000,
			})
		} else if (reward.status === 'Claim Reward') {
			toast.success(
				`Claimed: ${reward.title}! 🎁 Check your email for details`,
				{
					position: 'top-right',
					autoClose: 4000,
				},
			)
		}
	}

	/* =========================
	   DYNAMIC USER DATA
	========================= */

	const USER_DATA = {
		name: user?.name || 'Sweet Rose User',
		email: user?.email || 'user@example.com',
		image:
			user?.image ||
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',

		// dummy data
		joined: 'Jan 2024',
		status: 'Gold Status',
		buds: 450,
		nextTier: 500,
	}

	if (isPending) {
		return (
			<div className='min-h-screen flex items-center justify-center text-foreground'>
				Loading...
			</div>
		)
	}

	return (
		<div className='min-h-screen bg-background text-foreground font-sans p-4 md:p-8 transition-colors duration-300'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}
				<header className='mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6'>
					<div>
						<h1 className='text-4xl md:text-5xl font-serif font-bold text-foreground mb-2'>
							Member Dashboard
						</h1>

						<p className='text-muted-foreground font-medium italic'>
							Welcome back to your sweet sanctuary, {USER_DATA.name}.
						</p>
					</div>

					<div className='flex items-center gap-4 bg-card p-2 pr-6 rounded-full shadow-sm border border-border w-fit'>
						<div className='w-12 h-12 rounded-full overflow-hidden border-2 border-secondary'>
							<img
								src={USER_DATA.image}
								alt='Profile'
								className='w-full h-full object-cover'
							/>
						</div>

						<div>
							<p className='text-xs font-bold text-muted-foreground uppercase tracking-widest'>
								Logged in as
							</p>

							<p className='font-bold text-foreground leading-tight'>
								{USER_DATA.email}
							</p>
						</div>
					</div>
				</header>

				<div className='flex flex-col lg:flex-row gap-8'>
					{/* Sidebar */}
					<aside className='w-full lg:w-80 shrink-0 space-y-6'>
						<div className='bg-card p-8 rounded-[2.5rem] shadow-xl border border-border text-center'>
							<div className='relative w-32 h-32 mx-auto mb-6'>
								<img
									src={USER_DATA.image}
									className='w-full h-full object-cover rounded-full ring-8 ring-secondary'
								/>

								<div className='absolute bottom-1 right-1 w-8 h-8 bg-emerald-500 border-4 border-card rounded-full'></div>
							</div>

							<h2 className='text-2xl font-serif font-bold text-foreground'>
								{USER_DATA.name}
							</h2>

							<p className='text-muted-foreground text-sm mb-6'>
								Member since {USER_DATA.joined}
							</p>

							<span className='px-5 py-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-2xl uppercase tracking-[0.2em]'>
								{USER_DATA.status}
							</span>
						</div>

						<nav className='bg-card rounded-[2.5rem] shadow-sm border border-border overflow-hidden p-2'>
							{[
								{
									id: 'orders',
									label: 'My Orders',
									icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
								},
								{
									id: 'rewards',
									label: 'Sweet Rewards',
									icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14',
								},
								{
									id: 'settings',
									label: 'Account Settings',
									icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0',
								},
							].map((tab) => (
								<button
									key={tab.id}
									onClick={() => setActiveTab(tab.id)}
									className={`
										w-full flex items-center gap-3 px-6 py-4 rounded-2xl
										font-bold text-sm transition-all mb-1
										${
											activeTab === tab.id
												? 'bg-secondary text-primary'
												: 'text-muted-foreground hover:bg-secondary'
										}
									`}
								>
									<svg
										className='w-5 h-5'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d={tab.icon}
										/>
									</svg>

									{tab.label}
								</button>
							))}
						</nav>
					</aside>

					{/* Main */}
					<main className='grow'>
						{/* Orders */}
						{activeTab === 'orders' && (
							<div className='space-y-6'>
								<div className='bg-card rounded-[2.5rem] shadow-xl border border-border overflow-hidden'>
									<div className='px-8 py-6 bg-secondary border-b border-border flex flex-wrap justify-between items-center gap-4'>
										<div>
											<span className='text-[10px] font-bold text-primary uppercase tracking-widest block mb-1'>
												Coming Soon
											</span>

											<h3 className='font-bold text-foreground'>
												Order #SR-9011
											</h3>
										</div>

										<span className='px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-bold rounded-full animate-pulse'>
											Out for Delivery
										</span>
									</div>

									<div className='p-8 flex items-center gap-6'>
										<img
											src={ORDERS[0].image}
											className='w-24 h-24 rounded-3xl object-cover shadow-md'
										/>

										<div className='grow'>
											<h4 className='text-xl font-serif font-bold text-foreground'>
												{ORDERS[0].item}
											</h4>

											<p className='text-muted-foreground text-sm italic'>
												Expected arrival: This afternoon
											</p>
										</div>

										<p className='text-2xl font-bold text-primary'>
											${ORDERS[0].price.toFixed(2)}
										</p>
									</div>
								</div>
							</div>
						)}

						{/* Rewards */}
						{activeTab === 'rewards' && (
							<div className='space-y-8'>
								<div className='bg-primary rounded-[3rem] p-10 text-primary-foreground relative overflow-hidden shadow-2xl'>
									<div className='relative z-10'>
										<span className='font-bold uppercase tracking-widest text-[10px] opacity-70'>
											Your Rose Buds Balance
										</span>

										<h2 className='text-6xl font-serif font-bold mt-2 mb-6'>
											{USER_DATA.buds}
										</h2>

										<div className='w-full h-3 bg-white/10 rounded-full overflow-hidden mb-4'>
											<div
												className='h-full bg-white'
												style={{
													width: `${
														(USER_DATA.buds / USER_DATA.nextTier) * 100
													}%`,
												}}
											></div>
										</div>

										<p className='text-xs opacity-80'>
											Only 50 more Buds to unlock Platinum Tier.
										</p>
									</div>
								</div>

								<div className='grid md:grid-cols-3 gap-6'>
									{REWARDS.map((reward, i) => (
										<div
											key={i}
											className='bg-card p-8 rounded-[2.5rem] border border-border shadow-sm hover:shadow-xl transition-all text-center'
										>
											<div className='w-16 h-16 mx-auto rounded-3xl flex items-center justify-center text-3xl mb-4 bg-secondary'>
												{reward.icon}
											</div>

											<h4 className='font-bold text-foreground mb-1'>
												{reward.title}
											</h4>

											<p className='text-xs text-muted-foreground mb-6'>
												{reward.cost} Buds
											</p>

											<button
												onClick={() => handleRewardClick(reward)}
												className={`
												w-full py-3 rounded-2xl text-xs font-bold transition-all
												${
													reward.status === 'Locked'
														? 'bg-muted text-muted-foreground cursor-not-allowed'
														: 'bg-primary text-primary-foreground hover:opacity-90'
												}
											`}
											>
												{reward.status}
											</button>
										</div>
									))}
								</div>
							</div>
						)}
					</main>
				</div>
			</div>
		</div>
	)
}

export default MyProfilePage