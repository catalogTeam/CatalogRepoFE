import React from "react";
import useForm from "react-hook-form"
import Table from "./Table";
import Table2 from "./Table2";

function UserPage(){
    return(
        <div>
            <form>
                <Table characterData={users} />
            </form>
        </div>
    )

};

export default UserPage;