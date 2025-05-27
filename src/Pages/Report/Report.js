import { TableContainer } from "@mui/material";
import { DataTable } from "../../Components/Table/Table";
import { Styles } from "./Styles";

export const Report = () => {
    const params = new URLSearchParams(document.location.search);
    const number = params.get("number");
    return(
        <TableContainer style={Styles.main}>
            <DataTable number={number}/>
        </TableContainer>
    );
}