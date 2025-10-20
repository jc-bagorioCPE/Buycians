import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product, addToCart }) => {
    return (
        <Card className="shadow-lg hover:shadow-xl transition">
            <CardContent className="p-4 flex flex-col items-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-blue-600 font-bold mb-3">₱{product.price}</p>
                <Button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 hover:bg-blue-700 w-full text-white font-medium"
                >
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
