import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PanelComponent } from './panel/panel.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        PanelComponent
    ],
    imports: [ReactiveFormsModule],
    exports: [PanelComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ComponentModule {

}
