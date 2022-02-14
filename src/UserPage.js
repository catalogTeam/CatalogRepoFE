function UserPage(props){

    function Table(list){
        const rows = list.data.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row}</td>
                </tr>
            );
        });
        return <table><tbody>{rows}</tbody></table>
    }
    
    return(
        <div>
            <body>
                <h1>User's Page</h1>
            </body>
            <Table props></Table>
        </div>
    );
}