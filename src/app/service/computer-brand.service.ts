import { Injectable } from '@angular/core';
import { ComputerBrand } from '../model/computer-brand';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../model/survey';

@Injectable({
  providedIn: 'root'
})
export class ComputerBrandService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:10000/survey-api/computer-brands';

  getList(){
    return this.http.get<ComputerBrand[]>(this.url);
  }
}
