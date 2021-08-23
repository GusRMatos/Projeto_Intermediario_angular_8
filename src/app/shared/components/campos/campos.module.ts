import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../material/material.module";
import { InputDateComponent } from "./input-date/input-date.component";
import { InputNumberComponent } from "./input-number/input-number.component";
import { InputSelectComponent } from "./input-select/input-select.component";
import { InputTextComponent } from "./input-text/input-text.component";
import { InputTextareaComponent } from "./input-textarea/input-textarea.component";


@NgModule({
    declarations: [
        InputTextComponent,
        InputTextareaComponent,
        InputSelectComponent,
        InputNumberComponent,
        InputDateComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        InputTextComponent,
        InputTextareaComponent,
        InputSelectComponent,
        InputNumberComponent,
        InputDateComponent
    ]
})
export class CamposModule {
    constructor() { }
}