import {DashboardService} from './dashboard-tab-service';
import {inject} from 'aurelia-framework';

@inject(DashboardService)
export class dashboardTab {
  constructor(dashboardService) {
    this.dateValue = null;
    this.dashboardService = dashboardService;
    this.pageData  = this.dashboardService.getData($(".datepicker").val());
    this.loginFlag = false;
  }

  attached() {
    for (let val of this.pageData.highestMW) {
            console.log("pd"+val.MWPercent);
            this.renderProgress(val.MWPercent,val.state)
    }

    $(".datepicker").datepicker("setDate", new Date());

    // $(".datepicker").datepicker({
    //     setDate : new Date(),
    //     autoclose: true
    // });
  }

 renderProgress(progress,state)
 {
    console.log("pd"+progress);
    progress = Math.floor(progress);
    if(progress<25){
        var angle = -90 + (progress/100)*360;
        $("#animate-0-25-b_"+state).css("transform","rotate("+angle+"deg)");
    }
    else if(progress>=25 && progress<50){
        var angle = -90 + ((progress-25)/100)*360;
        $("#animate-0-25-b_"+state).css("transform","rotate(0deg)");
        $("#animate-25-50-b_"+state).css("transform","rotate("+angle+"deg)");
    }
    else if(progress>=50 && progress<75){
        var angle = -90 + ((progress-50)/100)*360;
        $("#animate-25-50-b+"+state+", #animate-0-25-b_"+state).css("transform","rotate(0deg)");
        $("#animate-50-75-b").css("transform","rotate("+angle+"deg)");
    }
    else if(progress>=75 && progress<=100){
        var angle = -90 + ((progress-75)/100)*360;
        $("#animate-50-75-b_"+state+", #animate-25-50-b_"+state+", #animate-0-25-b_"+state)
                                              .css("transform","rotate(0deg)");
        $("#animate-75-100-b_"+state).css("transform","rotate("+angle+"deg)");
    }
  }

  mychangedatefunction(){
    console.log($(".datepicker").val());
    this.loginFlag = true;
    var interval = setInterval(()=>{
      clearInterval(interval);
      this.pageData  = this.dashboardService.getData($(".datepicker").val());
      for (let val of this.pageData.highestMW) {
              console.log("pd"+val.MWPercent);
              this.renderProgress(val.MWPercent,val.state)
      }
      this.loginFlag = false;
    },1000);
  }

}
