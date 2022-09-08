import * as answerRepository from "../repositories/answerRepository";


export async function answerQuestion(id:number,answeredBy:string,answer:string) {
    return await answerRepository.answerQuestion(id,answeredBy,answer)

}