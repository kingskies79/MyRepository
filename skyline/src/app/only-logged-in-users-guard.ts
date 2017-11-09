import {Injectable} from '@angular/core';
import {UserService} from './user-service';
import {CanActivate} from '@angular/router';
@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
    constructor(private userService: UserService) {

    }
    canActivate() {
        console.log('OnlyLoggedInUsersGuard');
        if (this.userService.isLoggedIn()) {
           // window.alert('You  have permission to view this page');
            return true;

        }else {
            window.alert('You dont have permission to view this page');
            return false;
        }
    }
}
