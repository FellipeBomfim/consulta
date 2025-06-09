import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from "@mui/material";
import { useMemo, useState } from "react";
import { Styles } from "./Styles";
import { visuallyHidden } from '@mui/utils';
import { TableModal } from "../TableModal/TableModal";

export const Datatable = ({ data }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('nome');

    const tableItems = [
        { field: "nome", label: "Tipo" },
        { field: "codigo", label: "Código" },
        { field: "dataHora", label: "Data" },
        { field: null, label: "Complementos Tabelados" }
    ];

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    const currentRows = useMemo(
        () =>
            [...data.hits.hits[0]._source.movimentos]
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [order, orderBy, page, rowsPerPage],
    );

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const createSortHandler = (property) => (event) => {
        handleRequestSort(event, property);
    };

    return (
        <TableContainer style={Styles.main}>
            <Table style={Styles.datagrid}>
                <TableHead>
                    <TableRow>
                        {tableItems.map((item) =>
                            <TableCell
                                style={Styles.cell}
                                key={item.field}
                                sortDirection={orderBy === item.field ? order : false}
                                align={item.field === "nome" ? "center" : "center"}
                            >
                                <TableSortLabel
                                    active={orderBy === item.field}
                                    direction={orderBy === item.field ? order : 'asc'}
                                    onClick={createSortHandler(item.field)}
                                >
                                    {item.label}
                                    {orderBy === item.field ? (
                                        <Box component="span" sx={visuallyHidden}>
                                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                        </Box>
                                    ) : null}
                                </TableSortLabel>
                            </TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentRows.map((row) => (
                        <TableRow
                            key={row.dataHora}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell style={Styles.cell} align="left">{row.nome}</TableCell>
                            <TableCell style={Styles.cell} align="center">{row.codigo}</TableCell>
                            <TableCell style={Styles.cell} align="center">{new Date(row.dataHora).toLocaleString()}</TableCell>
                            <TableCell style={Styles.cell} align="center">
                                <TableModal data={row.complementosTabelados} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.hits.hits[0]._source.movimentos.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
}