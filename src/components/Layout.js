import React from "react";
import Header from './Header'

function Layout(props) {
    return(

        <div>
            <div style={{'background':'#1E1E1D'}}>
                <Header/>
            </div>
            {props.children}
        </div>

    )
}
export default Layout;
