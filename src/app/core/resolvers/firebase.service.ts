import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

export const FirebaseResolver: ResolveFn<any[]> = () => {
  return inject(FirebaseService).getData('ingenieria');
};