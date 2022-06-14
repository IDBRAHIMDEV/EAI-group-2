import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  title = "Eurafric"

  name = ""
  
  names = ["Mohamed", "Samira", "Walid", "Basma"]

  image = "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://file-uploads.teachablecdn.com/1a87c398761d4629a38126a31a8d93e1/eaa52d6815e44538bcc1068aca541ab7"

  addName() {

    if(!this.name) {
      alert('Please add the name !')
      return
    }

    this.names = [this.name, ...this.names]
    this.name = ""
  }
}
