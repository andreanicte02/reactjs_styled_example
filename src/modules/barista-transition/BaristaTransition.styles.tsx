import styled from "styled-components";
import {backgroundColorBaristaTransition} from "../../_dev/theme/theme.ts";

export const BaristaTransitionContainer = styled.div`
    background-color: ${backgroundColorBaristaTransition};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.75rem;
    font-weight: 400;
    margin-top: 30vh;
`

export const BaristaTransitionNextButton = styled.button`
    background-color: #222222;
    text-transform: uppercase;
    font-size: 19px;
    color: white;
    width: 145px;
    height: 41px;
    border-radius: 2px;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
        background-color: #353535;
        transform: translateY(-2px)
    }
`