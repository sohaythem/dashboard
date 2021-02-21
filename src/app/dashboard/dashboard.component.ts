import { Component, OnInit } from '@angular/core';
import { LoadDataServiceService } from '../load-data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  records;

  constructor(private service:LoadDataServiceService) { }

  ngOnInit(): void {
    this.service.loadData().subscribe(resp=>{
      console.log(resp);
      this.records=resp['result']['records'];
      console.log(this.records);
    },err=>{
      console.log(err);
    });
  }

}
