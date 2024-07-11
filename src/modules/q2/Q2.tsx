import {Q2Container} from "./Q2.styles.ts";
import {Stepper} from "./components/stepper/Stepper.tsx";
import {StepperTextTitleContainer} from "./components/stepper/Stepper.styles.tsx";
import {BrewMethods} from "./components/brew-methods/BrewMethods.tsx";

export const Q2 = () => {
    return (

        <Q2Container>
            <Stepper/>
            <StepperTextTitleContainer>
                How do you brew at home?
            </StepperTextTitleContainer>
            <BrewMethods/>
            <div style={{marginTop:"3rem"}}>
                hola
            </div>
        </Q2Container>
    );
};