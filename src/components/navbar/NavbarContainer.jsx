import { useState } from "react";
import Navbar from "./Navbar";

const NavbarContainer = () => {
    
    const [navState, setNavState] = useState(false);

    const handleChangeState = () => {
        setNavState(!navState)
    }
    const handleChangeStateFalse = () => {
        setNavState(false)
    }

    return (
        <Navbar state={navState} handleChangeState={handleChangeState} handleChangeStateFalse={handleChangeStateFalse}/>
    )
}

export default NavbarContainer