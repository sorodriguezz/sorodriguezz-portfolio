import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  technologies = [
    {
      name: 'Angular',
      image: 'angular.svg',
    },
    {
      name: 'TypeScript',
      image: 'typescript.svg',
    },
    { name: 'JavaScript', image: 'javascript.svg' },
    { name: 'NestJS', image: 'nestjs.svg' },
    { name: 'Spring', image: 'spring.svg' },
    { name: 'Python', image: 'python.svg' },
  ];

  experiences = [
    {
      date: 'Noviembre 2022 - Presente',
      position: 'Líder Técnico',
      company: 'Open2000',
      description: `Completar`,
    },
    {
      date: 'Febrero 2021 - Noviembre 2022',
      position: 'Desarrollador Full Stack',
      company: 'Open2000',
      description: 'Completar',
    },
    {
      date: 'Marzo 2019 - Febrero 2021',
      position: 'Consultor BI',
      company: 'S&A Chile',
      description: 'Completar',
    },
  ];
}
