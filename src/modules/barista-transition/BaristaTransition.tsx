import {BaristaTransitionContainer, BaristaTransitionNextButton} from "./BaristaTransition.styles.tsx";
import {useHeightBodyHook} from "../../_dev/hooks/useHeightBodyHook.tsx";


export const BaristaTransition = () => {

    const containerHeight = useHeightBodyHook();

    return (
        <BaristaTransitionContainer style={{height:containerHeight}} >
            <div>
                <img src={'./media/transition-icon.png'}/>
            </div>
            <div>
                We’ll find coffee that’s on your level.
            </div>
            <div style={{marginTop:"1rem"}}>
                <BaristaTransitionNextButton type="button" >
                    Next
                </BaristaTransitionNextButton>
            </div>
        </BaristaTransitionContainer>
    );
};