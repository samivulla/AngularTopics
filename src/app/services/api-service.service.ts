import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  setTokenData: any;

  constructor(private http: HttpClient) { }


  // get headers() {
  //   const userSessionDetails = this.userService.getUserTokenDetails();
  //   return {
  //     'X-Authorization': userSessionDetails.token.toString(),
  //     'X-Authorization-user': userSessionDetails.userId.toString(),
  //   }
  // }
  // get<U>(moduleName: string, apiNm: string, options = {}) {
  //   const method = 'GET';
  //   const url = `${this.getbaseUrls(moduleName)}${apiNm}`;
  //   return this.http.request<ApiResponse<U> | ArrayBuffer | any>(method, url, {
  //     headers: this.headers,
  //     ...options,
  //   });
  // }

  // post<U>(moduleName: string, apiNm: string, body: any, options = {}, customHeaders = {}) {
  //   const method = 'POST';
  //   const url = `${this.getbaseUrls(moduleName)}${apiNm}`;
  //   return this.http.request<ApiResponse<U> | ArrayBuffer | any>(method, url, {
  //     body,
  //     headers: { ...this.headers, ...customHeaders },
  //     ...options

  //   });
  // }
  // put<U>(moduleName: string, apiNm: string, body: any, options = {}) {
  //   const method = 'PUT';
  //   const url = `${this.getbaseUrls(moduleName)}${apiNm}`;
  //   return this.http.request<ApiResponse<U>>(method, url, {
  //     body,
  //     headers: this.headers,
  //     ...options
  //   });
  // }
  // delete<U>(moduleName: string, apiNm: string, body: any, options = {}) {
  //   const method = 'DELETE';
  //   const url = `${this.getbaseUrls(moduleName)}${apiNm}`;
  //   return this.http.request<ApiResponse<U>>(method, url, {
  //     body,
  //     headers: this.headers,
  //     ...options
  //   });

  setToken(data){
    this.setTokenData = data;
  }

  getToken(){
    return this.setTokenData;
  }

  get(apiNm: string) {
    const method = 'GET';
    return this.http.get(apiNm);
  }
  post(){

  }


}
