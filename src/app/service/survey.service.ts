import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../model/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:10000/survey-api/surveys';

  getList(){
    return this.http.get<Survey[]>(this.url);
  }

  createSurvey(survey:Survey){
    return this.http.post<Survey>(this.url, survey);
  }

  deleteSurvey(survey:Survey){
    return this.http.delete<Survey>(this.url + "/" + survey.id);
  }
}
