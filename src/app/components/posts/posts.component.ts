import { Post } from './../../models/post';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  listPosts: any[] = []

  edit = false

  status = 'table'

  myId: number = 0

  myPost: any = {
    title: "",
    body: ""
  } 
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.postService.getAllPosts().subscribe((data: any) => {
      console.log(data)
      this.listPosts = data
    })
  }

  addPost(myForm: any) {

    if(myForm.invalid) {
      alert('Please check the data in your form !')
      return
    }

    console.log(myForm)
    this.postService.persistPost(myForm.value).subscribe((data: any) => this.listPosts = [data, ...this.listPosts])
  }


  editPost(data: any) {

    let {title, body} = data

    this.myPost = {
      title, 
      body
    }

    this.myId = data.id
    this.edit = true
  }

  updateOnePost() {
    
    this.postService.updatePost(this.myPost, this.myId).subscribe(() => {
      this.getPosts()
      this.edit = false
    })
  }

  destroyPost(id: number | undefined) {
    
    this.postService.deletePost(id).subscribe(() => this.listPosts = this.listPosts.filter((post: any) => post.id !== id))
  }

  changeStatus(status: string) {
    this.status = status
  }

  listenSignal(data: Post) {
    this.destroyPost(data.id)
  }

  
  info(data: any) {
    console.log(data)
  } 

}
