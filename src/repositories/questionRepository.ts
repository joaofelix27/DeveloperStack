// TODO

import { prisma } from "../config/database";

 export async function createQuestion (askedBy:string,question:string) {
    return await prisma.question.create({
        data: {
            askedBy: askedBy,
            question: question
        }
    });
 }