export class PaginacaoResponse<T> {
    public Total: number;
    public Registros: Array<T>;

    constructor(params: Partial<PaginacaoResponse<T>>) {
        this.Total = params.Total || 0;
        this.Registros = params.Registros || [];
    }
}