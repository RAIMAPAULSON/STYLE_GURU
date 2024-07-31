import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  couponStatus:boolean = false
  couponClickStatus:boolean = false
  allCartItems:any = []
  cartTotalPrice:number = 0

  constructor(private api:ApiService,private tostr:ToastrService,private router:Router){}

  ngOnInit(): void {
   if(sessionStorage.getItem("token")){
    this.getallCartItems()
   }
  }

  getCoupon(){
    this.couponStatus = true
  }

  backToOffers(){
    this.couponStatus = false
  }

  coupon5percent(){
    this.couponClickStatus = true
    let discount = Math.ceil(this.cartTotalPrice*.05)
    this.cartTotalPrice -= discount
  }

  coupon20percent(){
    this.couponClickStatus = true
    let discount = Math.ceil(this.cartTotalPrice*.2)
    this.cartTotalPrice -= discount
  }

  coupon50percent(){
    this.couponClickStatus = true
    let discount = Math.ceil(this.cartTotalPrice*.5)
    this.cartTotalPrice -= discount
  }

  checkout(){
    sessionStorage.setItem("total",JSON.stringify(this.cartTotalPrice))
    this.router.navigateByUrl("/checkout")
  }

  getallCartItems(){
    this.api.getCartAPI().subscribe((result:any)=>{
      this.allCartItems = result
      this.getTotalPrice()
    })
  }

  removeCartItems(id:any){
    this.api.removeCartAPI(id).subscribe((result:any)=>{
      this.getallCartItems()
      this.getTotalPrice()
      this.api.getCartCount()
    })
  }

  getTotalPrice(){
    this.cartTotalPrice = Math.ceil(this.allCartItems.map((item:any)=>item.totalPrice).reduce((p1:any,p2:any)=>p1+p2))
  }

  incrementQuantity(id:any){
    this.api.incrementCartAPI(id).subscribe((res:any)=>{
      this.getallCartItems()
  })
}

  decrementQuantity(id:any){
   this.api.decrementCartAPI(id).subscribe((res:any)=>{
   this.getallCartItems()
   this.api.getCartCount()
})
}
  emptyCart(){
    this.api.emptyCartAPI().subscribe((res:any)=>{
      this.getallCartItems()
      this.api.getCartCount()
  })
}

}