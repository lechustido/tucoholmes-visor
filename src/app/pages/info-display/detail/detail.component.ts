import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ShowRestInfoComponent } from './modal/show-rest-info/show-rest-info.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatFormFieldModule, FormsModule,MatInputModule, CommonModule, MatCardModule],
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  public rawData!: any;
  public savedData!: any;
  public videoUrl!: SafeResourceUrl;
  public showVideo: boolean;
  public title = 'tucoholmes-visor';

  constructor(private sanitizer: DomSanitizer, public dialog: MatDialog) {
    this.showVideo = false;
  }

  public onChangeValue(): void {
    this.savedData = JSON.parse(this.rawData);
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.savedData.video
    );
    this.showVideo = true;
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

}
