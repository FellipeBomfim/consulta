import { Styles } from "./Styles";

export const Cards = ({ data }) => {

    const source = data.hits.hits[0]._source;

    return (
        <div style={Styles.main}>
            <div style={Styles.box}>
                    <strong>Número do Processo:</strong> {source.numeroProcesso}
                    <br /><br />
                    <strong>Classe:</strong> {source.classe.nome} &emsp;&emsp;
                    <strong>Sistema:</strong> {source.sistema.nome} &emsp;&emsp;
                    <strong>Formato:</strong> {source.formato.nome} &emsp;&emsp;
                    <strong>Tribunal:</strong> {source.tribunal} &emsp;&emsp;
                    <strong>Grau:</strong> {source.grau}
                    <br /><br />
                    <strong>Data de Ajuizamento:</strong> {new Date(source.dataAjuizamento).toLocaleString()}
                    <br /><br />
                    <strong>Data da última atualização:</strong> {new Date(source.dataHoraUltimaAtualizacao).toLocaleString()}
            </div>
        </div>
    );
}