import {Q2Container} from "./Q2.styles.ts";
import {Stepper} from "./components/stepper/Stepper.tsx";
import {StepperTextTitleContainer} from "./components/stepper/Stepper.styles.tsx";
import {BrewMethods} from "./components/brew-methods/BrewMethods.tsx";
import {Footer} from "./components/footer/Footer.tsx";

export const Q2 = () => {
    return (

        <Q2Container>
            <Stepper/>
            <StepperTextTitleContainer>
                How do you brew at home?
            </StepperTextTitleContainer>
            <div>
                <BrewMethods/>
                <Footer/>
            </div>
        </Q2Container>
    );
};