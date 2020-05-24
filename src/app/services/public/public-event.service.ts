import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class PublicEventService {

  constructor(private httpService: HttpService) { }

  getEvents():Observable<any>{
    return this.httpService.get('/public/event-with-club/');
  }

  getAnEvent(id: string):Observable<any>{
    return this.httpService.get(`/public/event-with-club/${id}`);
  }

}
