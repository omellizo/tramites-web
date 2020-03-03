import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/model/survey';
import { ComputerBrand } from 'src/app/model/computer-brand';
import { ComputerBrandService } from 'src/app/service/computer-brand.service';
import { SurveyService } from 'src/app/service/survey.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/service/validation-service';

@Component({
  selector: 'app-survey-add',
  templateUrl: './survey-add.component.html',
  styleUrls: ['./survey-add.component.css']
})
export class SurveyAddComponent implements OnInit {

  survey = new Survey();
  brands : ComputerBrand[];
  surveyForm: any;
  constructor(private surveyService: SurveyService, private computerBrandService: ComputerBrandService,
    private router : Router, private formBuilder: FormBuilder) { 
      this.surveyForm = new FormGroup({
        documentNumber: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, ValidationService.emailValidator]),
        comments: new FormControl('', Validators.required),
        brand: new FormControl(null, Validators.required)
      });
    }

  ngOnInit(): void {
    this.computerBrandService.getList().subscribe(data => this.brands = data);
  }

  saveSurvey(){
    this.surveyService.createSurvey(this.survey).subscribe(data => {
      alert("Se creo nueva respuesta de Encuesta!!");
      this.router.navigate(['survey-list']);
    });
  }
}
