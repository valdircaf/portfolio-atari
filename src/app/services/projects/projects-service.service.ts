import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Project } from 'src/app/interface/Project';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {
  showExpandCard: boolean = false;
  private statusShowExpandCard = new BehaviorSubject<boolean>(this.showExpandCard);

  constructor(private http: HttpClient) { 
  }

  setShowExpandCard(value: boolean){
    this.statusShowExpandCard.next(value);
  }

  getShowExpandCard(): BehaviorSubject<boolean> {
    return this.statusShowExpandCard;
  }

  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(`${environment.apiUrl}projects`)
  }

}
