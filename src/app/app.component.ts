import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: 'nature',
      imageUrl: 'assets/tree.jpeg',
      content: 'I saw this awesome tree during my hike today.',
    },
    {
      title: 'Snowy Mountain',
      username: 'hikingperson',
      imageUrl: 'assets/mountain.jpeg',
      content:
        'Beautiful view of some mountains I saw during my hike.',
    },
    {
      title: 'Mountain Biking',
      username: 'biking12222',
      imageUrl: 'assets/biking.jpeg',
      content: 'Action shot of me riding my bike.',
    },
    {
      title: 'Mountain Biking',
      username: 'biking12222',
      imageUrl: 'assets/biking.jpeg',
      content: 'Action shot of me riding my bike.',
    },
  ];
}
