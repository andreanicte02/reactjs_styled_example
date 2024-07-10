import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainLayout} from "../_dev/layout/main-layout/MainLayout.tsx";
import {MainPage} from "../modules/main-page/MainPage.tsx";

export const PublicRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path={'/*'} element={<MainPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}