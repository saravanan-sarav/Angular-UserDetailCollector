import { Component } from '@angular/core';
import { UserData } from 'src/app/models/user-data';
import { DataCollectionService } from 'src/app/services/data-collection.service';

@Component({
  selector: 'data-collection',
  templateUrl: './data-collection.component.html',
  styleUrls: ['./data-collection.component.css'],
})
export class DataCollectionComponent {
  userDetails: UserData[] = [];
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  Edited: number = 0;
  btn: string = 'Save Data';
  constructor(private dataCollectionService: DataCollectionService) {
    this.userDetails = dataCollectionService.userDetails;
    console.log(this.userDetails);
  }
  addData(): void {
    if (this.Edited === 0) {
      this.userDetails = this.dataCollectionService.addToDB(
        this.firstName,
        this.lastName,
        this.email,
        this.phone
      );
    } else {
      this.userDetails = this.dataCollectionService.editToDB(
        this.Edited,
        this.firstName,
        this.lastName,
        this.email,
        this.phone
      );
    }
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
    this.Edited = 0;
    this.btn = 'Save Data';
  }

  deleteUser(id: number): void {
    // console.log('delete called');
    this.userDetails = this.dataCollectionService.deleteToDB(id);
  }

  edit(id: number): void {
    this.Edited = id;
    let user: UserData = this.dataCollectionService.getItem(this.Edited);
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.phone = user.phone;
    this.btn = 'Update';
  }
}
