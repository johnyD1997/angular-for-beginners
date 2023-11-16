import { Component, EventEmitter, Input, Output } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from '../course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {


 @Input()
  course!: Course;

@Input() 
  cardIndex!: number;

 @Output() courseSelected = new EventEmitter<Course>()



  onCourseViewed() {
    console.log("Card component - button clicked ...");
    this.courseSelected.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    return {
      'beginner': this.course.category === 'BEGINNER',
      };
    }

    cardStyle(){
      return {
        'background-image': 'url(' + this.course.iconUrl + ')'
    }
  }
}
