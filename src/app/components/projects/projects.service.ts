import { Injectable } from '@angular/core';
import { Project } from './interfaces/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly projects: Project[] = [
    {
      id: 1,
      name: 'Proyecto Futurista',
      description: 'Un proyecto innovador que utiliza tecnología de punta.',
      technologies: ['Angular', 'TypeScript', 'CSS3'],
      image:
        'https://img.freepik.com/vector-gratis/ilustracion-concepto-abstracto-inicio-proyecto-documentacion-proyecto-analisis-comercial-vision-alcance-determinacion-metas-asignacion-tareas-marco-tiempo-cronograma_335657-98.jpg',
      link: 'https://example.com/proyecto1',
    },
    {
      id: 2,
      name: 'Aplicación Avanzada',
      description: 'Aplicación web con funcionalidades avanzadas.',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      image:
        'https://img.freepik.com/vector-gratis/ilustracion-concepto-abstracto-inicio-proyecto-documentacion-proyecto-analisis-comercial-vision-alcance-determinacion-metas-asignacion-tareas-marco-tiempo-cronograma_335657-98.jpg',
      link: 'https://example.com/proyecto2',
    },
    // Agrega más proyectos según sea necesario
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
