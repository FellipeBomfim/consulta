import { TableContainer } from "@mui/material";
import { Styles } from "./Styles";
import { Datatable } from "../../Components/Datatable/Datatable";
import { getData } from "../../Services/Api.js";
import data from "../../Services/data.json";
import { Cards } from "../../Components/Cards/Cards.js";

export const Report = () => {
    //const params = new URLSearchParams(document.location.search);
    //const number = params.get("number");
    //const data = getData("number");

    return(
        <TableContainer style={Styles.main}>
            <Cards data={data}/>
            <Datatable data={data}/>
        </TableContainer>
    );
}