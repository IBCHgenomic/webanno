/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-7
*/

/*
change to node js programming
*/

import type { MedGenHPOInterface } from "./interfaces";
import * as fsPromise from "fs/promises";

export async function omiminterfacefunction(
	pathfile: string,
): Promise<MedGenHPOInterface[]> {
	const fileread = await fsPromise.open(pathfile, "r");
	const medgeninterface: MedGenHPOInterface[] = new Array();
	for await (const line of fileread.readLines()) {
		const linesplit = Array.from(line.split("|"));
		const newmedgen: MedGenHPOInterface = {
			cui: linesplit[0],
			sdui: linesplit[1],
			hpostr: linesplit[2],
			medgenstr: linesplit[3],
			medgenstrsab: linesplit[4],
			sty: linesplit[5],
		};
		medgeninterface.push(newmedgen);
	}
	return medgeninterface;
}
