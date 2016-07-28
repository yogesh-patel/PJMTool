import {Router} from 'aurelia-router';
import {required} from 'aurelia-validatejs';

export class Login {

  static inject() { return [Router]; }

  constructor(router){
    this.theRouter = router;
    this.userName = null;
    this.password = null;
    this.loginFlag = false;
  }

  submit() {
    this.loginFlag = true;
    var interval = setInterval(()=>{
      clearInterval(interval);
      if(this.userName==='admin' && this.password==='admin'){
        this.theRouter.navigate("dashboard");
        this.loginFlag = false;
      }else {
        this.loginFlag = false;
      }

    },1000);
  }
}
