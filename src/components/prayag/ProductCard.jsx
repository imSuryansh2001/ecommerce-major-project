import React from 'react';
import tv from '../../assets/Tv.png';
import AddToCart from './AddToCart';

const ProductCard = () => {
	return (
		<>
			<div className="card_background rounded-es-2xl rounded-se-2xl p-5 duration-700 hover:scale-105">
				<h1 className=" text-[1.7rem] font-bold">Alien Ware Monitor T 46</h1>
				<p className=" text-gray-500">
					TYPE:<span className="">Samsung</span>
				</p>
				<img src={tv} className=" mx-auto w-full"></img>
				<div className=" grid grid-cols-2 justify-between">
					<h2 className=" my-auto font-semibold">
						<span className="text-2xl">85000</span> Rs
					</h2>
					<button className="my-auto">
						<AddToCart />
					</button>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
