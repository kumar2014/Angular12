import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';


@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  //providers: [EnrollService]
})
export class AngularComponent implements OnInit {

  
    title="Angular";
  
   
  
    }
  // #5
    OnEnroll(){
      // #6 We have to create a instance of the entroll service class
      const entrollService = new EnrollService();
      this.entrollService.OnEnrollClicked(this.title);
    }
  ngOnInit() {
  }

}