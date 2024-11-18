import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private readonly library: FaIconLibrary) {
    this.library.addIcons(faDownload);
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'cv-sebastian-rodriguez.pdf';
    link.download = 'cv-sebastian-rodriguez.pdf';
    link.click();
  }
}
