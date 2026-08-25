import {useState} from "react";
import type {IProduct} from "../shared/models/IProduct.ts";
import {productsMock} from "../shared/mocks/products.mock.ts";
import {ProductCard} from "../shared/components/ProductCard/ProductCard.tsx";

export const Products = () => {

    const [products, ] = useState<IProduct[]>(productsMock);

    return (
        <div>
            <label className="title">Botica Serena</label>
            <p className="">Cosmética natural en lotes pequeños. Lo que ves es el inventario real de esta semana.</p>
            <hr/>
            {products.map((product: IProduct) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
