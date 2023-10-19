import { Injectable } from '@angular/core';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root',
})
export class DataCollectionService {
  userDataMain: UserData[] = [];
  userDetails: UserData[] = [
    {
      id: 1,
      firstName: 'Saravanan',
      lastName: 'S',
      email: 'saravanan@gmail.com',
      phone: '6379888041',
    },
    {
      id: 2,
      firstName: 'Raju',
      lastName: 'S',
      email: 'raju@gmail.com',
      phone: '6379888041',
    },
  ];
  constructor() {}
  getItem(id: number): any {
    for (let user of this.userDetails) {
      if (user.id === id) {
        console.log(user);
        return user;
      }
    }
  }
  addToDB(
    firstName: string,
    lastName: string,
    email: string,
    phone: string
  ): UserData[] {
    let tempDB: UserData = {
      id: this.userDetails.length + 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    };
    this.userDetails.push(tempDB);
    this.userDataMain.push(tempDB);
    return this.userDetails;
  }
  deleteToDB(id: number): UserData[] {
    let tempDB: UserData[] = [];
    for (let user of this.userDetails) {
      if (user.id !== id) {
        tempDB.push(user);
      }
    }
    this.userDetails = tempDB;
    return this.userDetails;
  }
  editToDB(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string
  ): UserData[] {
    for (let user of this.userDetails) {
      if (user.id === id) {
        (user.id = id),
          (user.firstName = firstName),
          (user.lastName = lastName),
          (user.email = email),
          (user.phone = phone);
      }
    }
    return this.userDetails;
  }
}
