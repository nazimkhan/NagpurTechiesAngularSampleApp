import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-techies-list',
  templateUrl: './techies-list.component.html',
  styleUrls: ['./techies-list.component.css']
})
export class TechiesListComponent implements OnInit {
 techies;
  constructor(private _data: DataService, private _router: Router) { }

  ngOnInit() {
    this.techies = this._data.getTechies();
  }

  removetechie(techie){
      this.techies = this._data.deletetechie(techie);
  }

  goToDetails(techie){
    let link = ['/techie', techie.id];
    this._router.navigate(link);
  }

}
