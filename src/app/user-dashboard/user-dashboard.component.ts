import { Component, AfterViewInit, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TrainersService } from '../shared/trainers.service';
import { ClassesService } from '../shared/classes.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  // @ViewChild('activityChart1', { static: false }) activityChart1: ElementRef;
  // @ViewChild('activityChart2', { static: false }) activityChart2: ElementRef;
  // @ViewChild('activityChart3', { static: false }) activityChart3: ElementRef;
  // @ViewChild('activityChart4', { static: false }) activityChart4: ElementRef;
  // @ViewChild('activityChart5', { static: false }) activityChart5: ElementRef;
  // @ViewChild('activityChart6', { static: false }) activityChart6: ElementRef;

  constructor(public trainerService:TrainersService, public classService:ClassesService ) { }

  ngOnInit(): void {
    this.trainerService.getTrainers();
    this.classService.getClasses();
    // this.initializeChart(this.activityChart1.nativeElement, 1);
    // this.initializeChart(this.activityChart2.nativeElement, 2);
    // this.initializeChart(this.activityChart3.nativeElement, 3);
    // this.initializeChart(this.activityChart4.nativeElement, 4);
    // this.initializeChart(this.activityChart5.nativeElement, 5);
    // this.initializeChart(this.activityChart6.nativeElement, 6);
  }

  // initializeChart(chartElement: HTMLCanvasElement, index: number): void {
  //   var arr = [0, 1, 1, 3, 2, 10, 7, 9, 2, 5, 3, 9, 8, 4, 3, 0];
  //   var backgroundColors = [];
  //   arr.forEach(v => backgroundColors.push("rgba(64, 80, 245, " + v / 10 + ")"))

  //   var data = {
  //     labels: ["06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
  //     datasets: [{
  //       label: 'A',
  //       backgroundColor: backgroundColors,
  //       data: arr,
  //     }]
  //   };

  //   var options = {
  //     responsive: true,
  //     cornerRadius: 0,
  //     maintainAspectRatio: false,
  //     legend: {
  //       display: false,
  //       position: 'bottom',
  //     },
  //     scales: {
  //       yAxes: {
  //         display: false,
  //         gridLines: {
  //           display: false,
  //         },
  //         ticks: {
  //           maxTicksLimit: 5,
  //         }
  //       },
  //       xAxes: {
  //         display: true,
  //         barPercentage: 1,
  //         gridLines: {
  //           display: false,
  //         },
  //         ticks: {
  //           callback: function (item, index) {
  //             if (!(index % 3)) return item;
  //           },
  //           fontColor: '#9c9eb2'
  //         }
  //       }
  //     }
  //   };

  //   var ctx = chartElement.getContext('2d');
  //   new Chart(ctx, {
  //     type: 'bar',
  //     data: data,
  //     options: options
  //   });
  // }

  // closeAlert(): void {
  //   const upgradeAccount = document.querySelector('.upgradeAccount') as HTMLElement;
  //   if (upgradeAccount) {
  //     upgradeAccount.style.display = "none";
  //   }
  // }
}