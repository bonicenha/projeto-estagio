import { Component, ElementRef, OnInit } from '@angular/core';
import { ServicoRequest } from 'app/core/models/requests/servico.request';
import { PaginacaoResponse } from 'app/core/models/responses/paginacao.response';
import { ServicoResponse } from 'app/core/models/responses/servico.response';
import { ServicoService } from 'app/core/services/servico.service';

@Component({
  selector: 'app-Inicio',
  templateUrl: './Inicio.component.html',
  styleUrls: ['./Inicio.component.css'],
})
export class InicioComponent implements OnInit {

  carregando: boolean;

  request: ServicoRequest = new ServicoRequest({});

  response: PaginacaoResponse<ServicoResponse>;

  responseServico: ServicoResponse;

  constructor(
    private readonly service: ServicoService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.recuperarServicos();
    this.recuperarServicoPorId();
  }

  recuperarServicos(): void {
    this.carregando = true;
    this.service.listar(this.request).subscribe({
      next: (response) => {
        this.response = response;
        this.carregando = false;
      }
    });
  }

  recuperarServicoPorId(){
    return new Promise<void>((resolve) => {
      this.service.recuperarServicoPorId(1).subscribe({
        next: (response) => {
          this.responseServico = response;
          resolve;
        }
      });
    })
  }

  scrollLoc(event: MouseEvent): void {
    const elem = event.target as HTMLElement;
    const thisValue = elem.innerHTML;

    switch (thisValue) {
      case 'Sobre':
        this.scrollToElement('sobre-davi', 'smooth', 'center');
        break;
      case 'Serviços':
        this.scrollToElement('servicos', 'smooth', 'center');
        break;
      case 'Localização':
        this.scrollToElement('localizacao', 'smooth', 'start');
        break;
      case 'Início':
        this.scrollToElement('inicio', 'smooth', 'start');
        break;
    }
  }

  private scrollToElement(elementId: string, behavior: string, block: string): void {
    const element = this.elementRef.nativeElement.querySelector(`#${elementId}`);
    element.style.scrollBehavior = behavior;
    element.scrollIntoView({ behavior, block });
  }
}

window.addEventListener("scroll", function() {
  const logo = document.getElementById("logotipo") as HTMLElement;
  const header = document.getElementById("header") as HTMLElement;
  const logodiv = document.getElementById("logo") as HTMLElement;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  header.style.backgroundImage = 'linear-gradient(to bottom, rgba(52,52,52,0.2) 10%,rgba(52,52,52,0.3) 50%,rgba(52,52,52,0.4) 90%)';
  header.style.backdropFilter = "blur(6px)";

  if (window.scrollY <= 100) {
      header.style.backgroundImage = "";
      header.style.backdropFilter = "blur(0px)";
  }
});