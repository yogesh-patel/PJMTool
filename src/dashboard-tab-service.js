export class DashboardService {
  constructor() {
  }

  getData(date){
    var data = {highestMW:[{state:"PA",MW:102996.30,MWPercent:30},
                           {state:"NJ",MW:50356.60,MWPercent:15},
                           {state:"VA",MW:42528.20,MWPercent:40},
                           {state:"OH",MW:40951.50,MWPercent:22},
                           {state:"IL",MW:38363.30,MWPercent:45}
                        ],
                highestCount:[{state:"PA",projectCount:275},
                              {state:"NJ",projectCount:270},
                              {state:"VA",projectCount:174},
                              {state:"OH",projectCount:165},
                              {state:"IL",projectCount:113}
                            ],
                totalMW:341332.90,
                totalProject:1289};
    return data;
  }
}
