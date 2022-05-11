import React, { useState } from 'react'
import DropDownContext from './DropdownContext'

const DropDownState = (props ) => {
    const [dropdown, setDropdown] = useState(false);



   
     
    return (
        <DropDownContext.Provider value={{dropdown,setDropdown}}>
            {props.children}
        </DropDownContext.Provider>
    )
}

export default DropDownState