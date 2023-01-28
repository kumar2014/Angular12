import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // #1
  videos = [
    {
      title: 'My video 1',
      share: 415,
      likes: 257,
      dislikes: 12,
      thumbnail: 'assets/images/image1.jpg',
    },
    {
      title: 'My video 2',
      share: 215,
      likes: 325,
      dislikes: 12,
      thumbnail: 'assets/images/image2.jpg',
    },
    {
      title: 'My video 3',
      share: 513,
      likes: 105,
      dislikes: 12,
      thumbnail: 'assets/images/image3.jpg',
    },
  ];

  // #2 Create a propert mostLikedVideo in this property we want to assign most liked video from videos array
  mostLikedVideo = this.getmostlikedVideo();
// #3
  getmostlikedVideo() {
    let videoCopy = [...this.videos]; //  When we sort an arrya the sort method which we use to sort an array it also update the original array and here we dont want to update the original array.
    return videoCopy.sort((curr, next) => next.likes - curr.likes)[0]; // we are shorting array in decending order
  }
}
