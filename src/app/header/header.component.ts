import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:any = ""
  wishlistCount:number = 0

  constructor(private api:ApiService){}

  ngOnInit(): void {
    if(sessionStorage.getItem("user")){
      // we need to parse since it is an object and other requirement while parsing is either it should be string or null thts why || "" is given
      this.username = JSON.parse(sessionStorage.getItem("user") || "").username.split(" ")[0]
      this.api.wishlistCount.subscribe((result:any)=>{
        this.wishlistCount = result
      })
    }else{
      this.username = ""
    }
  }



}
