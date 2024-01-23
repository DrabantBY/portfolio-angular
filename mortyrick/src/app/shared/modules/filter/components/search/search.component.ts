import { Component, HostBinding, Input, OnDestroy } from '@angular/core';
import { NgControl, AbstractControlDirective } from '@angular/forms';
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
  implements MatFormFieldControl<SearchInputInterface>, OnDestroy
{
  static nextId = 0;

  @HostBinding() id: string = `search-input-${SearchComponent.nextId++}`;

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
  }
  get placeholder() {
    return this.#placeholder;
  }

  ngControl: NgControl | AbstractControlDirective | null = null;
  focused: boolean;
  empty: boolean;
  shouldLabelFloat: boolean;
  required: boolean;
  disabled: boolean;
  errorState: boolean;
  controlType?: string | undefined;
  autofilled?: boolean | undefined;
  userAriaDescribedBy?: string | undefined;
  setDescribedByIds(ids: string[]): void {}
  onContainerClick(event: MouseEvent): void {}

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }
}
