import {NavBar} from "../nav-bar/NavBar.tsx";
import {MainLayoutContainer} from "./MainLayout.styles.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <MainLayoutContainer>
                <Outlet/>
            </MainLayoutContainer>
        </div>
    );
};