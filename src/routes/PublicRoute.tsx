import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainLayout} from "../_dev/layout/main-layout/MainLayout.tsx";
import {BaristaTransition} from "../modules/barista-transition/BaristaTransition.tsx";
import {Q2} from "../modules/q2/Q2.tsx";
import {Results} from "../modules/results/Results.tsx";

export const PublicRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path={'/*'} element={<BaristaTransition/>}/>
                    <Route path={'/q2'} element={<Q2/>}/>
                    <Route path={'/results'} element={<Results/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}