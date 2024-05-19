import { Component, OnInit, ViewChild } from '@angular/core';
import { CardsProjectComponent } from 'src/app/components/cards-project/cards-project.component';
import { Project } from 'src/app/interface/Project';
import { ProjectsServiceService } from 'src/app/services/projects/projects-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects!: Project[];
  showExpandCard!: boolean;
  showContainer: boolean = false;
  @ViewChild(CardsProjectComponent) cardComponent!: CardsProjectComponent;
  
  constructor(private projectService: ProjectsServiceService) {   
  }
  
  ngOnInit(): void {
    this.projectService.getShowExpandCard().subscribe(value => {
      this.showExpandCard = value;
    });

    this.getProjects();
  }

  ngAfterViewInit(): void {
  }

  getProjects(): void{
    this.projectService.getProjects().subscribe(project => {
      this.projects = project;
      this.showContainer = true;
    })
  }

  handleKeyPress(event: KeyboardEvent) {
    console.log(event.key);
  }
}
