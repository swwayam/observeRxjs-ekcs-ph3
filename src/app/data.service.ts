import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // data
  data : any[] = []

  constructor() { }


  getData(){
    return this.data
  }

  setData(value:any){
    this.data.push(value)
  }
}
