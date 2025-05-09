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
	hpoid: string;
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
