import {useEffect, useRef} from "react";

export const useColorBodyHook = (color: string) => {
    const bodyRef = useRef(document.body);

    useEffect(() => {
        bodyRef.current.style.backgroundColor = color;
        return () => {
            bodyRef.current.style.backgroundColor = '';
        };
    }, []);
}