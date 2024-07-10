import {NavBarContainer, NavBarTextContainer, NavBarMenuContainer} from "./NavBar.styles.tsx";

export const NavBar = () => {
    return (
        <NavBarContainer>
            <NavBarTextContainer>
                The Coffee Shop
            </NavBarTextContainer>
            <NavBarMenuContainer>
                <img src={'./media/menu-icon.png'}/>
            </NavBarMenuContainer>

        </NavBarContainer>
    );
};