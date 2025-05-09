/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-9
*/

import * as fsPromise from "fs/promises";
import type { MaxoAnnotate } from "./phenotype";

class Phenotype {
	filename: string;
	constructor(filename: string) {
		this.filename = filename;
	}
	async resolvefilename(fileiter: string): Promise<MaxoAnnotate[]> {
		const fileread = await fsPromise.open(fileiter, "r");
		const maxoannotate: MaxoAnnotate[] = new Array();
		for await (const line of fileread.readLines()) {
			const linesplit = line.split("\t");
			const diseaseidinsert = linesplit[0];
			const diseasenameinsert = linesplit[1];
			const sourceidinsert = linesplit[2];
			const maxoidinsert = linesplit[3];
			const maxonameinsert = linesplit[4];
			const hpoidinsert = linesplit[5];
			const relationinsert = linesplit[6];
			const evidenceinsert = linesplit[7];
			const extensionidinsert = linesplit[8];
			const extensionameinsert = linesplit[9];
			const commentinsert = linesplit[10];
			const otherinsert = linesplit[11];
			const authorinsert = linesplit[12];
			const lastupdatedinsert = linesplit[13];
			const createdinsert = linesplit[14];
			const newobject = {
				diseaseid: diseaseidinsert,
				diseasename: diseasenameinsert,
				sourceid: sourceidinsert,
				maxoid: maxoidinsert,
				maxoname: maxonameinsert,
				hpoid: hpoidinsert,
				relation: relationinsert,
				evidence: evidenceinsert,
				extensionid: extensionidinsert,
				extensionname: extensionameinsert,
				comment: commentinsert,
				other: otherinsert,
				author: authorinsert,
				lastupdated: lastupdatedinsert,
				created: createdinsert,
			};
			maxoannotate.push(newobject);
		}
		return maxoannotate;
	}

	/*
           introducing handlebar templating language here
	*/
	async hpoidcompare(hpoid: string): string {
		if (Number.parseInt(hpoid) === this.hpoid) {
			return `this.diseaseid + "|" + "this.diseasename" + "|" + this.sourceid + "|" + this.maxoid + "|" + this.maxoname + "|" + this.hpoid + "|" + this.relation + "|" +  this.evidence + "|" + this.extensionid + "|" + this.extensionname this.comment + "|" + this.other + "|" + this.author + "|" + this.lastupdated + "|" + this.created`;
		}
	}
}
