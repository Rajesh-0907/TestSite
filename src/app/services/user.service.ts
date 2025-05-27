import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private _name  = signal("");
 name = this._name
    setName(name: string){
      this._name.set(name)
    }
    reset(){
      this._name.set("")
    }
}

