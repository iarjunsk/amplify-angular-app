import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { HttpStatusCode } from 'src/app/utility/HttpStatusCode';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService,
              private spinner: NgxSpinnerService) { }


  message: string;


  ngOnInit() {

    this.spinner.show();
    
    this.fetchMessage()
  }

  fetchMessage(){
    this.dashboardService.fetch().subscribe((res: any) => {

      if (res.status == HttpStatusCode.HTTP_OK) {
        this.message = res.body.message;
      }
      this.spinner.hide();

    }, err => {
      this.spinner.hide();
      console.log(err);
    });

  }



}
