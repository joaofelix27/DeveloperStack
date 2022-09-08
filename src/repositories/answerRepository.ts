// TODO

import { prisma } from "../config/database";

 export async function answerQuestion (id:number,answeredBy:string,answer:string) {
    return await prisma.questions.create({
        data: {
            questionId:id,
            answeredBy: answeredBy,
            answer: answer
        }
    });
 }