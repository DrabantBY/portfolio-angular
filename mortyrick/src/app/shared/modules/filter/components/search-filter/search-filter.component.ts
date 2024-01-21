import { FocusMonitor } from '@angular/cdk/a11y';
import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgControl, AbstractControlDirective } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Subject } from 'rxjs';

interface SearchFilterInterface {
  query: string;
  scope: string;
}

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss',
  providers: [
    { provide: MatFormFieldControl, useExisting: SearchFilterComponent },
  ],
})
export class SearchFilterComponent
  implements OnInit, OnDestroy, MatFormFieldControl<SearchFilterInterface>
{
  constructor(private readonly focusMonitor: FocusMonitor) {}

  static nextId: number = 0;

  stateChanges: Subject<void> = new Subject<void>();
  focused: boolean = false;

  #value: SearchFilterInterface | null;
  #placeholder: string;

  @HostBinding()
  id: string = `search-filter-${SearchFilterComponent.nextId++}`;

  @HostBinding('class.floating')
  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  @ViewChild(MatInput, { read: ElementRef, static: true })
  input: ElementRef;

  @Input() required: boolean;
  @Input() disabled: boolean;

  @Input()
  set value(value: SearchFilterInterface | null) {
    this.#value = value;
    this.stateChanges.next();
  }

  @Input()
  set placeholder(placeholder: string) {
    this.#placeholder = placeholder;
    this.stateChanges.next();
  }

  get value() {
    return this.#value;
  }

  get placeholder() {
    return this.#placeholder;
  }

  get empty(): boolean {
    return !this.#value?.scope && !this.#value?.query;
  }

  ngControl: NgControl | AbstractControlDirective | null = null;

  errorState: boolean;
  controlType?: string | undefined;
  autofilled?: boolean | undefined;
  userAriaDescribedBy?: string | undefined;
  setDescribedByIds(ids: string[]): void {
    // throw new Error('Method not implemented.');
  }
  onContainerClick(event: MouseEvent): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.focusMonitor.monitor(this.input).subscribe((focused) => {
      this.focused = !!focused;
      this.stateChanges.next();
    });
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.input);
    this.stateChanges.complete();
  }
}
