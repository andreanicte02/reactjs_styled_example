import {BaristaTransitionContainer} from "./BaristaTransition.styles.tsx";
import {useNavigate} from "react-router-dom";
import {useColorBodyHook} from "../../_dev/hooks/useColorBodyHook.tsx";
import {backgroundColorBaristaTransition} from "../../_dev/theme/theme.ts";
import {NextButton} from "../../_dev/custom-components/next-button/NextButton.tsx";

export const BaristaTransition = () => {

    const navigate = useNavigate();
    useColorBodyHook(backgroundColorBaristaTransition)

    return (
        <BaristaTransitionContainer>
            <div>
                <img src={'./media/transition-icon.png'}/>
            </div>
            <div>
                We’ll find coffee that’s on your level.
            </div>
            <div style={{marginTop:"1rem"}}>
                <NextButton type="button" onClick={()=>navigate('/q2')} >
                    Next
                </NextButton>
            </div>
        </BaristaTransitionContainer>
    );
};