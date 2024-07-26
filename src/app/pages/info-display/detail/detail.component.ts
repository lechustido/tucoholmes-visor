import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ShowRestInfoComponent } from './modal/show-rest-info/show-rest-info.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { SavedIssueData } from './model/saved-issue-data.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatFormFieldModule, FormsModule,MatInputModule, CommonModule, MatCardModule],
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  @ViewChild('videoVC') videoElementCR!: ElementRef<HTMLVideoElement>;
  public rawData!: any;
  public savedData!: SavedIssueData;
  public videoUrl!: SafeResourceUrl;
  public showVideo: boolean;
  public title = 'tucoholmes-visor';
  public markers:any = [
  ]; // Puedes cambiar esto para usar tus datos dinámicos
 
  videoDuration = 0;

  constructor(private sanitizer: DomSanitizer, public dialog: MatDialog) {
    this.showVideo = false;
  }

  public onChangeValue(): void {
    this.savedData = JSON.parse(this.rawData);
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.savedData.video.base64
    );
    console.log(this.savedData)
    this.videoDuration = this.savedData.video.timer;
    this.showVideo = true;
    for (let i = 0; i < this.savedData.consoleLogs.length; i++) {
      let console = this.savedData.consoleLogs[i];
      this.markers.push({
        timer: console.timer,
        label: 'a'
      })
      
    }
  }

  public openDialog(restData: any): void {
    const dialogRef = this.dialog.open(ShowRestInfoComponent, {
      width: '50%',
      height: '60%',
      data: {
        data: restData,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }


  public calculatePosition(timer: number): number {
    return (timer / this.videoDuration) * 100;
  }
}
