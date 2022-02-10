import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ScatterResultSheetComponent } from '../scatter-result-sheet/scatter-result-sheet.component';

@Component({
  selector: 'app-user-content-input',
  templateUrl: './user-content-input.component.html',
  styleUrls: ['./user-content-input.component.scss']
})
export class UserContentInputComponent implements OnInit {
  emailFormObject = new FormControl('');
  tagFormObject = new FormControl('');
  isListAllTags!: boolean;
  localStorage!: Storage;
  storageLengthItr!: Array<number>;
  emailList!: Array<string>;
  constructor(private _scatterResultSheet: MatBottomSheet) {
  }
  ngOnInit() {
    this.setAngularLocalStorage();
  }
  private setAngularLocalStorage() {
    this.localStorage = window.localStorage;
    this.storageLengthItr = Array(window.localStorage.length).fill(0);
  }
  private getStorageKeyByIndex(index: number) {
    return window.localStorage.key(index);
  }
  setTagForReuse(keyIndex: number) {
    let key = this.getStorageKeyByIndex(keyIndex);
    let emailCsv = window.localStorage.getItem(<string>key);
    this.emailFormObject.setValue(emailCsv);
    this.tagFormObject.setValue(key);
  }
  deleteTag(keyIndex: number) {
    let key = this.getStorageKeyByIndex(keyIndex);
    window.localStorage.removeItem(<string>key);
    this.setAngularLocalStorage();
  }
  onFormSubmit() {
    let emailCsv: string = this.emailFormObject.value?.trim();
    let tag: string = this.tagFormObject.value?.trim();
    this.emailList = emailCsv.split(';').map(ele => ele.trim()).filter(ele => ele.length > 0);
    if (!this.emailList || !this.emailList.length)
      return;
    if (tag && tag.length && window.localStorage.getItem(tag) === null) {
      window.localStorage.setItem(tag, emailCsv);
      this.setAngularLocalStorage();
    }
    this.runScatter();
  }
  runScatter() {
    let tmpEmailList: Array<string> = this.emailList;
    this.emailList = new Array<string>();
    while (tmpEmailList.length) {
      let rndIndex = Math.floor(Math.random() * tmpEmailList.length);
      this.emailList.push(tmpEmailList[rndIndex]);
      tmpEmailList.splice(rndIndex, 1);
    }
    this._scatterResultSheet.open(ScatterResultSheetComponent, {
      data: {
        names: this.emailList
      }
    });
  }
}
