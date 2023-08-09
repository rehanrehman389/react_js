import React from 'react';

//file name and function name should same
export const Header = (props) => {
    //console.log(props)
    //props.name = 'test'
    return (
        <div>
            <h1>Hello { props.name }</h1>
            {props.children}
        </div>
    )
}

//export default Header;