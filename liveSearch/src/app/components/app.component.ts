import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service';
import {Item} from '../models/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'liveSearch';
  public keyword = 'name';



  data:any; 
  dataFilter;
  
  //create constructor with implement of firebase services and put in selector
  constructor(public ItemService: ItemService){  	
  }
  ngOnInit(){
    this.ItemService.getItem().subscribe(items=>{
      this.data =  items;
      this.inicialList();
    });
  }
  inicialList(){
    //I need to sort Json, I use the sort function, the first parameter the field by which it sort and the second is the asc or desc sort
    this.sortData('name', true,this.data);
    this.createList(this.data);    
  }

  createList(json){
    let list = document.getElementById('works');//get datalis
    list.innerHTML = ''; //clear datalist
    //this loop add option in datalist
    if (json.length > 0) {
      for (var i = 0; i < json.length; ++i) {
        let val;
        let newOptionElement = document.createElement("div");
        newOptionElement.classList.add("option");
        newOptionElement.textContent = json[i].name;
        newOptionElement.innerHTML = "<div class = 'text'>"+json[i].name+"</div>" +" <span class='section'>"+ json[i].section+"</span>";
        val = json[i].name;

        newOptionElement.addEventListener('mousedown', 
          function(){
            (<HTMLInputElement>document.getElementById("search")).value = val;
            document.getElementById('works').style.display = 'none';
          });
        list.appendChild(newOptionElement);
      }
    }else{
      // show div no found data
      let newOptionElement = document.createElement("div");
      newOptionElement.classList.add("option");
      newOptionElement.textContent = 'No se encontraron resultados...';                
      list.appendChild(newOptionElement);
    }
  }
  //sort the initial data
  sortData(prop, asc, json){
    json.sort((a, b)=>{
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

  filter(value, json){
    let data = json;
    var newArray = new Array;
    data.forEach(function (item, index, arr){
      if (item.name.toLowerCase().includes(value.toLowerCase())) {
        newArray.push(item);
      }
    });
    this.createList(newArray);
  }
  onKeypressEvent(event: any){
    console.log(event);
    //You can optimize this function with a second json, search values and length the already filtered json, search in the already filtered json. 
    // console.log(event.target.value.length+1);

    //set class to change icon to loaging icon for a few minutes
    let search = document.getElementById('search');
    search.classList.add("loading");    
    setTimeout(()=>{
      search.classList.remove("loading");
    },400);

    //aply filter to json
    this.dataFilter = this.data;
    this.filter(event.target.value+event.key, this.dataFilter);
  }
  // display list  after click in the input
  displayList(display){
    (display)?(<HTMLInputElement>document.getElementById("search")).value ="":false;
    (display)?this.createList(this.data):false;
    setTimeout(()=>{
      document.getElementById('works').style.display = (display)?'inline-block':'none';
    },100);
  }
}

