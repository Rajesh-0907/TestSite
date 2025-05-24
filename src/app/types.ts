export interface  questionInterface{
  id : number,
  question : string,
  options: string[],
  inputId : string[],
}

export interface studentsInterface{
  rollNo: string,
  name: string,
  stream: string,
  score: number
}