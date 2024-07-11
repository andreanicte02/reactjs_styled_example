import styled from "styled-components";

interface ITabContainer {
    $marginBottom?:string
}

export const TabContainer = styled.div<ITabContainer>`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
    margin-bottom: ${props=> props.$marginBottom};
`

export const TabItemContainer = styled.div`
    padding-bottom: 0.5rem;
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-2px)
    }
    border-bottom: 1px solid #222222;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 400;
`