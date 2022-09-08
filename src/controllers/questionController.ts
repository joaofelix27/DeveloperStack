import { Request, Response } from 'express';
import { answerType, createType } from '../generics/interfaces/interfaces';
import * as questionService from '../services/questionService'
import * as answerService from '../services/answerService'

export async function createQuestion(req: Request, res: Response) {
  const createData: createType = req.body
  const {askedBy,question}=createData
  const result:any = await questionService.createQuestion(askedBy,question)
  
  if (result) {
  return res.sendStatus(201)
  } else {
      throw {type:"error", message:"Question could not be created"}
  }
}

export async function createAnswer(req: Request, res: Response) {
  const params  = req.params
  const id :number = Number( params.id)
  const createData: answerType = req.body
  const {answeredBy,answer}=createData
  const result:any = await answerService.answerQuestion(id,answeredBy,answer)
  
  if (result) {
  return res.sendStatus(201)
  } else {
      throw {type:"error", message:"Answer could not be created"}
  }
}

export async function get(req: Request, res: Response) {
  const result:any = await questionService.getQuestions()
  
  if (result.length) {
  return res.status(200).send(result)
  } else {
      throw {type:"error", message:"Questions could not be find"}
  }
}

export async function getById(req: Request, res: Response) {
  const params  = req.params
  const id :number = Number( params.id)
  const result:any = await questionService.getQuestionsById(id)
  
  if (result) {
  return res.status(200).send(result)
  } else {
      throw {type:"error", message:"Question could not be find"}
  }
}
