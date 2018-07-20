import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import * as moment from 'moment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  articles;
  pageSize = 15;
  page = 1;
  public query = '';
  collectionSize;

  constructor(private newsService: NewsService) { }

  getNews() {
    this.newsService.fetchNews(this.pageSize, this.page, this.query).subscribe(
      (response) => {
        this.articles = response.articles;
        this.collectionSize = response.totalResults;
        console.log(this.articles);
      },
      (error) => {
        console.error(error);
      });
  }

  search(form) {
   this.query = form.value.query;
   this.getNews();
  }

  timeSince(date) {
    return moment(date).fromNow();        // 10 hours ago
  }


  ngOnInit() {
    this.getNews();
  }

}
