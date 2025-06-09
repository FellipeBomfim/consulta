import { useMemo, useState } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from "@mui/material";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Styles } from "./Styles";
import { visuallyHidden } from '@mui/utils';

export const TableModal = ({ data = [] }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('nome');

  const tableItems = [
    { field: "nome", label: "Nome" },
    { field: "descricao", label: "Descrição" },
    { field: "codigo", label: "Código" },
    { field: "valor", label: "Valor" }
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
      [...data]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage],
  );

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <div>
      <Button
        style={Styles.button}
        variant="contained"
        onClick={data.length != 0 ? handleOpen : null}
      >
        {data.length}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Styles.box}>
          <TableContainer style={Styles.main}>
            <Table style={Styles.datagrid}>
              <TableHead>
                <TableRow>
                  {tableItems.map((item) =>
                    <TableCell
                      style={{ width: "30vw" }}
                      key={item.field}
                      sortDirection={orderBy === item.field ? order : false}
                      align={item.field === "nome" ? "left" : "center"}
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
                    <TableCell style={Styles.cell} align="center">{row.descricao}</TableCell>
                    <TableCell style={Styles.cell} align="center">{row.codigo}</TableCell>
                    <TableCell style={Styles.cell} align="center">{row.valor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  );
}
