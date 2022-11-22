import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'demo-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
 @Input() rooms:RoomsList[]=[];
@Output() selectedRoom= new EventEmitter<RoomsList>();

chooseRoom(room: RoomsList){
  this.selectedRoom.emit(room)
}
constructor(){

}
ngOnInit(): void {
  
}
}
