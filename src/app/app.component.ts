import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatInputModule, MatFormFieldModule, FormsModule,CommonModule],
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
    private sanitizer: DomSanitizer
  ) {
    this.showVideo = false;
    console.log(this.savedData);
  }

  public onChangeValue(): void {
    this.savedData = JSON.parse(this.rawData);
    this.videoUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(this.savedData.video);
    this.showVideo = true;
    console.log(this.savedData);
  }
}
