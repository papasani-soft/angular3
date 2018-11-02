import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector:'courses',
    //<courses> "courses"
    //<div class="courses">".courses"
    //<div class="courses">"#courses"
    template:
    `<h2>{{title}}</h2>
           <ul>
                <li *ngFor="let course of courses">
                    {{courses}}
                </li>
           </ul>
    `
})
export class CoursesComponent
{
    title='List of courses';
     courses;
    constructor(service:CoursesService){
    this.courses=service.getCourses();
    }
    imageUrl="http://lorempixel.com/400/200";
}
