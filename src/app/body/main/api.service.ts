import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'blob' })
};
 
@Injectable()
export class ApiService {
    api: string = `https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg`
    imageToShow: any;

    constructor(private http:HttpClient) {}
 
//      getOne() {
//         return this.http.get(this.api,{ responseType: 'blob' });
//     }

//     getAll(id){
//   return this.http.get(`${this.api}/${id}`)
//     }

// createImageFromBlob(image: Blob) {
//    let reader = new FileReader();
//    reader.addEventListener("load", () => {
//       this.imageToShow = reader.result;
//    }, false);

//    if (image) {
//       reader.readAsDataURL(image);
   

}