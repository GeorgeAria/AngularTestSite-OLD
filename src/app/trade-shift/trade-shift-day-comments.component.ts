import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user-data';
import { Comments } from '../shared/comments-data';
import { UserDataService } from '../shared/user-data.service';
import { Posts } from '../shared/posts-data';
import { PostsDataService } from '../shared/posts-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsDataService } from '../shared/comments-data.service';

@Component({
  templateUrl: './trade-shift-day-comments.component.html',
  styleUrls: ['./trade-shift-day-comments.component.css']
})

export class TradeShiftDayCommentsComponent implements OnInit 
{
  imageWidth = 55;
  imageMargin = 2;

  postID: number;
  errorMessage = '';

  users: User[] = [];
  comments: Comments[] = [];
  filteredComments: Comments[] = [];

  //Maybe there's a better way of initializing an interface...
  
  post: Posts;

  constructor(private userDataService: UserDataService, 
              private postsDataService: PostsDataService,
              private commentsDataService:CommentsDataService,
              private router: Router,
              private route: ActivatedRoute) { }

  performFilter(): Comments[] 
  {
    return this.comments.filter((comment: Comments) => comment.postID === this.postID);
  }



  getPost(id: number) {
    this.postsDataService.getPost(id).subscribe({
      next: post => this.post = post,
      error: err => this.errorMessage = err
    });
  }

  returnUserInfo(userId: number, choice: number): string
  {
    for(let i = 0; i < this.users.length; i++)
    {
      if((this.users[i].userId === userId) && (choice === 1))
      {
        return this.users[i].userName;
      }
      else if((this.users[i].userId === userId) && (choice === 2))
      {
        return this.users[i].email;
      }
      else if ((this.users[i].userId === userId) && (choice === 3))
      {
        return this.users[i].imageUrl;
      }
    }
  }

  onBack(): void {
    this.router.navigate(['/tradeShift/'.concat(this.route.snapshot.paramMap.get('id'))]);
  }

  ngOnInit(): void 
  {
    this.userDataService.getUsers().subscribe({

      next: users => {
        this.users = users;
      },

      error: err => this.errorMessage = err
    });

    this.commentsDataService.getComments().subscribe({

      next: comments => {
        this.comments = comments;

        const param = this.route.snapshot.paramMap.get('postID');
        if (param) 
        {
          //The "+" sign in front of "param" converts the string value into a numeric ID.

          const id = +param;
          this.getPost(id);
          this.postID = id;
          this.filteredComments = this.performFilter();
        }
      },

      error: err => this.errorMessage = err
    });
  }
}


