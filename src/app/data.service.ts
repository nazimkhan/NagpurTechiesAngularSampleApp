import { Injectable } from '@angular/core';


@Injectable()
export class DataService {

  constructor() { 
    
  }

  getTechies(){
      return this._getStorage();
  }

  getTechie(id){
    var alltechies = this._getStorage();
    for (var i =0; i < alltechies.length; i++){
      if (alltechies[i].id == id){
          return alltechies[i];
      }
    }

  }

  deletetechie(techie){
    var alltechies = this._getStorage();
    for (var i =0; i < alltechies.length; i++){
      if (alltechies[i].id == techie.id){
         alltechies.splice(i,1);
      }
    }
    if(alltechies.length){
      this._setStorage(alltechies);
    } else {
      localStorage.removeItem('Techies');
    }
    return alltechies;
  }

  updatetechie(techie){
    if(!techie.id){
        this._createNewTechie(techie);
    }
    var alltechies = JSON.parse(localStorage.getItem('Techies'));
      for(var i=0; i < alltechies.length; i++){
        if( alltechies[i].id == techie.id){
          alltechies[i] = techie;
        }
      } 
      this._setStorage(alltechies);
      return alltechies;
  }

  private _setStorage(techies){
    localStorage.setItem('Techies',JSON.stringify(techies));
  }

  private _getStorage(){
    var alltechies = localStorage.getItem('Techies');
    if(alltechies == undefined || alltechies == null){
      this._setStorage(this._initData());
      return this._initData();
    }
    return JSON.parse(localStorage.getItem('Techies'));
  }
  private _createNewTechie(techie){
    if(!techie){
        return;
    }
    var alltechies = JSON.parse(localStorage.getItem('Techies'));
    var maxid = 0;
    alltechies.map(function(obj){     
    if (obj.id > maxid) maxid = obj.id;    
    });
    techie.id = maxid + 1;
    alltechies.push(techie);
    localStorage.setItem('Techies',JSON.stringify(alltechies));
    return alltechies; 
  }
  private _initData(){
    return [
      {
        id: 1,
        name: 'Daenerys Targareyen',
        profession: 'Actress',
        phone: 9090909909,
        image:2,
      },
       {
        id: 2,
        name: 'John Snow',
        profession: 'Actor',
        phone: 9090909909,
        image:3
      },
       {
        id: 3,
        name: 'Tywin Lannister',
        profession: 'Actor',
        phone: 9090909909,
        image:1,
      },
      {
        id: 4,
        name: 'Arya Stark',
        profession: 'Actor',
        phone: 9090909909,
        image:2,
      },
    ];
  }

}
