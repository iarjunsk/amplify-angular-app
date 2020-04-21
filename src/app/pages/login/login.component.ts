import { Component, OnInit, NgZone } from '@angular/core';
import { Auth, Hub } from 'aws-amplify';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private amplifyService: AmplifyService,
    private zone: NgZone,
    private spinner: NgxSpinnerService) {


    // Used for listening to login events
    Hub.listen("auth", ({ payload: { event, data } }) => {
      if (event === "cognitoHostedUI" || event === "signedIn") {
        console.log(event);
        this.zone.run(() => this.router.navigate(['/dashboard']));
      } else {
        this.spinner.hide();
      }
    });

    //currentAuthenticatedUser: when user comes to login page again
    Auth.currentAuthenticatedUser()
      .then(() => {
        this.router.navigate(['/dashboard'], { replaceUrl: true });
      }).catch((err) => {
        this.spinner.hide();
        console.log(err);
      })

  }

  ngOnInit() { }

  onLoginClick() {
    this.spinner.show();
    Auth.federatedSignIn();
  }


  onLoginClickOkta() {
    this.spinner.show();

    Auth.federatedSignIn({
      customProvider: 'OktaWebFlow'
    });
  }

}
