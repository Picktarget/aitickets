import { SchemeRouteModule } from './scheme-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemeComponent } from './scheme.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        SchemeRouteModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule.forRoot()
    ],
    declarations: [SchemeComponent],
})

export class SchemeModule { }
