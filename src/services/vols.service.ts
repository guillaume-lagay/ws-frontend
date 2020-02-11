import { RestService } from './rest.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vol } from 'src/models/Vol';
import { isArray } from 'util';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class VolService extends RestService {

    constructor(protected http: HttpClient) {
        super(http);
       }
      
       public getVols(): Observable<Vol[]> {
        return new Observable<Vol[]>(observer => {
          this.http.get<any>('http://localhost:8081/vols', {}).subscribe(result => {
            const vols: Vol[] = [];
            if (result && isArray(result)) {
              for (const vol of result) {
                console.log(vol);
                vols.push(vol as Vol);
              }
            }
            observer.next(vols);
            observer.complete();
          }, error => {
            observer.error(error);
            observer.complete();
          });
        });
      }
}