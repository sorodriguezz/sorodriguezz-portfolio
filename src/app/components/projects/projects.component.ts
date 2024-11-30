import { Component, OnInit } from '@angular/core';
import { Project } from './interfaces/project.model';
import { ProjectService } from './projects.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  constructor(private readonly projectService: ProjectService) {}
  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}