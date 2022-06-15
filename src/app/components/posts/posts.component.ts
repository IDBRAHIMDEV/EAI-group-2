import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  listPosts: any[] = []
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  getPosts() {
    this.postService.getAllPosts().subscribe((data: any) =>  this.listPosts = data)
  }

}
