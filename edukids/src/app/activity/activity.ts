import { Component, Input } from '@angular/core';
import { ActivityModel } from './activity.model';

@Component({
  selector: 'app-activity',
  imports: [],
  templateUrl: './activity.html',
  styleUrl: './activity.css',
})
export class Activity {
  @Input() activity!: ActivityModel;
  
}
