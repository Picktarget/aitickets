import { SchemeRouteModule } from './scheme-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemeComponent } from './scheme.component';


@NgModule({
    imports: [
        CommonModule,
        SchemeRouteModule
    ],
    declarations: [SchemeComponent],
})

export class SchemeModule { }
