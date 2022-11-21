import { Component, OnInit } from '@angular/core';
import { rooms, RoomsList } from './rooms';

@Component({
  selector: 'demo-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent  {
  hotelName = 'HBM'
  numOfRooms = 10
  hiddenRoom = false
  room: rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  roomList: RoomsList[] =[];
  togle() {
    this.hiddenRoom = !this.hiddenRoom
  }
  ngOnInit():void{
this.roomList= [
  {
    roomNumber:1,
    roomType: 'Deluxe Room',
    amenities: 'AC, Free Wi-Fi, Bathroom',
    price: 500,
    photos: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    checkinTime: new Date('20-nov-2021'),
    ckeckoutTime: new Date('21-nov-2021'),
    rating:4.5
  },
  {
    roomNumber:2,
    roomType: 'Deluxe Room',
    amenities: 'AC, Free Wi-Fi, Bathroom',
    price: 1000,
    photos: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    checkinTime: new Date('20-nov-2021'),
    ckeckoutTime: new Date('22-nov-2021'),
    rating:3.4634
  },
  {
    roomNumber:3,
    roomType: 'privet suite',
    amenities: 'AC, Free Wi-Fi, Bathroom',
    price: 15000,
    photos: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    checkinTime: new Date('20-nov-2021'),
    ckeckoutTime: new Date('21-nov-2021'),
    rating:2.7
  }
]
  }
}
