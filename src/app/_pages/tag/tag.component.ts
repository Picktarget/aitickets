import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  public title = 'test';
  public loginForm;
  public options = [];
  public selectedOption;
  public data = [];
  public size = 'default';
  public isHiddenOdds = true;
  public isVoiced = true;
  public stopProfit = 2000;
  public stopLoss = 1000;
  public inputValue = '33333332';
  public _date = '2018-09-08';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      ip_userName: ['', {
        validators: [Validators.required, Validators.maxLength(64)]
      }],
      password: ['', {}],
      remember: [false],
      selectedOption: ['jack']
    });

    this.options = [
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'disabled', label: 'Disabled', disabled: true }
    ];
    this.selectedOption = this.options[0];
  }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.data.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
  }

  _submitForm() { }
  _console($event) { }
}
