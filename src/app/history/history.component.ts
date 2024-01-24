import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  dataService = inject(DataService)

  data = this.dataService.getData()

  constructor(){
    console.log("history");
    
  }


  ngOnInit(): void {
      console.log("History refreshed");
  }

}
