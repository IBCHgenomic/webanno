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
import type { MapPubMed } from "./interfaces";

export async function mappubmedfunction(
	pathfile: string,
): Promise<MapPubMed[]> {
	const fileread = await fsPromise.open(pathfile, "r");
	const mappubmedinterface: MapPubMed[] = new Array();
	for await (const line of fileread.readLines()) {
		const linesplit = line.split("|");
		const append: MapPubMed = {
			uidpubmed: linesplit[0],
			cuipubmed: linesplit[1],
			namepubmed: linesplit[2],
			pmidpubmed: linesplit[3],
		};
		mappubmedinterface.push(append);
	}
	return mappubmedinterface;
}
