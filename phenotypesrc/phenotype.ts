/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-9
*/

export interface Phenotypehpoa {
	databaseid: string;
	diseasename: string;
	qualifier: string;
	hpoid: number;
	reference: string;
	evidence: string;
	onset: string;
	frequency: string;
	sex: string;
	modifier: string;
	aspect: string;
	biocuration: string;
}

export interface MaxoAnnotate {
	diseaseid: string;
	diseasename: string;
	sourceid: string;
	maxoid: string;
	maxoname: string;
	hpoid: number;
	relation: string;
	evidence: string;
	extensionid: string;
	extensionname: string;
	comment: string;
	other: string;
	author: string;
	lastupdated: string;
	created: string;
}

export interface PhenotypeGenes {
	hpoid: number;
	hponame: string;
	ncbigeneid: string;
	genesymbol: string;
	diseaseid: string;
}

export type GenesPhenotype = {
	ncbigeneid: string | number;
	genesymbol: string;
	hpoid: number;
	hponame: string;
	frequency: string;
	diseaseid: string | number;
};

export type CombinedPhenotypeGenes = {
	hpoid: number;
	hponame: string;
	ncbigeneid: string | number;
	genesymbol: string;
	diseaseid: string | number;
	frequency: string;
};

export type Combinedlastinterface = {
	// Phenotype
	databaseid: string;
	diseasename: string;
	qualifier: string;
	reference: string;
	evidence: string;
	onset: string;
	sex: string;
	modifier: string;
	aspect: string;
	biocuration: string;
	// Combined
	hpoid: number;
	hponame: string;
	ncbigeneid: string | number;
	genesymbol: string;
	diseaseid: string | number;
	frequency: string;
};
