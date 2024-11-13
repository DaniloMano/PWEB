
const montaTabela = (dados, nomescabecalho, nomespropriedades) => {
    const cabecalhoHtml = nomescabecalho.map(cabecalho => `<th>${cabecalho}</th>`).join("");
    const tabelaHtml = `
        <table>
            <thead>
                <tr>${cabecalhoHtml}</tr>
            </thead>
            <tbody>
                ${dados.map(item => `
                    <tr>
                        ${nomespropriedades.map(prop => `<td>${item[prop] || ''}</td>`).join("")}
                    </tr>`).join("")}
            </tbody>
        </table>
    `;
    return tabelaHtml;
};
