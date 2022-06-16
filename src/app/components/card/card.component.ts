import { Post } from './../../models/post';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() post: Post = {
    id: 0,
    title: "",
    body: ""
  }

  @Output() delete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  deletePost() {

    let data: Post = {
        ...this.post
    }

    this.delete.emit(data)
  }

}
