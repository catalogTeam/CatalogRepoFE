import React from "react";
import Form from "./Form";
import Home from "./Home";
import ReactDOM from 'react-dom';
function ErrorPage(){
    
    function createPage(page){
        ReactDOM.render(page, document.getElementById('root'));
    }

    return(
        <html>
            <body>
                <h1>User page not found.</h1>
                <sub>Try again or create new user page</sub> 
            </body>
            <button onClick={createPage(<Home />)}>
                Search another user
            </button>
            <button onClick={createPage(<Form />)}>
                Create new page
            </button>
        </html>
    );
}

export default ErrorPage;