import {Injectable} from '@angular/core';

@Injectable()
export class ModuleService {
  findModulesForCourse = (cid) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/laaksoc/courses/${cid}/modules`)
      .then(response => response.json())
  createModuleForCourse = (course) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/laaksoc/courses/${course._id}/modules`, {
      method: 'POST',
      body: JSON.stringify({title: 'New Module'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
  deleteModule = (module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/laaksoc/modules/${module._id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
}