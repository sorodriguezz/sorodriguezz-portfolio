import { Injectable } from '@angular/core';
import { Project } from './interfaces/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly projects: Project[] = [
    {
      id: 1,
      name: 'Login Usuarios',
      description: 'Proyecto que usa Angular, MongoDB y NodeJS para el login de usuarios. La aplicación permite el registro de usuarios, el login y el logout. Los registros quedan guardados en una colección de MongoDB, y el login se realiza con un token enviado por la API. El token se guarda en el localStorage del navegador y se usa para el logout.',
      technologies: ['Angular', 'TypeScript', 'RxJS'],
      image: 'login-users-angular.png',
      link: 'https://github.com/soRodriguezz/auth-app-angular',
    },
    {
      id: 2,
      name: 'Test',
      description: 'Proyecto testsdfs',
      technologies: ['Angular','Angular','Angular'],
      image: '',
      link: 'sasd',
      demo: 'dsds'
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
