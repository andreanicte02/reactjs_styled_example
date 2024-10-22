import styled from "styled-components";

export const BrewMethodsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 10rem;
    @media (max-width: 1230px) {
        margin-bottom: 2.5rem;
    }
`


interface IBrewMethodCardContainer {
    rotate: number,
    translate: string
}

export const BrewMethodCardContainer= styled.div<IBrewMethodCardContainer>`
    height: 10.25rem;
    width: 9.375rem;
    font-size: 11px;
    font-weight: 400;
    color: #222222;
    transform: rotate(${props => props.rotate}deg) translateY(${props => props.translate}px);
    @media (max-width: 1230px) {
        transform: rotate(0deg) translateY(0px);
        padding: 1rem;
    }
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: transform 0.3s, box-shadow 0.3s;
    &:hover{
        transform: scale(1.1);
    }
    cursor: pointer;
`

interface IBrewMethodImageCardContainer {
    rotate: number,

}

export const BrewMethodImageCardContainer = styled.div<IBrewMethodImageCardContainer>`
    transform: rotate(${props => props.rotate*-1}deg);
`