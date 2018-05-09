import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';
import { LayoutRouteModlue } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LayoutModalComponent } from './layout-modal/layout-modal.component';
import { TagComponent } from '../tag/tag.component';
import { HomeComponent } from '../home/home.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [
        ContactComponent,
        LayoutComponent,
        LayoutModalComponent,
        TagComponent,
        HomeComponent
    ],
    imports: [
        LayoutRouteModlue,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        PerfectScrollbarModule
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ],
    entryComponents: [LayoutModalComponent]
})
export class LayoutModule { }
