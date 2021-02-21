import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadDataServiceService {

  constructor(private http:HttpClient) { }

  loadData(){
    return this.http.jsonp("http://www.agridata.tn/api/3/action/datastore_search?resource_id=2f974d26-e594-410b-9e61-b63e35e81912","callback");
  }
}

