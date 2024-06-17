import { PaginacaoRequest } from "./paginacao.request";

export class ServicoRequest extends PaginacaoRequest {
    Nome: string;
    Valor: string;

    constructor(params: Partial<ServicoRequest>) {
        super(params);

        this.Nome = params.Nome || "";
        this.Valor = params.Valor || "";
    }
}