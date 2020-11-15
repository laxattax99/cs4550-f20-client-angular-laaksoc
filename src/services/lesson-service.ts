import {Injectable} from '@angular/core';

@Injectable()
export class LessonService {
  findLessonsForModule = (mid) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/laaksoc/modules/${mid}/lessons`)
      .then(response => response.json())
  
}