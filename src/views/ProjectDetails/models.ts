export interface TimeStruct {
  id?: string
  belongsTo: string
  description: string
  amount: number
}

export interface TimeRequestStruct {
  description: string
  amount: number
}