import styled from "styled-components";
import {colorNavBar, colorTextNavBar} from "../../theme/theme.ts";

export const NavBarContainer = styled.div`
    height: 11.563rem ;
    display: flex;
    flex: 1;
    background-color: ${colorNavBar};
    align-items: center;
    color: ${colorTextNavBar};
    font-size: 32px;
    font-weight: 500;
    justify-content: center;
`;

export const NavBarTextContainer = styled.div`
  
`;

export const NavBarMenuContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    width: 100%;
    cursor: pointer;
    margin-right: 3.938rem;
    
`;