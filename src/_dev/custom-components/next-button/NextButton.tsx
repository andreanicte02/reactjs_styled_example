import styled from "styled-components";

export const NextButton = styled.button`
    background-color: #222222;
    text-transform: uppercase;
    font-size: 13px;
    color: white;
    width: 106px;
    height: 41px;
    border-radius: 2px;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
        background-color: #353535;
        transform: translateY(-2px)
    }
    line-height: 18.2px;
    font-weight: 500;
`