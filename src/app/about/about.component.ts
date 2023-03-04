import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  GoToHome() {
    // Method1:
    this.router.navigate(['Home']);

    //Method2
    //  this.route.navigateByUrl('Home',{relativeTo: this.route})//localhost:4200/About/Home
  }
}
