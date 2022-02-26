import Header from "./Header"
import Cards from "./Cards"
function UserPage(props){
    
    return(
    <body>
        {/* <title>
            props.username
        </title>
        <h1>Music Catalog</h1>
        <sub>Enter username to edit or click below to create new page</sub> */}
        <Header/>
        <header>Albums</header>
        <Cards/>
        <header>Artists</header>
        <Cards/>
        <header>Reviews</header>
    </body>
    );
}

export default UserPage;