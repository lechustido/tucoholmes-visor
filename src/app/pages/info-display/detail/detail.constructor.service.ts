
import { Injectable } from '@angular/core';
import { ModalPositionModel, ModalWindowsDataModel, PredefinedStylesModel, cssModalModel } from 'iesa-tc-common-angular-modal-window';
import { ShowRestInfoComponent } from './modal/show-rest-info/show-rest-info.component';

@Injectable({
  providedIn: 'root',
})
export class DetailConstructorService {
  constructor() {
  }

  public initHttpDataModal(): ModalWindowsDataModel {
    let modalDataObject = new ModalWindowsDataModel();
    modalDataObject.predefinedClassModal = 'lateralWindow';
    modalDataObject.showXButton = true; 
    modalDataObject.cssModal = new cssModalModel();
    modalDataObject.cssModal.modalHeight = '100%';
    modalDataObject.cssModal.modalWidth = '60%';
    modalDataObject.cssModal.modalPosition = new ModalPositionModel();
    modalDataObject.cssModal.modalPosition.left = '40%';
    modalDataObject.configurationPredefinedStyles = new PredefinedStylesModel();
    modalDataObject.configurationPredefinedStyles.title = 'Título de mi componente';
    modalDataObject.configurationPredefinedStyles.component = ShowRestInfoComponent;
    modalDataObject.configurationPredefinedStyles.modalData = { nombre: 'Gonzalo' }
    return modalDataObject;
  }
}


