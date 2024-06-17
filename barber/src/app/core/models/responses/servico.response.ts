export class ServicoResponse {
    Nome: string;
    Valor: number;

    constructor(params: Partial<ServicoResponse>) {
        this.Nome = params.Nome || '';
        this.Valor = params.Valor || null;
    }
}