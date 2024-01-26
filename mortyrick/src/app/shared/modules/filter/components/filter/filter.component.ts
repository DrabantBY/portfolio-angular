import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  constructor(private readonly fb: FormBuilder) {}

  form: FormGroup;

  onClear(): void {
    this.form.value.searchControl.searchValue = '';
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      searchControl: new FormControl({
        searchParam: '',
        searchValue: '',
      }),
    });
  }

  onSubmit() {
    console.log(this.form.value.searchControl);
  }
}
