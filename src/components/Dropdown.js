import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({label, options, selected, onSelectedChange}) => {

    const [open, setOpen] = useState(false);
    // if we remove the element from the DOM, this ref is set to null
    const refToDropdown = useRef();

    useEffect(()=> {
        const onBodyClick = (event)=>{
            if(refToDropdown.current.contains(event.target)){
                return;
            }
            setOpen(false);
        }; 

        document.body.addEventListener('click', onBodyClick, { capture: true });

        return () => {
            document.body.removeEventListener('click', onBodyClick, { capture: true });
        };

    }, []);

    const renderedOptions = options.map((option) => {
        if(option.value === selected.value) {
            return null;
        }
        return (
            <div onClick={()=>onSelectedChange(option)} key={option.value} className="item">
                {option.label}
            </div>
        )
    });

    // console.log(refToDropdown.current);

    return (
        <div ref={refToDropdown} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                    onClick={()=>setOpen(!open)}  
                    className={`ui selection dropdown ${open? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div 
                        className={`menu ${open? 'visible transition' : ''}`}
                    >
                        {renderedOptions}
                    </div>
                </div>
            </div>
            {/* <div><h1 style={{color : selected.value}}>Hello there</h1></div> */}
        </div>
    )
}

export default Dropdown;