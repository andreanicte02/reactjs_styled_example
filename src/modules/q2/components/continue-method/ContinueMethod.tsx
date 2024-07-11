import {ContinueMethodContainer} from "./ContinueMethod.styles.tsx";
import {NextButton} from "../../../../_dev/custom-components/next-button/NextButton.tsx";
import {useNavigate} from "react-router-dom";

export const ContinueMethod = () => {
    const navigate = useNavigate();
    return (
        <ContinueMethodContainer>
            <NextButton onClick={()=>navigate('/results')}>Continue</NextButton>
        </ContinueMethodContainer>
    );
};