import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainLayout} from "../_dev/layout/main-layout/MainLayout.tsx";
import {BaristaTransition} from "../modules/barista-transition/BaristaTransition.tsx";

export const PublicRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path={'/*'} element={<BaristaTransition/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}