import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private _name  = signal<string>("");
private _isloggedin = signal<boolean>(false)
private _issubmitted = signal<boolean>(false)
 name = this._name
 isloggedin = this._isloggedin
 issubmitted = this._issubmitted
 
    setUser(name: string, isloggedin: boolean, issubmitted: boolean){
      this._name.set(name)
      this._isloggedin.set(isloggedin)
      this._issubmitted.set(issubmitted)
    }
    reset(){
      this._name.set("")
    }
}

