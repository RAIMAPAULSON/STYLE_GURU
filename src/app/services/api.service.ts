import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  wishlistCount = new BehaviorSubject(0)
  server_url = "http://localhost:3000"
  constructor(private http:HttpClient) {
    if(sessionStorage.getItem("token")){
      this.getWishlistCount()
    }
   }
 
  getAllProductsAPI(){
    return this.http.get(`${this.server_url}/all-products`)
  }

  viewProductAPI(id:any){
    return this.http.get(`${this.server_url}/${id}/view-product`)
  }
  registerAPI(user:any){
    return this.http.post(`${this.server_url}/register`,user)
  }
  loginAPI(user:any){
    return this.http.post(`${this.server_url}/login`,user)
  }
  // append token to http header
  appendToken(){
    const token = sessionStorage.getItem("token")
    let headers = new HttpHeaders()
    if(token){
      headers = headers.append("Authorization",`Bearer ${token}`)
    }
    // as object we should return
    return {headers}
  }

  addToWishlistAPI(product:any){
    return this.http.post(`${this.server_url}/addToWishlist`,product,this.appendToken())

  }

  getWishlistAPI(){
    return this.http.get(`${this.server_url}/get-wishlist`,this.appendToken())

  }
  
  getWishlistCount(){
    this.getWishlistAPI().subscribe((result:any)=>{
      // here result is array
      this.wishlistCount.next(result.length)
    })
  }

  removeWishlistAPI(id:any){
    return this.http.delete(`${this.server_url}/wishlist/${id}/remove`,this.appendToken())

  }



  

}
