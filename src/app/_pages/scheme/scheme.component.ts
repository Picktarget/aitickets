import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'app-scheme',
    templateUrl: './scheme.component.html',
    styleUrls: ['./scheme.component.scss']
})

export class SchemeComponent {
    public settingForm: any;
    public options = [];
    public selectedOption;

    constructor(private fb: FormBuilder) {
        this.settingForm = this.fb.group({
            srcPostion: ['', {
                validators: [Validators.required, Validators.maxLength(64)]
            }],
            destPostion: ['', {}],
            selectedOption: [0, {}]
        });
        this.options = [
            { value: 0, label: '1个位置的数字，放到多个位置' },
            { value: 1, label: '多个位置的数字，放到1个位置' },
            { value: 2, label: '多个位置的数字，放到多个位置' },
            { value: 3, label: '多个位置数字分组，放到多个位置' },
            { value: 4, label: '每个位位置单独分组，分别放到各个位置' }
        ];
        this.selectedOption = this.options[0];
    }

    _submitForm() {
        const src = this.settingForm.controls['srcPostion'].value;
        const dest = this.settingForm.controls['destPostion'].value;
        const res = this.ai_judgeProgram(src, dest);
        console.log(res);
    }

    ai_judgeProgram(src, dest) {
        // 验证src和dest是否输入合法
        const pt = this.settingForm.controls['selectedOption'].value;
        const t_1 = new RegExp('^([1-9]|10)$', 'g'); // 验证格式为‘1’
        const d_1 = new RegExp('^([1-9]|10)+(,([1-9]|10)){1,9}$', 'g'); // 验证格式为'1，2，3，4，5'
        const fh = new RegExp('([\u4E00-\u9FA5]|[\uFE30-\uFFA0])+', 'g');
        src = src.replace(/([\u4E00-\u9FA5]|[\uFE30-\uFFA0])+/g, ',');
        dest = dest.replace(/([\u4E00-\u9FA5]|[\uFE30-\uFFA0])+/g, ',');
        let src_test = false;
        let dest_test = false;
        // 需对src和dest进行重复判断和排序处理
        switch (pt) {
            case 0:
                src_test = t_1.test(src);
                dest_test = d_1.test(dest);
                break;
            case 1:
                src_test = d_1.test(src);
                dest_test = t_1.test(dest);
                break;
            case 2:
                src_test = d_1.test(src);
                d_1.lastIndex = 0;
                dest_test = d_1.test(dest);
                break;
            case 3:

                break;
            case 4:

                break;

            default:
                break;
        }
        return src_test && dest_test;
    }
}
