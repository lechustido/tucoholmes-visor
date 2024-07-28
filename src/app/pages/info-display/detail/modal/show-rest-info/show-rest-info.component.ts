import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-show-rest-info',
  standalone: true,
  imports: [],
  templateUrl: './show-rest-info.component.html',
  styleUrl: './show-rest-info.component.scss'
})
export class ShowRestInfoComponent {

  public httpData:any;
  public responseContent:any;
  public imgUrl:any;

  public showJson!:string;

  constructor(
    private _sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
   /* this.httpData = data.data;

    if(data.data.response.startsWith('[{')){
      this.responseContent = 'json';
      this.showJson = JSON.parse(data.data.response);
    }else{
      this.responseContent = 'img';
      this.imgUrl = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                 + this.httpData.response);
    }*/
  }
}
