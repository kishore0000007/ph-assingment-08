'use client'

import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@heroui/react'
import { Star } from 'lucide-react'
import Link from 'next/link'

const ProductCard = ({ product }) => {
	return (
		<Card className='group relative overflow-hidden rounded-3xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-500'>
			{/* IMAGE */}
			<div className='relative aspect-square rounded-3xl overflow-hidden bg-muted'>
				<Image
					src={product.image}
					alt={product.title}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className='object-cover group-hover:scale-110 transition-transform duration-700 ease-out'
				/>

				{/* TAG */}
				{product.tag && (
					<span className='absolute top-4 left-4 bg-background/80 backdrop-blur-md text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider border border-border'>
						{product.tag}
					</span>
				)}
			</div>

			{/* CONTENT */}
			<CardContent className='p-5'>
				<div className='flex items-center justify-between mb-2'>
					<span className='text-xs font-bold text-muted-foreground uppercase tracking-widest'>
						{product.category}
					</span>

					{/* rating */}
					<div className='flex items-center gap-1 text-primary text-xs font-bold'>
						<Star size={16} />
						<span className='text-foreground'>{product.rating}</span>
					</div>
				</div>

				<h3 className='text-lg font-bold text-foreground group-hover:text-primary transition-colors'>
					{product.title}
				</h3>

				<p className='text-sm text-muted-foreground mt-2 line-clamp-2'>
					{product.description}
				</p>
			</CardContent>

			{/* FOOTER */}
			<CardFooter className='px-5 pb-5 flex items-center justify-between'>
				<span className='text-xl font-bold text-primary'>
					${product.price.toFixed(2)}
				</span>

				<Link
					href={`/products/${product.id}`}
					className='text-sm font-bold text-primary hover:opacity-80 transition'
				>
					View Details
				</Link>
			</CardFooter>
		</Card>
	)
}

export default ProductCard