import { Request, Response } from 'express';
import { createType } from '../generics/interfaces/interfaces';
import * as questionService from '../services/questionService'

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
  // TODO
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}
