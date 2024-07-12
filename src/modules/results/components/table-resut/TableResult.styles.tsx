import styled from "styled-components";

export const TableResultContainer = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TableContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #E6E0D7;
`;

export const TableLeftContainer = styled.div`
    //flex: 1;
    justify-content: center;
    text-align: center;
    border-right: 1.5px dotted #222222;
`;



export const TableRightContainer = styled.div`
  display: flex;
  flex-direction: column;
 //flex: 2;
`;

export const TableRightTopContainer = styled.div`
    height: 50%;
    flex: 1;
    border-bottom: 1.5px dotted #222222;
`;

export const TableRightBottomContainer = styled.div`
    height: 100%;
    flex: 2;
    justify-content: space-between;
    
    display: flex;
`;

interface ITableRightBottomItemContainer{
    $borderRight?:'1.5px dotted #222222' |''
}

export const TableRightBottomItemContainer = styled.div<ITableRightBottomItemContainer>`
    height: 100%;
    flex: 2;
    justify-content: center;
    align-items: center;
    border-right: ${props => props.$borderRight};
`;

interface ITitleTextTable{
    $marginBottom?: string
    $marginTop?:string
    $fontSize?:'23.4px'|'20px'|'12px'|'24px'|'14.5px'|'18px'
    $color?:"#222222"|"#7E836D"
    $textTransform?:"uppercase"| 'none'
    $fontWeight?:'700'
}

export const TextTableContainer = styled.div<ITitleTextTable>`
    text-transform: ${props=> props.$textTransform};
    font-size:${props=> props.$fontSize}; //1.875rem
    font-weight: ${props=> props.$fontWeight===undefined?'400':props.$fontWeight};
    margin-top: ${props => props.$marginTop};
    margin-bottom: ${props => props.$marginBottom};
    color: ${props=> props.color};
`