import React from "react";

const Link = ({href, className, children}) => {
    const onClick = (event) => {

        // this enables holding down ctrl to open link in new page. This is okay and all other logic is skipped
        if(event.metaKey || event.ctrlKey) {
            return;
        }

        // prevent full page reload
        event.preventDefault();
        
        // change URL without full page reload
        window.history.pushState({}, '', href);

        // any time we change the url manually, the route component needs to know it. Emit navigation event
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    return (<a onClick={onClick} className={className} href={href}>
        {children}
    </a>);
};


export default Link;