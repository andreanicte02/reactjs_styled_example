import {BaristaTransitionContainer, BaristaTransitionNextButton} from "./BaristaTransition.styles.tsx";
import {useHeightBodyHook} from "../../_dev/hooks/useHeightBodyHook.tsx";
import {useNavigate} from "react-router-dom";

export const BaristaTransition = () => {

    const containerHeight = useHeightBodyHook();
    const navigate = useNavigate();

    return (
        <BaristaTransitionContainer style={{height:containerHeight}} >
            <div>
                <img src={'./media/transition-icon.png'}/>
            </div>
            <div>
                We’ll find coffee that’s on your level.
            </div>
            <div style={{marginTop:"1rem"}}>
                <BaristaTransitionNextButton type="button" onClick={()=>navigate('/q2')} >
                    Next
                </BaristaTransitionNextButton>
            </div>
        </BaristaTransitionContainer>
    );
};