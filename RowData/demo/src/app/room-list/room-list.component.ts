import { Component, OnInit, Input } from '@angular/core';
import { RoomsList } from '../rooms/rooms';

@Component({
  selector: 'demo-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
 @Input() rooms:RoomsList[]=[];
constructor(){

}
ngOnInit(): void {
  
}
}
