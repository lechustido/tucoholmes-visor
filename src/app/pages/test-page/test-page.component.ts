import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UndefinedObjectData } from './models/undefinedObjectData.model';
import { TestPageAccessService } from './test-page.access.service';
import { MatCardModule } from '@angular/material/card';
import { IesaCommonAngularPersistService } from 'iesa-common-angular-persist';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss',
})
export class TestPageComponent {
  public undefinedObject!: UndefinedObjectData;
  constructor(
    private readonly accessService: TestPageAccessService,
    private readonly persister: IesaCommonAngularPersistService) {}

  //#region Llamadas http
  public getBasicData(): void {
    this.accessService.getBasicData();
  }

  public generate400NetworkError(): void {
    this.accessService.generate400NetworkError();
  }

  public generate401NetworkError(): void {
    this.accessService.generate401NetworkError();
  }

  public generate500NetworkError(): void {
    this.accessService.generate500NetworkError();
  }
  //#endregion Llamadas http

  //#region Consola
    public generateConsoleLog(id:number):void{
      if(id === 0){
        console.log('Hola caracola')
      }else if (id === 1){
        console.log('Adiós mejillón')
      }
     
    }

    public setValueToUndefined(): void {
      this.undefinedObject.name = 'Fallo en nombre ';
    }
  //#endregion Consola
 
  //#region Generar LocalStorage
  public generateLocalStorage():void{
    let user:any = {
      name: 'Gonzalo',
      lastName: 'Carmenado',
      age: 30
    }
    this.persister.set('user', user);
  }
  //#endregion Generar LocalStorage
}
