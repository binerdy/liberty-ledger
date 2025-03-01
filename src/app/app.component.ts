import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { Theme } from './theme.service';

@Component({
  selector: 'app-root',
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton
  ],
  providers: [
    Theme
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected title = "EQuest";

  constructor(protected theme: Theme) {
  }
}
