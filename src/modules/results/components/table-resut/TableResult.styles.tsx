import styled from "styled-components";

export const TableResultContainer = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;;
`;

export const TableContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 488px;
    width: 100%;
    max-width: 1201px;

    @media (max-width: 1200px) {
        flex-direction: column; 
        height: auto;
        align-items: center; 
        justify-content: center;
    }
`;

export const TableLeftContainer = styled.div`
    justify-content: center;
    text-align: center;
    border-right: 1.5px dotted #222222;
    align-items: center;
    display: flex;
    flex-direction: column;
    background-color: #E6E0D7;
    flex: 1;
    padding: 10px;

    @media (max-width: 1200px) {
        border-right: 0px;
        width: 300px;
        border-bottom: 1.5px dotted #222222;
    }
`;

export const TableRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    background-color: #E6E0D7;
    width: 100%;

    @media (max-width: 1200px) {
        flex: none;
        width: 320px;
    }
`;

export const TableRightTopContainer = styled.div`
    height: 50%;
    border-bottom: 1.5px dotted #222222;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1200px) {
        height: auto;
        border-bottom: 1.5px dotted #222222;
    }
`;

export const TableRightBottomContainer = styled.div`
    height: 100%;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 1200px) {
        height: auto; 
        justify-content: center;
    }
`;

interface ITableRightBottomItemContainer {
    $borderRight?: '1.5px dotted #222222' | '';
}

export const TableRightBottomItemContainer = styled.div<ITableRightBottomItemContainer>`
    height: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-right: ${props => props.$borderRight};
    display: flex;
    flex-direction: column;
    text-align: center;

    @media (max-width: 1200px) {
        height: auto; 
        border-right: 0px;
        width: 100%; 
        flex: none;
        border-bottom: 1.5px dotted #222222;
    }
`;

interface ITitleTextTable {
    $marginBottom?: string;
    $marginTop?: string;
    $marginLeft?: string;
    $fontSize?: '23.4px' | '20px' | '12px' | '24px' | '14.5px' | '18px';
    $color?: "#222222" | "#7E836D";
    $textTransform?: "uppercase" | 'none';
    $fontWeight?: '700';
}

export const TextTableContainer = styled.div<ITitleTextTable>`
    text-transform: ${props => props.$textTransform};
    font-size: ${props => props.$fontSize}; //1.875rem
    font-weight: ${props => props.$fontWeight === undefined ? '400' : props.$fontWeight};
    margin-top: ${props => props.$marginTop};
    margin-bottom: ${props => props.$marginBottom};
    color: ${props => props.color};
    margin-left: ${props => props.$marginLeft};
`;
