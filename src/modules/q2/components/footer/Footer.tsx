import {FooterContainer, FooterItemContainer} from "./Footer.styles.tsx";
import {useNavigate} from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();
    const onClickBack = () =>{
        navigate('/')
    }
    return (
        <FooterContainer>
            <FooterItemContainer onClick={onClickBack} width={"53"} style={{marginLeft:10}}>
                <div>
                    {'<'}
                </div>
                <div>
                    Back
                </div>
            </FooterItemContainer>
            <FooterItemContainer width={"141"} style={{marginRight:10}}>
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