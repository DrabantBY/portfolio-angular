import {
  Component,
  HostBinding,
  Input,
  OnDestroy,
  Optional,
  Self,
} from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';

interface SearchFieldInterface {
  searchParam: string;
  searchValue: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  providers: [{ provide: MatFormFieldControl, useExisting: SearchComponent }],
})
export class SearchComponent
  implements
    OnDestroy,
    ControlValueAccessor,
    MatFormFieldControl<SearchFieldInterface>
{
  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  static nextId = 0;
  #value: SearchFieldInterface;
  #placeholder: string;
  stateChanges: Subject<void> = new Subject<void>();
  focused: boolean = true;
  errorState: boolean;

  onChange: (value: SearchFieldInterface) => void;

  get empty(): boolean {
    return !this.#value.searchParam && !this.#value.searchValue;
  }

  @HostBinding()
  id: string = `search-input-${SearchComponent.nextId++}`;

  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input()
  set value(value: SearchFieldInterface) {
    this.#value = value;
    this.stateChanges.next();
  }
  get value() {
    return this.#value;
  }

  @Input()
  set placeholder(placeholder: string) {
    this.#placeholder = placeholder;
    this.stateChanges.next();
  }
  get placeholder() {
    return this.#placeholder;
  }

  @Input() required: boolean;
  @Input() disabled: boolean;

  setDescribedByIds(ids: string[]): void {}

  onContainerClick(event: MouseEvent): void {}

  writeValue(obj: SearchFieldInterface): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}

  // onClear(): void {
  //   this.value = { ...this.value, searchValue: '' };
  //   this.onChange(this.value);
  // }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }
}
