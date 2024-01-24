import { FocusMonitor } from '@angular/cdk/a11y';
import {
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
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
  implements MatFormFieldControl<SearchInputInterface>, OnInit, OnDestroy
{
  static nextId = 0;

  @HostBinding() id: string = `search-input-${SearchComponent.nextId++}`;

  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return true;
  }

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

  ngControl: NgControl | AbstractControlDirective | null = null;

  errorState: boolean;

  setDescribedByIds(ids: string[]): void {}
  onContainerClick(event: MouseEvent): void {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }
}