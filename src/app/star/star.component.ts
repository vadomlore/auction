import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnInit {

  @Input() rating:number=0;

  private stars: Array<number>

  constructor() { }
  ngOnInit() {
    this.stars = []
    this.starNumberToStar()
  }

  starNumberToStar(){
    var counter = 0;
    for(var i = 0; i < Math.floor(this.rating) % 6; i++){
      this.stars.push(1)
      counter++;
    }
    let decimal = this.rating - Math.floor(this.rating)
    if (decimal > 0) {
      this.stars.push(0.5)
      counter++;
    }
    for(var i = 0; i < 5 - counter; i++){
      this.stars.push(0)
    }
  }
}
