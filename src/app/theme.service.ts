import { computed, effect, Injectable, Renderer2, signal } from '@angular/core';

interface AppTheme {
  name: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class Theme {
  private mode = signal<'light' | 'dark'>('light');
  private themes: AppTheme[] = [
    { name: 'light', icon: 'light_mode' },
    { name: 'dark', icon: 'dark_mode' }
  ];

  public getThemes(): AppTheme[] {
    return this.themes;
  }

  public icon = computed(() => this.mode() === "light"
    ? "light_mode"
    : "dark_mode");

  public toggle() {
    if (this.mode() === "light") {
      this.mode.set("dark");
    } else {
      this.mode.set("light");
    }
  }

  constructor(private renderer: Renderer2) {
    effect(() => {
      if (this.mode() === "light") {
        this.renderer.addClass(document.documentElement, 'light-theme');
        this.renderer.removeClass(document.documentElement, 'dark-theme');
      } else {
        this.renderer.addClass(document.documentElement, 'dark-theme');
        this.renderer.removeClass(document.documentElement, 'light-theme');
      }
    });
  }
}
