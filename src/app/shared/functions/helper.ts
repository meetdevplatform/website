import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})

export class HelperFunctions {

getYearList(numberOfYears:number,startYear:number = 0,future = true){

    let yearList:number[] = [];
    let year;

    if(!startYear){
        year = new Date().getFullYear();
    }
    else year = startYear;
    
    if(future){
        for(let i=0;i<numberOfYears;i++)
        yearList.push(year+i);
    }
    else{
        for(let i=0;i<numberOfYears;i++)
        yearList.push(year-i);
}

return yearList;
    
}
}