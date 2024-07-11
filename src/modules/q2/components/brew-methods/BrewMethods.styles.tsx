import styled from "styled-components";

export const BrewMethodsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`


interface IBrewMethodCardContainer {
    color: string,
    rotate: string
}

export const BrewMethodCardContainer= styled.div<IBrewMethodCardContainer>`
    height: 10.25rem;
    width: 9.375rem;
    font-size: 11px;
    font-weight: 400;
    color: #222222;
    background-color: ${props => props.color};
    transform: rotate(${props => parseInt(props.rotate)}deg);
`