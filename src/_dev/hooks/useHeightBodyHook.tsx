import {useState} from "react";
import {heightNavBar} from "../theme/theme.ts";

export const useHeightBodyHook = () => {
    const [containerHeight] = useState(window.innerHeight - heightNavBar)
    return containerHeight
}