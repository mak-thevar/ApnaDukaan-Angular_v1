import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  constructor(private postService: PostService){}

  posts:Post[] = [{
    id:1,
    body : "Sample",
    title : "Test",
    userId : 2
  }];
  
  loadPost(){
    this.postService.fetchPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

}
