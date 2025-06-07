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

export interface loginInterface{
  rollno: string,
  password: string
}

// "message": "Login successful",
// 		"user": gin.H{
// 			"name":        student.Name,
// 			"isloggedin":  student.Isloggedin,
// 			"issubmitted": student.Issubmitted,

export interface userInterface{
  name: string,
  isloggedin: boolean,
  issubmitted: boolean
}

export interface logoutUserInterface{
  message: string
}

export interface loginResponseInterface{
  message : string,
  user: userInterface
}

export interface getUserInterface{
  name: string
  issubmitted: boolean,
  score : number
}

export interface TopScoreInterface{
  rollno: string
  name: string
  score : number
}