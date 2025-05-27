import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Styles } from "./Styles";

export const SearchBar = () => {
    const [test, setTest] = useState(true)

    const handleTextInputChange = event => {
        setTest(event.target.value);
    };

    return (
        <div style={Styles.main}>
            <form style={Styles.form} noValidate autoComplete='off'>
                <TextField
                    label="Nº do Processo"
                    variant="outlined"
                    style={Styles.searchBar}
                    onChange={handleTextInputChange}
                />
                <Button
                    variant="contained"
                    style={Styles.button}
                    href={"report?number=" + test}
                >
                    BUSCAR
                </Button>
            </form>
        </div>
    );
}