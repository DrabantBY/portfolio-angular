import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ErrorInterface } from '../../types/error.interface';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent implements OnInit {
  error: ErrorInterface;

  constructor(private readonly location: Location) {}

  ngOnInit(): void {
    this.error = <ErrorInterface>this.location.getState();
  }
}
