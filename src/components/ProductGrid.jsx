import React from "react";

const ProductGrid = ({ products, addToCart }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                    <div className="aspect-square overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="p-4 flex flex-col items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800 text-center">
                            {product.name}
                        </h3>
                        <p className="text-blue-600 font-bold mt-2">₱{product.price}</p>
                        <button
                            onClick={() => addToCart(product)}
                            className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
