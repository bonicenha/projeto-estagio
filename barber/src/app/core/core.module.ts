import { NgModule } from "@angular/core";
import { InicioComponent } from "./paginas/Inicio/Inicio.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CoreRoutingModule } from "./core-routing.module";

@NgModule
({
  declarations: [InicioComponent],
  imports: [
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: []
})
export class CoreModule{}
