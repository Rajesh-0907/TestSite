import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
private _count  = signal<number>(0);
private _color = signal<string>("")
 count = this._count
 color = this._color
    setCount(score : number){
      this._count.set(score)
    }
    setColor(color: string){
      this._color.set(color)

    }
    reset(){
      this._count.set(0)
      this._color.set("")
    }
}
