import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { ServicoRequest } from "../models/requests/servico.request";
import { PaginacaoResponse } from "../models/responses/paginacao.response";
import { ServicoResponse } from "../models/responses/servico.response";

@Injectable({
    providedIn: "root",
})
export class ServicoService {
    private urlBase = environment.config.apis.barbearia;

    constructor(private http: HttpClient) {}

    listar(request: ServicoRequest): Observable<PaginacaoResponse<ServicoResponse>> {
        return this.http.get<PaginacaoResponse<ServicoResponse>>(
            this.urlBase + "servicos",
            { params: <any>request }
        );
    }

    recuperarServicoPorId(id: number): Observable<ServicoResponse> {
        return this.http.get<ServicoResponse>(`${this.urlBase}servicos/${id}`);
    }
}
