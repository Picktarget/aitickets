import { Component, Input, OnInit } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';

@Component({
    selector: 'app-layout-modal-component',
    templateUrl: './layout-modal.component.html',
    styles: [
        `
      :host ::ng-deep .customize-footer {
        border-top: 1px solid #e9e9e9;
        padding: 10px 18px 0 10px;
        text-align: right;
        border-radius: 0 0 0px 0px;
        margin: 15px -16px -5px -16px;
      }
    `
    ]
})
export class LayoutModalComponent implements OnInit {
    _name: string;

    @Input()
    set name(value: string) {
        this._name = value;
    }

    emitDataOutside(e) {
        this.subject.next('传出数据');
    }

    handleCancel(e) {
        this.subject.destroy('onCancel');
    }

    constructor(private subject: NzModalSubject) {
        this.subject.on('onDestory', () => {
            console.log('destroy');
        });
    }

    ngOnInit() {
    }
}
