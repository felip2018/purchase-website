import "./ProductCard.scss";
import type {IProduct} from "../../models/IProduct.ts";
import {EmphasisLabel} from "../EmphasisLabel/EmphasisLabel.tsx";

type ProductCardProps = {
    product: IProduct;
};

export const ProductCard = ({product}: ProductCardProps) => {
    return (
        <div className="product-card_container">
            <div className="product-card_image">
                {product.image ?
                    <img src={product.image} alt="Product image"/> :
                    <div className="product-card_image__txt">
                        <span className="product-card_image__txt__lbl">{product.title.charAt(0)}</span>
                    </div>}
            </div>
            <div className="product-card_info">
                <span className="product-card_info__title">{product.title}</span>
                <span>{product.presentation}</span>
                <div className="product-card_info__additional">
                    <div className="product-card_info__additional__price">
                        <span>${product.price}</span>
                    </div>
                    <div className="product-card_info__additional__stock">
                        <EmphasisLabel
                            txt={product.stock > 0 ? `${product.stock} disponibles`: "Agotado"}
                            bgColor={product.stock>4 ? "#55efc4" : "#ff7675"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
