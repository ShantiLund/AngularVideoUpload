import { Component } from '@angular/core';
import { UploadVideoService } from 'src/app/services/uploadVideo/upload-video.service';
import { Router } from '@angular/router';
//import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFile:File=null;
  constructor(private uploadService:UploadVideoService){}
  onFileSelected(event){
    this.selectedFile=<File>event.target.files[0];
    console.log(event.target.files[0].name)  
  }

  upload(){
  
    console.log("Button clicked");
    const formData=new FormData();
    
    formData.append('video',this.selectedFile,this.selectedFile.name)
     this.uploadService.upload(formData).subscribe(res=>{
      console.log(res);
     }  );
}

getVideoLink()
{
  console.log("get Button clicked")
  this.uploadService.getLink().subscribe(res=>{
    console.log(res);
   }  );
}
  }
