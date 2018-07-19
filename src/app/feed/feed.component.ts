import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  articles;


  constructor(private newsService: NewsService) { }

  onGet() {
    this.newsService.getFeed().subscribe(
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

    const currentDate = new Date().getTime();
    const seconds = Math.floor((currentDate - date) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + ' years';
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + ' months';
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + ' days';
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + ' hours';
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + ' minutes';
    }
    return Math.floor(seconds) + ' seconds';
  }


  ngOnInit() {
    this.onGet();
  }

}
