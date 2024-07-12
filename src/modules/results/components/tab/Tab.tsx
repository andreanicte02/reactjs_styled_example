import {TabContainer, TabItemContainer} from "./Tab.styles.tsx";
import {useNavigate} from "react-router-dom";


export const Tab = () => {
    const navigate = useNavigate();
    return (
        <TabContainer>
            <TabItemContainer>
                Email my results
            </TabItemContainer>
            <TabItemContainer onClick={()=>navigate("/carful_test/q2")}>
                Retake the quiz
            </TabItemContainer>
        </TabContainer>
    );
};