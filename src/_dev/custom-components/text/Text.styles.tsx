import styled from "styled-components";

interface TextTitleContainer{
    $fontSize?:string
    $marginTop?:string
    $marginBottom?:string
}

export const TextTitleContainer = styled.div<TextTitleContainer>`
    text-transform: uppercase;
    font-size:${props=> props.$fontSize}; //1.875rem
    font-weight: 400;
    margin-top: ${props => props.$marginTop};
    text-align: center;
    margin-bottom: ${props => props.$marginBottom};
`


export const TextContainer = styled.div<TextTitleContainer>`
    font-size:${props=> props.$fontSize}; //1.875rem
    font-weight: 400;
    margin-top: ${props => props.$marginTop};
    margin-bottom: ${props => props.$marginBottom};
    text-align: center;
    color: #222222;
`