import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  onCourseSelected(course: Course) {
    console.log("App component - course card clicked: ", course);
  }
}
