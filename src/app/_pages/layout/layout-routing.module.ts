import { HomeComponent } from './../home/home.component';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModule } from '../about/about.module';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { TagComponent } from '../tag/tag.component';

// {
//     path: 'about', loadChildren: '../about/about.module#AboutModule'
// },
const layoutRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            {
                path: 'scheme', loadChildren: '../scheme/scheme.module#SchemeModule'
            },
            {
                path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule'
            },
            { path: 'contact', component: ContactComponent },
            { path: 'tag/:tagname', component: TagComponent }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(layoutRoutes)
    ],
    exports: [RouterModule]
})

export class LayoutRouteModlue {
}
