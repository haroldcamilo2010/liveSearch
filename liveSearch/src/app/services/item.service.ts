import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/observable';
import {Item} from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
    
  constructor(public afs: AngularFirestore) { 
  	this.items = this.afs.collection('works').valueChanges();
  }

  getItem(){
  	return this.items;
  }
}
