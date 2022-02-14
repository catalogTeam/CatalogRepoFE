import React from "react";
import Form from "./Form";
import ErrorPage from "./ErrorPage";
import ReactDOM from 'react-dom';
function Home() {
    
    function createForm(){
        ReactDOM.render(<Form />, document.getElementById('root'));
    }

    function createError(){
        ReactDOM.render(<ErrorPage />, document.getElementById('root'));
    }

    return (
        <html>
            <head>
                <title>HTML Elements Reference</title>
            </head>
            <body>
                <h1>Music Catalog</h1>
                <sub>Enter username to edit or click below to create new page</sub>
            </body>
            <form>
                <label htmlFor="username">Username</label> 
                <input
                    type="text"
                    name="username"
                    id="username"
                /> 
                <input type="button" value="Submit" onClick={createError}/>
            </form>
            <button onClick={createForm}>
                Create New Account
            </button>
        </html>
    );
}

export default Home;