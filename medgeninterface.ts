/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-7
*/

import * as fs from "fs";
import * as ds from "readline";
import { Medgen } from "./interfaces";

function readmedgen(pathfile: string): Medgen[] {
          const fileread = ds.createInterface(fs.readFileSync(pathfile));
          let medgeninterface: Medgen[] = new Array();
          fileread.on("line", (l: string) => {
                    let linesplit = l.split("|");
                    let append: Medgen = {
                              id: linesplit[0],
                              name: linesplit[1],
                              sourceid: linesplit[2],
                              source: linesplit[3],
                    };
                    medgeninterface.push(append);
          });
          return medgeninterface;
}
