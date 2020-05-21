import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicClubService {

  constructor(
    private httpService: HttpService,
  ) { }

  getClubs():Observable<any>{
    return this.httpService.get('/public/clubs');
  }

}
