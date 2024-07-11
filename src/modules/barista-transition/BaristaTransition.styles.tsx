import styled from "styled-components";
import {backgroundColorBaristaTransition} from "../../_dev/theme/theme.ts";

export const BaristaTransitionContainer = styled.div`
    background-color: ${backgroundColorBaristaTransition};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.75rem;
    font-weight: 400;
    margin-top: 27vh;
`