import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js'; 
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-manage-listings',
  templateUrl: './manage-listings.component.html',
  styleUrls: ['./manage-listings.component.scss']
})
export class ManageListingsComponent implements OnInit {
  
 propertydashboardlist:any=[
   {active:'0',Inactive:'0',Draft:'0',All:'0',Sale:'0',Rent:'0'}
 ];
// chart
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true; 
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ]; 
  //progessbar
  max = 100;
  showWarning?: boolean;
  dynamic = 0;
  type: 'success' | 'info' | 'warning' | 'danger' = 'info';
  constructor() { 
    this.random();
  }
  random(): void {
    const value = Math.floor(Math.random() * 100 + 1);
    let type: 'success' | 'info' | 'warning' | 'danger';
 
    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }
 
    this.dynamic = value;
    this.type = type;
  }
  ngOnInit(): void {
  }

}
