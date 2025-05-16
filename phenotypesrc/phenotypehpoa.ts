/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-9
*/

import * as fsPromise from "fs/promises";
import type { Phenotypehpoa } from "./phenotype";

export class Phenotype {
	filename: string;
	constructor(filename: string) {
		this.filename = filename;
	}
	async resolvefilename(fileiter: string): Promise<Phenotypehpoa[]> {
		const fileread = await fsPromise.open(fileiter, "r");
		const phenotypehpoareturn: Phenotypehpoa[] = new Array();
		for await (const line of fileread.readLines()) {
			const linesplit = line.split("\t");
			const databaseidinsert = linesplit[0];
			const diseasenameinsert = linesplit[1];
			const qualifierinsert = linesplit[2];
			const hpoidinsert = Number.parseInt(linesplit[3].split(":")[1]);
			const referenceinsert = linesplit[4];
			const evidenceinsert = linesplit[5];
			const onsetinsert = linesplit[6];
			const frequencyinsert = linesplit[7];
			const sexinsert = linesplit[8];
			const modifierinsert = linesplit[9];
			const aspectinsert = linesplit[10];
			const biocurationinsert = linesplit[11];

			const insertobject = {
				databaseid: databaseidinsert,
				diseasename: diseasenameinsert,
				qualifier: qualifierinsert,
				hpoid: hpoidinsert,
				reference: referenceinsert,
				evidence: evidenceinsert,
				onset: onsetinsert,
				frequency: frequencyinsert,
				sex: sexinsert,
				modifier: modifierinsert,
				aspect: aspectinsert,
				biocuration: biocurationinsert,
			};
			phenotypehpoareturn.push(insertobject);
		}
		return phenotypehpoareturn;
	}
	async getcompare(): Promise<string> {
		return `this.databaseid + "|" + this.diseasename + "|" + this.qualifier + "|" + this.hpoid + "|" + this.reference + "|" + this.evidence + "|" + this.onset + "|" + this.frequency + "|" + this.sex + "|" + this.modifier + "|" + this.aspect + "|" + this.biocuration`;
	}
}
