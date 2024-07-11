import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1rem;
`


interface IFooterItemContainer{
    width: string,
}

export const FooterItemContainer = styled.div<IFooterItemContainer>`
    padding-bottom: 7px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid black;
    width: ${props => props.width}px;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-2px)
    }
`