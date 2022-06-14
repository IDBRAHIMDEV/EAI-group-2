import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myCourse = {
    title: "",
    content: "",
    image: "",
    price: 0
  }

  courses = [
    {
      id: '1', 
    title: "Learn Angular", 
    price: 12, 
    content:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500", 
    image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://file-uploads.teachablecdn.com/cca285a18117487ba701db121230c4e1/5ef2e70506b54ecd9f53dbff991d91a1"
  },
    {
      id: '2', 
    title: "Learn React", 
    price: 33, 
    content:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500", 
    image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://file-uploads.teachablecdn.com/a7ec1b20ff814946a9e7096aaa2ad3e1/93f2bb33ff854b5998594b3fe2d9c96a"
  },
    {
      id: '3', 
    title: "Learn Python", 
    price: 67, 
    content:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500", 
    image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://file-uploads.teachablecdn.com/315ce4a97fc04f4b9565ab2d0e9a00e1/187e1fe69ae84eada3b213cf2b632514"
  },
  {
    id: '4', 
  title: "Learn Django", 
  price: 67, 
  content:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500", 
  image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://file-uploads.teachablecdn.com/1a87c398761d4629a38126a31a8d93e1/eaa52d6815e44538bcc1068aca541ab7"
}
  ]


  deleteCourse(id: any) {

    Swal.fire({
      title: 'Are you sure to delete ?',
      text: "you want delete this course ?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {

        this.courses = this.courses.filter(course => course.id != id)

        Swal.fire({
          title: 'Deleted!',
          text:'Course has been deleted.',
          icon: 'success',
          timer: 3000
        })
      }
    })

   
      
    

  }

}