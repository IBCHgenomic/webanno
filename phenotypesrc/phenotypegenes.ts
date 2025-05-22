/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-14
*/

import * as fsPromise from "fs/promises";
import type { PhenotypeGenes } from "./phenotype";
import type { GenesPhenotype } from "./phenotype";
import type { CombinedPhenotypeGenes } from "./phenotype";
import type { Combinedlastinterface } from "./phenotype";
import { PhenotypeHPOA } from "./phenotypehpoa";

export class PhenotypeAnalysis extends PhenotypeHPOA {
	public filename_phenotype_genes: string;
	public filename_genes_phenotype: string;
	public filename_genes_hpoa: string;

	constructor(
		filename: string,
		filename_phenotype_genes: string,
		filename_genes_phenotype: string,
		filename_genes_hpoa: string,
	) {
		super(filename);
		this.filename_phenotype_genes = filename_phenotype_genes;
		this.filename_genes_phenotype = filename_genes_phenotype;
		this.filename_genes_hpoa = filename_genes_hpoa;
	}

	public async analyze(): Promise<PhenotypeGenes[]> {
		const fileread = await fsPromise.open(this.filename_phenotype_genes, "r");
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
			phenotypegenes.push(...[objectline]);
		}
		return phenotypegenes;
	}

	public async analyzeother(): Promise<GenesPhenotype[]> {
		const fileread = await fsPromise.open(this.filename_genes_phenotype, "r");
		const genesphenotype: GenesPhenotype[] = new Array();
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
			genesphenotype.push(...[genesobject]);
		}
		return genesphenotype;
	}

	public async comparativephenotype(): Promise<CombinedPhenotypeGenes[]> {
		const pheno = this.analyze();
		const geno = this.analyzeother();
		const returnvector: CombinedPhenotypeGenes[] = new Array();
		for (const val of pheno) {
			for (const inputval of geno) {
				if (Number.parseInt(val.hpoid) ===
				Number.parseInt(inputval.hpoid)) {
					const objectreturn = {
						hpoid: val.hpoid,
						hponame: val.hponame,
						ncbigeneid: val.ncbigeneid,
						genesymbol: val.genesymbol,
						diseaseid: val.diseaseid,
						frequency: inputval.frequency,
					};
					returnvector.push(objectreturn);
				}
			}
		}
		return returnvector;
	}

	public async getjunctionvariants(): Promise<Combinedlastinterface> {
		const valuephenotype = new PhenotypeHPOA(this.filename_genes_hpoa);
		const phenotypeoutput = valuephenotype.resolvefilename();
		const valuereturn = this.comparativephenotype();
		const returnfinal_combined: Combinedlastinterface[] = new Array();
		for (const val of phenotypeoutput) {
			for (const objval of valuereturn) {
				if (Number.parseInt(val.hpoid) ===
				Number.parseInt(objval.hpoid)) {
					const objectreturn = {
						databaseid: val.databaseid,
						diseasename: val.diseasename,
						qualifier: val.qualifier,
						reference: val.reference,
						evidence: val.evidence,
						onset: val.onset,
						sex: val.sex,
						modifier: val.modifier,
						aspect:val.aspect,
						biocuration: val.biocuration,
						hpoid: objval.hpoid,
						hponame: objval.hponame,
						ncbigeneid: objval.ncbigene,
						genesymbol: objval.genesymbol,
						diseaseid: objval.diseaseid,
						frequency: objval.frequency,
					};
					returnfinal_combined.push(objectreturn);
				}
			}
		}
	return returnfinal_combined;
}
