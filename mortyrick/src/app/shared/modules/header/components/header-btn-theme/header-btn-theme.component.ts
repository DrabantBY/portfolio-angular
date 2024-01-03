import { Component, Inject, Renderer2, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

type currentModeType = 'light_mode' | 'dark_mode';

@Component({
  selector: 'app-header-btn-theme',
  templateUrl: './header-btn-theme.component.html',
  styleUrl: './header-btn-theme.component.scss',
})
export class HeaderBtnThemeComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer: Renderer2
  ) {}

  #currentMode: currentModeType;

  get currentMode(): currentModeType {
    return this.#currentMode;
  }

  set currentMode(mode: currentModeType) {
    this.#currentMode = mode;
  }

  get isLightMode(): boolean {
    return this.currentMode === 'light_mode';
  }

  toggleMode(): void {
    this.currentMode = this.isLightMode ? 'dark_mode' : 'light_mode';
    localStorage.setItem('currentMode', this.currentMode);
    this.renderer.setAttribute(this.document.body, 'class', this.currentMode);
  }

  ngOnInit(): void {
    this.currentMode =
      <currentModeType>localStorage.getItem('currentMode') ?? 'light_mode';
    this.renderer.setAttribute(this.document.body, 'class', this.currentMode);
  }
}
