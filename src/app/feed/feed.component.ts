import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import * as moment from 'moment';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  articles;


  constructor(private newsService: NewsService) { }

  onGet() {
    this.newsService.getPopular().subscribe(
      (response) => {
        this.articles = response.articles;

        console.log(this.articles);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  timeSince(date) {
    return moment(date).fromNow();        // 10 hours ago
  }


  ngOnInit() {
    this.onGet();
  }

}
