import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-techie-details',
  templateUrl: './techie-details.component.html',
  styleUrls: ['./techie-details.component.css']
})
export class TechieDetailsComponent implements OnInit {
  techie;
  id:number;
  constructor(private _data: DataService, private _activeRoute : ActivatedRoute, private _router: Router ) { }

  ngOnInit() {
      this._activeRoute.params.subscribe(params => {
              this.id = +params['id']; 
      });
      if(this.id){
        this.techie = this._data.getTechie(this.id);
      } else {
          this.techie =  {};
  }
 }

   update(techie){
      if(this._data.updatetechie(techie)){
        let link = ['techies'];
       this._router.navigate(link);
      }
   }

  goBack(){
       let link = ['techies'];
       this._router.navigate(link);
    }

}
