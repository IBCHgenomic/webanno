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

import { MedGenHPOInterface } from "./interfaces";
import * as fsPromise from 'fs/promises';

export async function omiminterfacefunction(pathfile: string): Promise<MedGenHPOInterface[]> {
          const fileread = await fsPromise.open(pathfile, 'r');
          let medgeninterface: MedGenHPOInterface[] = new Array();
          for await (const line of fileread.readLines()) {
                    let linesplit = Array.from(line.split('|'));
                    let newmedgen: MedGenHPOInterface = {
                              cui: linesplit[0],
                              sdui: linesplit[1],
                              hpostr: linesplit[2],
                              medgenstr: linesplit[3],
                              medgenstrsab: linesplit[4],
                              sty: linesplit[5]
                    };
                    medgeninterface.push(newmedgen);
          };
          return medgeninterface;
}
