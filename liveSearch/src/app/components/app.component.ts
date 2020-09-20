import { Component } from '@angular/core';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  title = 'liveSearch';
  public keyword = 'name';



  // This is a example data to selector
  // data=[
  // 	{
  // 		id:1,
  // 		name:"Pintores",
  // 		section: ""
  // 	},
  // 	{
  // 		id:2,
  // 		name:"Pintar Interior de Vivienda",
  // 		section:" <b> en Pintores</b>"
  // 	},
  // 	{
  // 		id:3,
  // 		name:"Quitar o Poner Gotelé",
  // 		section:" <b> en Pintores</b>"
  // 	},
  // 	{
  // 		id:4,
  // 		name:"PintarExterior de Casa(Unifamiliar)",
  // 		section:" <b> en Pintores</b>"
  // 	}
  // ];
  data;
  
  //create constructor with implement of firebase services and put in selector
  constructor(public ItemService: ItemService){
  	this.ItemService.getItem().subscribe(items=>{
		this.data = items;
	});
  }

}

