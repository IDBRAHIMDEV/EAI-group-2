import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  urlApi = "http://localhost:3000/posts"

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get(this.urlApi)
  }

  persistPost(data: any) {
    return this.http.post(this.urlApi, data)
  }

  updatePost(data: any, id: number) {
    return this.http.put(`${this.urlApi}/${id}`, data)
  }

  deletePost(id: number | undefined) {
    return this.http.delete(`${this.urlApi}/${id}`)
  }

}
