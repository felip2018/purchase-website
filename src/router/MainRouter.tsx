import {Route, Routes} from "react-router-dom";
import {Products} from "../pages/Products.tsx";
import {ProductDetail} from "../pages/ProductDetail.tsx";

export default function MainRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Products/>}/>
                <Route path="/product-detail/:productId" element={<ProductDetail/>}/>
            </Routes>
        </>
    )
}
