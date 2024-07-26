import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {
  IesaTcCommonAngularCompleteTableComponent,
  TableData,
} from 'iesa-tc-common-angular-complete-table-17';
import { ListConstructorService } from './list.constructor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-display-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  standalone: true,
  imports: [CommonModule, IesaTcCommonAngularCompleteTableComponent],
})
export class InfoDisplayListComponent {
  @ViewChild('supplierExpirationTable')
  public vcSupplierExpirationTable!: IesaTcCommonAngularCompleteTableComponent;
  public issuesTableDataTable!: TableData;

  constructor(public constructorService: ListConstructorService,
    private readonly router: Router) {
    this.initIssuesTable();
  }

  //#region Inicialización de librarías comunes
  public initIssuesTable(): void {
    this.issuesTableDataTable =
      this.constructorService.initIssuesListTableData();
  }

  //#endregion Inicialización de librarías comunes

  //#region Callback de librarías comunes

  public getActionButton(event: any): void {
    if(event.action === '1'){
      this.router.navigate(['display-info/detail']);
    }
  }
  //#endregion Callback de librarías comunes
}
