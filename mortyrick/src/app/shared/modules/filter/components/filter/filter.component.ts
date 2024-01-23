import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  constructor(private readonly fb: FormBuilder) {}

  // form: FormGroup;

  ngOnInit(): void {
    // this.form = this.fb.group({
    //   searchParam: new FormControl(),
    //   searchValue: new FormControl(),
    //   search: new FormControl(),
    // });
  }

  onSubmit() {
    // console.log(this.form.value);
  }
}
