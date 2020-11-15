import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from '../../services/module-service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css'],
})
export class ModuleListComponent implements OnInit {
  modules = [];
  courseId = '';
  selectedModuleId = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private moduleService: ModuleService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const courseId = params.courseId;
      this.courseId = courseId;
      const moduleId = params.moduleId;
      if (typeof moduleId !== 'undefined'){
        this.selectedModuleId = params.moduleId;
      }
      if (typeof courseId !== 'undefined') {
        this.moduleService
          .findModulesForCourse(courseId)
          .then((modules) => (this.modules = modules));
      }
    });
  }
}
