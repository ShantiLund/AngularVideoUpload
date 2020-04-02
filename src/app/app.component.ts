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
   videoName="";
  constructor(private uploadService:UploadVideoService){}
  onFileSelected(event){
    this.selectedFile=<File>event.target.files[0];
    console.log(event.target.files[0].name)  
  }

  upload(){
  
    console.log("Button clicked");
    
    const formData=new FormData();
    const name=this.selectedFile.name;
    //console.log(name)
    formData.append('link',this.selectedFile,this.selectedFile.name)
      formData.append('name',this.selectedFile.name)
     this.uploadService.upload(formData).subscribe(res=>{
      console.log(res);
     }  );
}

getVideoLink()
{
  //console.log("File name is"+this.selectedFile.name);
  let payload = {
    name: this.selectedFile.name
  }
  
  
  this.uploadService.getLink(payload).subscribe(res=>{
    console.log(res);
   }  );
}
  }
