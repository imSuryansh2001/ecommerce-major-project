import React from 'react';
import ProductCard from '../components/prayag/ProductCard';

const Product = () => {
	return (
		<>
			<div className="mx-auto w-[80%] lg:w-[90%]">
				<h1 className="mt-7 text-[3rem] font-semibold text-[#7b35c8]">Products</h1>
				<div className="grid gap-5 py-[2rem] md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
		</>
	);
};

export default Product;
