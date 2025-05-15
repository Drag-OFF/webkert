import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = () => {
  // Itt lehetne egy valódi auth check, most csak true/false
  const isLoggedIn = !!localStorage.getItem('user');
  return isLoggedIn;
};