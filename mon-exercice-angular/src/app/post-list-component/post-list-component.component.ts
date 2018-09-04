import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  dateCreate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      resolve(date);
    }
  );

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreated_at: string;

  constructor() { }

  ngOnInit() {
  }

onLoveIt(){
  this.postLoveIts ++;
}

onDoNotloveIt(){
    this.postLoveIts --;
}

getColor(){
  if(this.postLoveIts > 0)
    return 'green';
  else if (this.postLoveIts < 0)
  return 'darkred';
}

getBackGroundColor(){
  if(this.postLoveIts > 0)
    return '#00800040';
else if (this.postLoveIts < 0)
  return  '#ff000024';
}


}
