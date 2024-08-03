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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  IesaTcCommonAngularModalWindowComponent,
  IesaTcCommonAngularModalWindowModule,
  ModalWindowsDataModel,
} from 'iesa-tc-common-angular-modal-window';
import { DetailConstructorService } from './detail.constructor.service';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    IesaTcCommonAngularModalWindowModule,
    NgxJsonViewerModule
  ],
  providers: [DetailConstructorService],
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  @ViewChild('videoVC') videoElementCR!: ElementRef<HTMLVideoElement>;
  @ViewChild('modalWindowInput')
  public htppModalCR!: IesaTcCommonAngularModalWindowComponent;
  public httpModalDataObject!: ModalWindowsDataModel;
  public rawData!: any;
  public savedData!: SavedIssueData;
  public videoUrl!: SafeResourceUrl;
  /**
   * Indica si el video se ha descompilado correctamente y se muestra el video (permite mostrar tambien el resto de elementos de la ventana)
   * @type {boolean}
   * @memberof DetailComponent
   */
  public showVideo: boolean;
  public markers: any = [];
  /**
   * Permite saber en que segundo se encuentra el video para aplicar el filtro "Sincronizado"
   * @type {number}
   * @memberof DetailComponent
   */
  public currentTimeVideo: number;
  /**
   * Indica si todos los datos mostrados se muestran de golpe o si van apareciendo según el video avance
   *
   * @type {boolean}
   * @memberof DetailComponent
   */
  public sincFilterActive: boolean;

  videoDuration = 0;

  constructor(
    private sanitizer: DomSanitizer,
    public dialog: MatDialog,
    public constructorService: DetailConstructorService
  ) {
    this.showVideo = false;
    this.currentTimeVideo = 0;
    this.sincFilterActive = false;
    this.initHttpDataModal();
  }

  //#region Inicialización de librerías comunes
  public initHttpDataModal(): void {
    this.httpModalDataObject = this.constructorService.initHttpDataModal();
  }
  //#endregion Inicialización de librerías comunes

  //#region Funciones comunes
  public generateMarkersData(): void {
    for (let i = 0; i < this.savedData.consoleLogs.length; i++) {
      let console = this.savedData.consoleLogs[i];
      this.markers.push({
        timer: console.timer,
        label: 'c',
      });
    }
    for (let i = 0; i < this.savedData.consoleError.length; i++) {
      let consoleError = this.savedData.consoleError[i];
      this.markers.push({
        timer: consoleError.timer,
        label: 'e',
      });
    }
    for (let i = 0; i < this.savedData.requests.length; i++) {
      let requests = this.savedData.requests[i];
      this.markers.push({
        timer: requests.timer,
        label: 'h',
      });
    }
  }

  seekTo(timer: number): void {
    this.videoElementCR.nativeElement.currentTime = timer;
    this.videoElementCR.nativeElement.play();
  }

  public onTimeUpdate(): void {
    this.currentTimeVideo = this.videoElementCR.nativeElement.currentTime;
    // Aquí puedes realizar cualquier acción adicional con el tiempo actual
  }

  public onChangeValue(): void {
    this.savedData = JSON.parse(this.rawData);
    console.log(this.savedData)
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.savedData.video.base64
    );
    this.videoDuration = this.savedData.video.timer;
    this.showVideo = true;
    this.generateMarkersData();
  }

  public calculatePosition(timer: number): number {
    return (timer / this.videoDuration) * 100;
  }

  public openHttpDataDialog(restData: any): void {
    if (this.httpModalDataObject !== undefined) {
      if (this.httpModalDataObject.configurationPredefinedStyles) {
        this.httpModalDataObject.configurationPredefinedStyles.modalData =
          restData;
      }
      this.htppModalCR.openIesaModal();
    }
  }
  //#endregion Funciones comunes
}
