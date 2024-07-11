import styled from "styled-components";

interface TextTitleContainer{
    $fontSize:string
    $marginTop:string
}

export const TextTitleContainer = styled.div<TextTitleContainer>`
    text-transform: uppercase;
    font-size:${props=> props.$fontSize}; //1.875rem
    font-weight: 400;
    margin-top: ${props => props.$marginTop};
    text-align: center;
    margin-bottom: 2.563rem;
`