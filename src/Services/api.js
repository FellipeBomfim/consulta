export const getData = async ({number}) => {
    const data = {
        "query": {
            "match": {
                "numeroProcesso": {number}
            }
        }
    }

    try {
        const response = await fetch("https://api-publica.datajud.cnj.jus.br/api_publica_tjrj/_search", {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "APIKey cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw=="
            }
        })

        if(!response.ok) {
            throw new Error("Response status: ${response.status");
        }

        const json = await response.json();
        console.log(json);

    } catch (error) {
        console.error(error.message);
    }
}