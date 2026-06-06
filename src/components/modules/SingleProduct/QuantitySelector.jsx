 'use client'

const styles = `
	@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

	.sb-qs {
		border-radius: 14px;
		border: 1px solid rgba(0, 210, 255, 0.15);
		background: linear-gradient(160deg, #0d1526, #0a1020);
		padding: 24px;
		font-family: 'DM Sans', sans-serif;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.sb-qs-row {
		display: grid;
		gap: 16px;
		grid-template-columns: 1fr;
	}
	@media (min-width: 640px) {
		.sb-qs-row { grid-template-columns: 1fr 1fr; }
	}

	.sb-qs-label {
		display: block;
		font-size: 0.78rem;
		font-weight: 600;
		color: rgba(170, 205, 240, 0.7);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		margin-bottom: 10px;
	}

	/* Quantity stepper */
	.sb-qs-stepper {
		display: flex;
		width: fit-content;
		align-items: center;
		border-radius: 10px;
		border: 1px solid rgba(0, 210, 255, 0.18);
		background: rgba(0, 210, 255, 0.04);
		overflow: hidden;
	}

	.sb-qs-step-btn {
		width: 38px;
		height: 38px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2rem;
		font-weight: 600;
		color: rgba(0, 210, 255, 0.7);
		background: transparent;
		border: none;
		cursor: pointer;
		transition: all 0.15s;
		line-height: 1;
	}
	.sb-qs-step-btn:hover {
		color: #00d2ff;
		background: rgba(0, 210, 255, 0.1);
	}

	.sb-qs-step-input {
		width: 52px;
		text-align: center;
		background: transparent;
		border: none;
		outline: none;
		font-family: 'DM Sans', sans-serif;
		font-size: 0.95rem;
		font-weight: 600;
		color: #e8f0ff;
		-moz-appearance: textfield;
	}
	.sb-qs-step-input::-webkit-inner-spin-button,
	.sb-qs-step-input::-webkit-outer-spin-button { -webkit-appearance: none; }

	/* Select */
	.sb-qs-select {
		width: 100%;
		padding: 9px 14px;
		border-radius: 10px;
		border: 1px solid rgba(0, 210, 255, 0.18);
		background: rgba(0, 210, 255, 0.04);
		color: #e8f0ff;
		font-family: 'DM Sans', sans-serif;
		font-size: 0.88rem;
		font-weight: 500;
		outline: none;
		cursor: pointer;
		transition: border-color 0.2s;
		appearance: none;
		-webkit-appearance: none;
		background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2300d2ff' stroke-opacity='0.6' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 14px center;
		padding-right: 36px;
	}
	.sb-qs-select:focus {
		border-color: rgba(0, 210, 255, 0.45);
		box-shadow: 0 0 0 3px rgba(0, 210, 255, 0.08);
	}
	.sb-qs-select option { background: #0d1526; color: #e8f0ff; }

	/* Textarea */
	.sb-qs-textarea {
		width: 100%;
		padding: 12px 14px;
		border-radius: 10px;
		border: 1px solid rgba(0, 210, 255, 0.15);
		background: rgba(0, 210, 255, 0.03);
		color: #e8f0ff;
		font-family: 'DM Sans', sans-serif;
		font-size: 0.88rem;
		line-height: 1.7;
		outline: none;
		resize: none;
		transition: border-color 0.2s;
	}
	.sb-qs-textarea::placeholder { color: rgba(160, 195, 235, 0.35); }
	.sb-qs-textarea:focus {
		border-color: rgba(0, 210, 255, 0.4);
		box-shadow: 0 0 0 3px rgba(0, 210, 255, 0.07);
	}
`

const occasions = [
	'Personal Use',
	'Gift for Someone',
	'Birthday',
	'Work / Office',
	'Gaming Setup',
	'Home Upgrade',
]

const QuantitySelector = ({
	qty,
	setQty,
	occasion,
	setOccasion,
	instructions,
	setInstructions,
}) => {
	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: styles }} />
			<div className='sb-qs'>

				<div className='sb-qs-row'>
					{/* Quantity */}
					<div>
						<label className='sb-qs-label'>Quantity</label>
						<div className='sb-qs-stepper'>
							<button
								type='button'
								className='sb-qs-step-btn'
								onClick={() => setQty((q) => (q > 1 ? q - 1 : 1))}
							>−</button>
							<input
								type='number'
								className='sb-qs-step-input'
								value={qty}
								onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
							/>
							<button
								type='button'
								className='sb-qs-step-btn'
								onClick={() => setQty((q) => q + 1)}
							>+</button>
						</div>
					</div>

					{/* Occasion */}
					<div>
						<label className='sb-qs-label'>Buying For</label>
						<select
							className='sb-qs-select'
							value={occasion}
							onChange={(e) => setOccasion(e.target.value)}
						>
							<option value='' disabled>Choose occasion</option>
							{occasions.map((occ) => (
								<option key={occ} value={occ}>{occ}</option>
							))}
						</select>
					</div>
				</div>

				{/* Instructions */}
				<div>
					<label className='sb-qs-label'>Special Instructions</label>
					<textarea
						className='sb-qs-textarea'
						placeholder='Any special requests or notes for your order...'
						value={instructions}
						onChange={(e) => setInstructions(e.target.value)}
						rows={3}
					/>
				</div>

			</div>
		</>
	)
}

export default QuantitySelector