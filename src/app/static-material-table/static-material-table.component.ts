import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { StaticMaterialTableDataSource } from './static-material-table-datasource';

@Component({
  selector: 'static-material-table',
  template: `
    <div class="mat-elevation-z8">
      <table mat-table #table [dataSource]="dataSource" matSort aria-label="Elements">

         <!-- Id Column -->
      <ng-container matColumnDef="primary" >
                <th mat-header-cell *matHeaderCellDef>Primary </th>
                <td mat-cell *matCellDef="let element;">
                    <mat-radio-button (click)="primaryClick(element)"
                   [checked]="primaryContact.id == element.id" ></mat-radio-button>
                </td>
       </ng-container>

        <!-- Id Column -->
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>
          <td mat-cell *matCellDef="let row">{{row.id}}</td>
        </ng-container>

          <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
          <td mat-cell *matCellDef="let row">{{row.name}}</td>
        </ng-container>


      

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>

      <mat-paginator #paginator
        [length]="dataSource.data.length"
        [pageIndex]="0"
        [pageSize]="10"
        [pageSizeOptions]="[25, 50, 100, 250]">
      </mat-paginator>
    </div>
  `,
  styles: []
})
export class StaticMaterialTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: StaticMaterialTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','primary'];
  primaryContact={primary:false,id: 1, name: 'Hydrogen'};
  ngOnInit() {
    this.dataSource = new StaticMaterialTableDataSource(this.paginator, this.sort);
  }
  primaryClick(element){
    this.primaryContact=element;
    console.log(this.primaryContact.name)
  }
}
