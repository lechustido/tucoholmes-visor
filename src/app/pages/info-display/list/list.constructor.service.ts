import { Injectable } from '@angular/core';
import {
  TableData,
  TableDataSourceModeModel,
} from 'iesa-tc-common-angular-complete-table-17';

@Injectable({
  providedIn: 'root',
})
export class ListConstructorService {
  constructor() {
  }

  public initIssuesListTableData(): TableData {
    let issuesTableData = new TableData();
    this.setGeneralTableProperties(issuesTableData);
    this.generateColumnsTable(issuesTableData);

    return issuesTableData;
  }

  public setGeneralTableProperties(issuesTableData: TableData): void {
    issuesTableData.scssTableClass = 'tableFiltersHe';
    issuesTableData.dataSourceMode = new TableDataSourceModeModel();
    issuesTableData.dataSourceMode.dataOrigin = 1;
    issuesTableData.generalTableClass = 'form';
    issuesTableData.adaptativeHeight = false;
    issuesTableData.infiniteScroll = true;
    issuesTableData.automaticBackTranslations = true;
    issuesTableData.unitTestId = 4;
  }

  public generateColumnsTable(issuesTableData: TableData): void {
    issuesTableData.tableColumns = [
      {
        columName: 'license',
        columLabel: 'Licencia',
        columType: 'string',
      },
      {
        columName: 'user',
        columLabel: 'Usuario',
        columType: 'string',
      },
      {
        columName: 'date',
        columLabel: 'Fecha de alta',
        columType: 'dateCommon',
        columTypeDataDate: {
          customEndDate: 'DD-MM-YYYY',
          outlookFormat: false,
        },
      },
      {
        columName: '',
        columLabel: '',
        columType: 'acButton',
        cellStyle: { 'text-align': 'right' },
        width: 70,
        id: 5,
        modalData: {
          icon: 'settings',
          buttons: [
            {
              text: 'Ver incidencia',
              icon: 'remove_red_eye',
              action: '1',
            },
          ]
        }
      },
    ];
    //TODO: Eliminar al tner una api
    issuesTableData.tableRowsModel = [
      {
        license: '252998',
        user: 'Gonzalo Carmenado',
        date: '17-08-2024',
      },
      {
        license: '256498',
        user: 'Daniel Alvarez',
        date: '11-02-2023',
      },
      {
        license: '252998',
        user: 'Gonzalo Carmenado',
        date: '01-12-2023',
      },
      {
        license: '234534',
        user: 'Pepe Manuel',
        date: '24-06-2024',
      },
      {
        license: '252998',
        user: 'Gonzalo Carmenado',
        date: '17-11-2023',
      },
    ];
  }
}
