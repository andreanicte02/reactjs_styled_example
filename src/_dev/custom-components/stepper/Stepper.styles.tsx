import styled from "styled-components";

interface IStepContainer{
    $status: 'current'|'view'|'pending'
}

export const StepContainer = styled.div<IStepContainer>`
    height: 1.5rem;
    width: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1.5px solid;
    background-color: ${props => props.$status==='current'?'#EEB426':props.$status==='pending'?'white':'black'};
    color: ${props => props.$status==='current' || props.$status==='view'?'white':'black'};
    border-color: ${props => props.$status ==="view"||props.$status ==="pending"?'black':'#EEB426'};
`

export const StepperContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
`