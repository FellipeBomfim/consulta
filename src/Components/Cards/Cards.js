import { Styles } from "./Styles";

export const Cards = ({ data }) => {

    const source = data.hits.hits[0]._source;

    const items = [
        { field: source.numeroProcesso, label: "Número do Processo" },
        { field: source.classe.nome, label: "Classe" },
        { field: source.sistema.nome, label: "Sistema" },
        { field: source.formato.nome, label: "Formato" },
        { field: source.tribunal, label: "Tribunal" },
        { field: new Date(source.dataAjuizamento).toLocaleString(), label: "Data de Ajuizamento" },
        { field: new Date(source.dataHoraUltimaAtualizacao).toLocaleString(), label: "Data da última atualização" },
        { field: source.grau, label: "Grau" },
    ];

    return (
        <div style={Styles.main}>
            {items.map((item) => (
                <div style={Styles.card}>
                    <p style={Styles.text}>
                        <h3 style={Styles.title}>{item.label}:</h3>
                        <h4 style={Styles.description}>{item.field}</h4>
                    </p>
                </div>
            ))}
        </div>
    );
}