import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import * as _ from 'lodash';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.conponent.html',
    styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
    public config = {
        wheelSpeed: 1
    };
    public selectedTabIndex = 0;
    public tabs = [
        {
            name: 'home',
            router: '/home',
            alias: '说明'
        }
    ];
    constructor(
        private router: Router,
        private _electron: ElectronService
    ) {
        // alert(this.router.url);
        // const route = this.router.url.split('/');
        // console.log(route);
        this.openTag(this.router.url);
    }

    ngOnInit() { }

    logout() {
        sessionStorage.removeItem('usrinfo');
        if (this._electron.isElectronApp) {
            const ipcRend = this._electron.ipcRenderer;
            ipcRend.send('win-close');
        } else {
            this.router.navigate(['/login']);
        }
    }

    closeTab(tab) {
        const tabindex = this.tabs.indexOf(tab);
        const selected = this.tabs[this.selectedTabIndex];
        // 如果删除项之后有Tab 则导航至后一Tab 再执行删除
        // 如果删除项之后没有Tab 则导航至前一tab 再执行删除
        if (this.selectedTabIndex === tabindex) {
            if (tabindex + 1 === this.tabs.length - 1) {
                this.router.navigate([this.tabs[tabindex + 1].router]);
                this.tabs.splice(tabindex, 1);
                // 更新selectedTabIndex
                this.selectedTabIndex = tabindex;
            } else {
                this.router.navigate([this.tabs[tabindex - 1].router]);
                this.tabs.splice(tabindex, 1);
                // 更新selectedTabIndex
                this.selectedTabIndex = tabindex - 1;
            }
        } else {
            this.tabs.splice(tabindex, 1);
            // 更新selectedTabIndex
            const new_index = this.tabs.indexOf(selected);
            this.selectedTabIndex = new_index;
        }
    }

    openTag(tagname, tag = true) {
        const l = tagname.split('/');
        const new_tagname = l[l.length - 1];
        const index = _.findIndex(this.tabs, function (o) { return o.name === new_tagname; });
        if (index >= 0) {
            this.selectedTabIndex = index;
        } else {
            this.tabs.push({
                name: new_tagname,
                router: tag === true ? '/' + tagname : '/home',
                alias: new_tagname
            });
            this.selectedTabIndex = this.tabs.length - 1;
        }
        this.router.navigate([tagname]);
    }
    click(data) {
        alert(data);
    }
}
