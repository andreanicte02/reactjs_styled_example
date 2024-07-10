import styled from "styled-components";
import {colorNavBar, colorTextNavBar} from "../../theme/theme.ts";

export const NavBarContainer = styled.div`
    height: 185px ;
    display: flex;
    background-color: ${colorNavBar};
    align-items: center;
    color: ${colorTextNavBar};
    font-size: 2rem;
    font-weight: 500;
    justify-content: center;
    @media (max-width: 768px) { 
        justify-content: flex-start;
    }
    position: absolute;
    width: 100vw;
`;

export const NavBarTextContainer = styled.div`
    @media (max-width: 768px) {
        margin-left: 2.375rem;
    }
`;

export const NavBarMenuContainer = styled.div`
    position: absolute;
    margin-right: 3.938rem;
    right: 0;
`;