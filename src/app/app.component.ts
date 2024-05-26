import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ShowRestInfoComponent } from './modal/show-rest-info/show-rest-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatInputModule, MatFormFieldModule, FormsModule,CommonModule,MatDialogModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public rawData!: any;
  public savedData!: any;
  public videoUrl!: SafeResourceUrl;
  public showVideo: boolean;
  title = 'tucoholmes-visor';

  constructor(
    private sanitizer: DomSanitizer,
    public dialog: MatDialog
  ) {
    this.showVideo = false;
  }

  public onChangeValue(): void {
    this.savedData = JSON.parse(this.rawData);
    this.videoUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(this.savedData.video);
    this.showVideo = true;
  }

  public openDialog(restData:any):void{
    const dialogRef = this.dialog.open(ShowRestInfoComponent,
      {
        width : '50%',
        height : '60%',
        data: {
          data: restData,
        },
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
