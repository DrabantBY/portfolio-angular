import { FocusMonitor } from '@angular/cdk/a11y';
import {
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import {
  NgControl,
  AbstractControlDirective,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';

interface SearchInputInterface {
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
    MatFormFieldControl<SearchInputInterface>
{
  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  static nextId = 0;

  @HostBinding() id: string = `search-input-${SearchComponent.nextId++}`;

  shouldLabelFloat: boolean;
  stateChanges: Subject<void> = new Subject<void>();

  #value: SearchInputInterface | null;

  @Input()
  set value(value: SearchInputInterface | null) {
    this.#value = value;
    this.stateChanges.next();
  }
  get value() {
    return this.#value;
  }

  #placeholder: string;

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

  focused: boolean = true;

  get empty(): boolean {
    return !this.#value?.searchParam && !this.#value?.searchValue;
  }

  errorState: boolean;

  setDescribedByIds(ids: string[]): void {}
  onContainerClick(event: MouseEvent): void {}

  writeValue(obj: SearchInputInterface): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }
}
