import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'ngx-blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.scss'],
})
export class BlogComponent implements OnInit {

  udemy: any = [];
  kaggle: any = [];

  constructor() { }

  ngOnInit() {

    this.udemy = [
      { title: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
        image: 'https://i.udemycdn.com/course/125_H/950390_270f_3.jpg',
        url: 'https://www.udemy.com/machinelearning/',
        topics: ['topic1', 'topic2', 'topic3', 'topic4', 'topic5', 'topic6', 'topic7', 'topic8', 'topic9', 'topic10']},
        { title: 'Machine Learning Practical: 6 Real-World Applications',
        image: 'https://i.udemycdn.com/course/125_H/1879510_a10e_5.jpg',
        url: 'https://www.udemy.com/machine-learning-practical/',
        topics: ['topic1', 'topic2', 'topic3', 'topic4', 'topic5', 'topic6', 'topic7', 'topic8', 'topic9', 'topic10']},
    ];
    this.kaggle = [
      { title: 'TMDB Box Office Prediction',
        image: 'https://storage.googleapis.com/kaggle-competitions/kaggle/10300/logos/header.png?t=2019-02-05-19-35-41',
        url: 'https://www.kaggle.com/c/tmdb-box-office-prediction/',
        topics: ['topic1', 'topic2', 'topic3', 'topic4', 'topic5', 'topic6', 'topic7', 'topic8', 'topic9', 'topic10']},
        { title: 'House Prices: Advanced Regression Techniques',
        image: 'https://storage.googleapis.com/kaggle-competitions/kaggle/5407/logos/front_page.png',
        url: 'https://www.kaggle.com/c/house-prices-advanced-regression-techniques',
        topics: ['topic1', 'topic2', 'topic3', 'topic4', 'topic5', 'topic6', 'topic7', 'topic8', 'topic9', 'topic10']},
    ];
  }
}
