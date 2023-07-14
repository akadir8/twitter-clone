import React from "react";

function Container({children}) {
    return <div className="App flex min-h-screen mx-auto max-w-7xl border">
        {children}
    </div>
}

export default Container;