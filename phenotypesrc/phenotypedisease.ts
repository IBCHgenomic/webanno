/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-9
*/

import * as fsPromise from "fs/promises";
import type { MaxoAnnotate } from "./phenotype";

class MergeAnnotate {
	diseaseid: string;
	diseasename: string;
	sourceid: string;
	maxoid: string;
	maxoname: string;
	hpoid: string | number;
	relation: string;
	evidence: string;
	extensionid: string;
	extensionname: string;
	comment: string;
	other: string;
	author: string;
	lastupdated: string;
	created: string;
	constructor(
		diseaseid: string,
		diseasename: string,
		sourceid: string,
		maxoid: string,
		maxoname: string,
		hpoid: string,
		relation: string,
		evidence: string,
		extensionid: string,
		extensionname: string,
		comment: string,
		other: string,
		author: string,
		lastupdated: string,
		created: string,
	){
	this.diseaseid = diseaseid,
	this.diseasename = diseasename,
	this.sourceid = sourceid,
	this.maxoid = maxoid,
	this.maxoname = maxoname,
	this.hpoid = hpoid,
	this.relation = relation,
	this.evidence = evidence,
	this.extensionid = extensionid,
	this.extensionname = extensionname,
	this.comment = comment,
	this.other = other,
	this.author = author,
	this.lastupdated = lastupdated,
	this.created = created,
	}
}

class MaxoMerge extends MergeAnnotate {
	filename: string;
	super(diseaseid: string,
	diseasename: string,
	sourceid: string,
	maxoid: string,
	maxoname: string,
	hpoid: string | number,
	relation: string,
	evidence: string,
	extensionid: string,
	extensionname: string,
	comment: string,
	other: string,
	author: string,
	lastupdated: string,
	created: string);
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
	async hpoidcompare(hpoid: string): Promise<string> {
		if (Number.parseInt(hpoid) === this.hpoid) {
			return `this.diseaseid + "|" + "this.diseasename" + "|" + this.sourceid + "|" + this.maxoid + "|" + this.maxoname + "|" + this.hpoid + "|" + this.relation + "|" +  this.evidence + "|" + this.extensionid + "|" + this.extensionname this.comment + "|" + this.other + "|" + this.author + "|" + this.lastupdated + "|" + this.created`;
		}
		return `this.diseaseid + "|" + "this.diseasename" + "|" + this.sourceid + "|" + this.maxoid + "|" + this.maxoname + "|" + this.hpoid + "|" + this.relation + "|" +  this.evidence + "|" + this.extensionid + "|" + this.extensionname this.comment + "|" + this.other + "|" + this.author + "|" + this.lastupdated + "|" + this.created`;
	}
}
