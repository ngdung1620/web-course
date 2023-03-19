import {Lesson} from "./lesson";

export class Course {
  courseId!: string
  title!: string
  description!: string
  lessons!: Lesson[];
}
