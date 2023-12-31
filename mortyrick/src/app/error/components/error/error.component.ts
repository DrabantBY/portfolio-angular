import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ServerErrorInterface } from '../../types/serverError.interface';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent implements OnInit {
  error: ServerErrorInterface;

  constructor(private readonly location: Location) {}

  ngOnInit(): void {
    this.error = <ServerErrorInterface>this.location.getState();
  }
}
