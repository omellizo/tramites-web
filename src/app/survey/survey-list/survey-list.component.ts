import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/model/survey';
import { SurveyService } from 'src/app/service/survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  surveys: Survey[];
  constructor(private surveyService: SurveyService, private router:Router) { }

  ngOnInit(): void {
    this.surveyService.getList().subscribe(data => {
      this.surveys = data
    });
  }

  newSurvey(){
    this.router.navigate(['survey-add']);
  }

  deleteSurvey(survey: Survey){
    this.surveyService.deleteSurvey(survey).subscribe(data => {
      this.surveys = this.surveys.filter(s => s != survey);
      alert("Respuesta de encuesta eliminada con exito!!");
    });
  }
}
