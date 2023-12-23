import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatButtonModule, MatIconModule],
  selector: 'app-btn-menu',
  standalone: true,
  templateUrl: './btn-menu.component.html',
  styleUrl: './btn-menu.component.scss',
})
export class BtnMenuComponent {}
