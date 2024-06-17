export class PaginacaoRequest {
    public Pg?: number;
    public Qt?: number;
    public TpOrd?: string;
    public CpOrd?: string;

    constructor(params: Partial<PaginacaoRequest>) {
        this.Pg = params.Pg || 1;
        this.Qt = params.Qt || 10;
        this.TpOrd = params.TpOrd || 'desc';
        this.CpOrd = params.CpOrd || 'Id';
    }
}