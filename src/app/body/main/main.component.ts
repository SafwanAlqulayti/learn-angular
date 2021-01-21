import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public image
  // constructor(private _apiService: ApiService) { 
  //   this._apiService.getOne().subscribe(async data  =>{
  //    await this._apiService.createImageFromBlob(data)
  //  console.log(this.image)
  //   },err => {
  //     console.log(err)
  //   }
  //   )
  // }

  ngOnInit(): void {
    
  }

}
