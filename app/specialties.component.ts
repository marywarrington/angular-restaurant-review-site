import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'specialties',
  inputs: ['restaurant'],
  outputs: ['onSpecialtySelect'],
  template: `
    <select *ngIf="restaurant" (change)="onChange($event.target.value)">
      <option *ngFor="#currentSpecialty of specialtiesList"
      [selected]="currentSpecialty === restaurant.specialty">{{ currentSpecialty }}</option>
    </select>
    <select *ngIf="!restaurant" (change)="onChange($event.target.value)">
      <option *ngFor="#currentSpecialty of specialtiesList">{{ currentSpecialty }}</option>
    </select>
  `
})
export class SpecialtiesComponent {
  public restaurant: Restaurant;
  public onSpecialtySelect: EventEmitter<string>;
  constructor() {
    this.onSpecialtySelect = new EventEmitter();
  }
  onChange(specialtyOption) {
    console.log("child", specialtyOption);
    this.onSpecialtySelect.emit(specialtyOption);
  }
  public specialtiesList: string[] = ["Sandwiches", "Mexican", "Vietnamese", "Italian", "Ramen", "New American", "Other"];

}
