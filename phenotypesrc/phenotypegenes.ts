/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-14
*/

import * as fsPromise from "fs/promises";
import type { PhenotypeGenes } from "./phenotype";
import type { Phenotypehpoa } from "./phenotype";
import type { GenesPhenotype } from "./phenotype";
import type { CombinedPhenotypeGenes } from "./phenotype";

class PhenotypeAnalysis {
	public filename_phenotype_genes: string;
	public filename_genes_phenotype: string;
	constructor(
		filename_phenotype_genes: string,
		filename_genes_phenotype: string,
	) {
		this.filename_phenotype_genes = filename_phenotype_genes;
		this.filename_genes_phenotype = filename_genes_phenotype;
	}
	async analyze(pathfile: string): Promise<PhenotypeGenes[]> {
		const fileread = await fsPromise.open(pathfile, "r");
		const phenotypegenes: PhenotypeGenes[] = new Array();
		for await (const line of fileread.readLines()) {
			const linesplit = Array.from(line.split("\t"));
			const objectline = {
				hpoid: Number.parseInt(linesplit[0].split(":")[1]),
				hponame: linesplit[1],
				ncbigeneid: linesplit[2],
				genesymbol: linesplit[3],
				diseaseid: linesplit[4].split(":")[1],
			};
			phenotypegenes.push(objectline);
		}
		return phenotypegenes;
	}
	async analyzeother(pathfile: string): Promise<GenesPhenotype[]> {
		const fileread = await fsPromise.open(pathfile, "r");
		const genespheotype: GenesPhenotype[] = new Array();
		for await (const line of fileread.readLines()) {
			const linesplit = Array.from(line.split("\t"));
			const genesobject = {
				ncbigeneid: Number.parseInt(linesplit[0]),
				genesymbol: linesplit[1],
				hpoid: Number.parseInt(linesplit[2].split(":")[1]),
				hponame: linesplit[3],
				frequency: linesplit[4],
				diseaseid: Number.parseInt(linesplit[5]),
			};
			genespheotype.push(genesobject);
		}
		return genespheotype;
	}
}

/*
 writing a merged class with a return interface array.
*/

class Compararative extends PhenotypeAnalysis {
	async comparative(
		input1: Array<PhenotypeGenes>,
		input2: Array<GenesPhenotype>,
	): Promise<CombinedPhenotypeGenes[]> {
		const inputarray1 = input1;
		const inputarray2 = input2;
		const returnvector: CombinedPhenotypeGenes[] = new Array();
		for (let i = 0; i < inputarray1.length; i++) {
			for (let j = 0; j < inputarray2.length; j++) {
				if (inputarray1[i].hpoid === inputarray2[j].hpoid) {
					const objectreturn = {
						hpoid: inputarray1[i].hpoid,
						hponame: inputarray1[i].hponame,
						ncbigeneid: inputarray1[i].ncbigeneid,
						genesymbol: inputarray1[i].genesymbol,
						diseaseid: inputarray1[i].diseaseid,
						frequency: inputarray2[j].frequency,
					};
					returnvector.push(objectreturn);
				}
			}
		}
		return returnvector;
	}
}
