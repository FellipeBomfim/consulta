import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Styles } from "./Styles";
import { getData } from "../../Services/api";

export const DataTable = ({number}) => {
    getData({number});

    function createData(name) {
        return { name }
    } 

    const rows = [
        createData(number),
        createData(2),
        createData(3)
    ]

    return(
        <Table style={Styles.main}>
            <TableHead>
                <TableRow>
                    <TableCell style={Styles.cell}>Test</TableCell>
                    <TableCell style={Styles.cell}  align="right">Test</TableCell>
                    <TableCell style={Styles.cell}  align="right">Test</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow
                        key={row.name}
                        sx={{'&:last-child td, &:last-child th': { border: 0 }}}
                    >
                        <TableCell style={Styles.cell}>{row.name}</TableCell>
                        <TableCell style={Styles.cell} align="right">{row.name}</TableCell>
                        <TableCell style={Styles.cell} align="right">{row.name}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}