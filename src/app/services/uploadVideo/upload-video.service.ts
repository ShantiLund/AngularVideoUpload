import { Injectable } from '@angular/core';
import { UrlSettings } from 'src/app/core/utilities/utils';
import { map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadVideoService {
 private baseurl:string=UrlSettings.baseURL;

  constructor(public http:HttpClient){}
   
  public upload(payload):Observable<any>{
    return this.http.post(this.baseurl+'/upload/video', payload).pipe(map((res) => {
      console.log("Response success");
      return res;
    }, err => {
      console.log("Response error");
      return err;
    }));
  }
}
