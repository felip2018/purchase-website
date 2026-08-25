import {Outlet} from "react-router-dom";

export const Website = () => {
    return (
        <>
            <div className="container">
                <Outlet/>
            </div>
        </>
    )
}
