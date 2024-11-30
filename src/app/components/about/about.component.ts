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
      company: 'Parque del Recuerdo',
      description: [
        'Lideré equipos de desarrollo utilizando metodologías ágiles, enfocándome en la eficiencia y calidad del software. Me encargué de garantizar la calidad del código en cada merge request generado por el equipo y de explorar alternativas de soluciones para los problemas presentados durante el desarrollo, así como de evaluar la factibilidad técnica de los proyectos.',
      ],
    },
    {
      date: 'Febrero 2021 - Noviembre 2022',
      position: 'Desarrollador Full Stack',
      company: 'Parque del Recuerdo',
      description: [
        'Implementé interfaces de usuario dinámicas en Angular y jQuery, incluyendo sistemas de ingreso seguros y herramientas de cambio de contraseña, integradas con Google reCaptcha v3. Además, construí y gestioné la seguridad de aplicaciones internas utilizando Angular v12 y desarrollé servicios RESTful en NestJS, manejando la autenticación y autorización mediante LDAP y Azure Blob Storage.',
      ],
    },
    {
      date: 'Marzo 2019 - Febrero 2021',
      position: 'Consultor BI',
      company: 'S&A Chile',
      description: ['Apoyé la transición de Oracle Database de la versión 11g a 12c en ABCDin, gestionando respaldos y la implementación de nuevos agentes de monitoreo. Coordiné la migración y actualización de IBM SPSS Modeler para Sinacofi, asegurando compatibilidad con Python 3.0 e integración con LDAP. También trabajé en la integración de IBM Cognos Analytics para Entel, facilitando la conexión con servidores y bases de datos MongoDB para una transición fluida y operativa. Además, apoyé la migración de IBM DataStage y la actualización de la base de datos IBM DB2 en ABCDin, adaptando los ETL y conexiones de base de datos a nuevos estándares.'],
    },
  ];
}
