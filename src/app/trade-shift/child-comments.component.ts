import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ChildCommentsDataService } from '../shared/child-comments-data.service';
import { ChildComments } from '../shared/child-comments-data';
import { UserDataService } from '../shared/user-data.service';
import { User } from '../shared/user-data';

@Component({
  selector: 'pm-child-comments',
  templateUrl: './child-comments.component.html',
  styleUrls: ['./child-comments.component.css']
})
export class ChildCommentsComponent implements OnChanges {
  
  constructor(private userDataService: UserDataService, 
              private childCommentsDataService: ChildCommentsDataService) { }
  
  @Input() commentID = 0;

  imageWidth = 55;
  imageMargin = 2;
  
  childComments: ChildComments[] = [];
  users: User[] = [];
  errorMessage = '';

  showComments = false;

  //@Output() ratingClicked: EventEmitter<string> =
  // new EventEmitter<string>();

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

  toggleComments(): void {
    this.showComments = !this.showComments;
  }

  ngOnChanges(): void 
  {
    this.childCommentsDataService.getChildComments().subscribe({

      next: childComments => {
        this.childComments = childComments.filter((childComment: ChildComments) => childComment.commentID === this.commentID);
        if(this.childComments.length === 1)
        {
          this.showComments = !this.showComments;
        }
      },

      error: err => this.errorMessage = err
    });

    this.userDataService.getUsers().subscribe({

      next: users => {
        this.users = users;
      },

      error: err => this.errorMessage = err
    });
  }

  /*onClick(): void 
  {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }*/
}
