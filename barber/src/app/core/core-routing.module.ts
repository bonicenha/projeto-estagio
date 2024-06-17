import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./paginas/Inicio/Inicio.component";
import { NgModule } from "@angular/core";

const rotas: Routes = [
	{
		path: "",
		pathMatch: "full",
		redirectTo: "inicio"
	},
	{
		path: 'inicio',
		component: InicioComponent,
	},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule],
})

export class CoreRoutingModule {
  constructor() {}
}
