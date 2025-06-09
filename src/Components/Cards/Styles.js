import { alignItems, fontWeight, justifyContent, textAlign } from "@mui/system";

export const Styles = {
    main: {
        display: "flex",
        flexWrap: "wrap",
        width: "60vw",
        height: "37vh",
        margin: "5vh auto 5vh auto",
        justifyContent: "space-between",
        alignContent: "space-between"
    },

    card: {
        backgroundColor: "white",
        display: "flex",
        width: "24%",
        height: "48%",
        justifyContent: "center",
        borderRadius: 15
    },

    text: {
        height: "80%",
        width: "60%"
    },

    title: {
        margin: "1.5vh 0 1.5vh 0"
    },

    description: {
        width: "80%",
        textAlign: "left",
        fontWeight: 400,
        margin: 0
    }
}