import {FooterContainer, FooterItemContainer} from "./Footer.styles.tsx";
import {useNavigate} from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();
    const onClickBack = () =>{
        navigate('/')
    }
    return (
        <FooterContainer>
            <FooterItemContainer onClick={onClickBack} width={"53"}>
                <div>
                    {'<'}
                </div>
                <div>
                    Back
                </div>
            </FooterItemContainer>
            <FooterItemContainer width={"141"}>
                <div>
                    Why it matters
                </div>
                <div>
                    +
                </div>
            </FooterItemContainer>
        </FooterContainer>
    );
};