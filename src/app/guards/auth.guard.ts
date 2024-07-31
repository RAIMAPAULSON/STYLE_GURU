import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService)
  const toaster = inject(ToastrService)
  const router = inject(Router)
  
  if(authService.isLoggedin()){
    return true;
  }else{
    toaster.warning("Operation denied...Please login!!!")
    router.navigateByUrl('/login')
    return false
  }

};
