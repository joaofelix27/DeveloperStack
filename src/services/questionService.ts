import * as questionRepository from "../repositories/questionRepository";


export async function createQuestion(askedBy:string,question:string) {
    return await questionRepository.createQuestion(askedBy,question)

}

export async function getQuestions() {
    return await questionRepository.getQuestions();

}