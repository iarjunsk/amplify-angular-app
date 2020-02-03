import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: '<region>',
    userPoolId: '<userpool-id>',
    userPoolWebClientId: '<client-id>',
    oauth: {
      domain: '<domain>.auth.eu-west-1.amazoncognito.com',
      scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      redirectSignIn: 'https://<cloudfront>/login',
      redirectSignOut: 'https://<cloudfront>/login',
      responseType: 'code',
      options: {
        AdvancedSecurityDataCollectionFlag: true
      }
    }
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
