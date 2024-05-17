import { Component, Input, OnInit } from '@angular/core';
import { ProjectsServiceService } from 'src/app/services/projects/projects-service.service';

@Component({
  selector: 'app-cards-project',
  templateUrl: './cards-project.component.html',
  styleUrls: ['./cards-project.component.scss']
})
export class CardsProjectComponent implements OnInit {
  @Input() titleCard!: string; 
  @Input() technologies!: string[];
  @Input() mainCardImage!: string;
  @Input() descriptions!: string[];
  @Input() video!: string;

  showExpandCard: boolean = false;

  constructor(private projectService: ProjectsServiceService) { }

  ngOnInit(): void {
  }

  handleExpandCard(): void{
    this.showExpandCard = !this.showExpandCard;
    this.projectService.setShowExpandCard(this.showExpandCard);
  }

}
