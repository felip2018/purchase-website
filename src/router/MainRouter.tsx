import {Route, Routes} from "react-router-dom";
import {Products} from "../pages/Products.tsx";
import {ProductDetail} from "../pages/ProductDetail.tsx";
import {Website} from "../template/Website.tsx";

export default function MainRouter() {
    return (
        <>
            <Routes>
                <Route element={<Website/>}>
                    <Route path="/" element={<Products/>}/>
                    <Route path="/product-detail/:productId" element={<ProductDetail/>}/>
                </Route>
            </Routes>
        </>
    )
}
