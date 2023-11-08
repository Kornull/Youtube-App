import { Injectable } from '@angular/core';

import { LocalStorageService } from '../localStorage/local-storage.service';
import { UserData } from '../../store';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: UserData = {
    email: localStorage.getItem('youtube-user-login') || '',
    password: '',
  };

  constructor(private localStorageService: LocalStorageService) {}

  createUser({ email, password }: UserData) {
    this.user = {
      email,
      password,
    };
  }

  getLog(): boolean {
    if (this.localStorageService.getToken()) {
      return true;
    }
    return false;
  }

  getUserLogin() {
    if (this.getLog()) {
      const userLogin = this.user.email.split('@')[0];
      return userLogin.length > 8 ? `${userLogin.slice(0, 5)}...` : userLogin;
    }
    return 'Your Name';
  }
}
