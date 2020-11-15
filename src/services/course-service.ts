import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
  findAllCourses = () =>
    fetch(
      'https://wbdv-generic-server.herokuapp.com/api/laaksoc/courses'
    ).then((response) => response.json());
  createCourse = () =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/laaksoc/courses', {
      method: 'POST',
      body: JSON.stringify({ title: 'New Course' }),
      headers: {
        'content-type': 'application/json',
      },
    }).then((response) => response.json());
  updateCourse = (course) =>
    fetch(
      `https://wbdv-generic-server.herokuapp.com/api/laaksoc/courses/${course._id}`,
      {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
          'content-type': 'application/json',
        },
      }
    ).then((response) => response.json());
  deleteCourse = (course) =>
    fetch(
      `https://wbdv-generic-server.herokuapp.com/api/laaksoc/courses/${course._id}`,
      {
        method: 'DELETE',
      }
    ).then((response) => response.json());

  findCourseById = (cid) =>
    fetch(
      `https://wbdv-generic-server.herokuapp.com/api/laaksoc/courses/${cid}`
    ).then((response) => response.json());
}
