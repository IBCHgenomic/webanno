/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-7
*/

/*
added support for asynchronous promise programming
*/

import { HPOMap } from "./interfaces";
import * as fsPromise from 'fs/promises';
export async function hpomapfunction(pathfile: string): Promise<HPOMap[]> {
          const fileread = await fsPromise.open(pathfile, 'r');
          let medgeninterface: HPOMap[] = new Array();
          for await (const line of fileread.readLines()) {
                    let linesplit = line.split("|");
                    let append: HPOMap = {
                              omimcui: linesplit[0],
                              mimnumber: linesplit[1],
                              omimname: linesplit[2],
                              relationship: linesplit[3],
                              hpocui: linesplit[4],
                              hpoid: linesplit[5],
                              hponame: linesplit[6],
                              medgenname: linesplit[7],
                              medgensource: linesplit[8],
                              sty: linesplit[9],
                    };
                    medgeninterface.push(append);
          }
          return medgeninterface;
}
