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

 export async function getQuestions () {
    return await prisma.question.findMany();
 }

 export async function getQuestionsById (id:number) {
    return await prisma.question.findUnique({	where: {
		id: id
	}});
 }