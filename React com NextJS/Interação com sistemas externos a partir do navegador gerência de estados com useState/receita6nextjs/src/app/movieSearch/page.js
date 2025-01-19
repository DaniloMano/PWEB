import Form from "next/form";

export default async function MovieForm() {
    return (
        <Form action="/movies">
            <div>
                <label htmlFor="idTitleSearchKey">Título</label>
                <input id="idTitleSearchKey" name="titleSearchKey" />
            </div>
            <div>
                <label htmlFor="idYearSearchKey">Ano</label>
                <input id="idYearSearchKey" name="yearSearchKey" />
            </div>
            <div>
                <label htmlFor="idTypeSearchKey">Tipo</label>
                <input id="idTypeSearchKey" name="typeSearchKey" />
            </div>
            <div>
                <button type="submit">Pesquisar</button>
            </div>
        </Form>
    );
}
