/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-7
*/

/*
converted to nodejs programming
*/

import * as fsPromise from "fs/promises";
import type { Medgen } from "./interfaces";

export async function readmedgenfunction(pathfile: string): Promise<Medgen[]> {
	const fileread = await fsPromise.open(pathfile, "r");
	const medgeninterface: Medgen[] = new Array();
	for await (const line of fileread.readLines()) {
		const linesplit = line.split("|");
		const append: Medgen = {
			id: linesplit[0],
			name: linesplit[1],
			sourceid: linesplit[2],
			source: linesplit[3],
		};
		medgeninterface.push(append);
	}
	return medgeninterface;
}
