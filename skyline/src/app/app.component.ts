import { Component } from '@angular/core';
import {ReflectiveInjector, OpaqueToken} from '@angular/core';
import {MandrillService} from './mandrill-service';
import {SendGridService} from './send-grid-service';
import {EmailService} from './email-service';
import {PhoneService} from './phone-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


   constructor() {
    const injector = ReflectiveInjector.resolveAndCreate([MandrillService, SendGridService]);
    const emailService = injector.get(MandrillService);
    console.log(emailService);
     console.log('Injector Caching Example');
     const emailService1 = injector.get(MandrillService);
     const emailService2 = injector.get(MandrillService);
     console.log(emailService1 === emailService2);
     console.log('Injector Caching State Sharing Example');
     emailService1.foo = 'moo';
     console.log(emailService2.foo);
     console.log('Chield Injector Forwards Request to Parent');
     const injector1 = ReflectiveInjector.resolveAndCreate([EmailService]);
     const childInjector = injector1.resolveAndCreateChild([]);
     console.log(injector1.get(EmailService) === childInjector.get(EmailService));
     console.log('Chield Injector Returns Diferent Instance');
     const injector2 = ReflectiveInjector.resolveAndCreate([EmailService]);
     const childInjector2 = injector2.resolveAndCreateChild([EmailService]);
     console.log(injector2.get(EmailService) === childInjector2.get(EmailService));


   }


    }

