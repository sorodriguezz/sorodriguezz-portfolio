import { Component, OnInit } from '@angular/core';
import { Project } from './interfaces/project.model';
import { ProjectService } from './projects.service';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {

  public readonly imageDefault = 'default.jpg';
  projects: Project[] = [];

  constructor(
    private readonly projectService: ProjectService,
    private readonly library: FaIconLibrary
  ) {
    this.library.addIcons(faGithub, faEye);
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}
