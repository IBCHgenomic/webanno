/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-7
*/

import * as fs from "fs";
import * as ds from "readline";
import { MapInterface } from "./interfaces";

function omiminterface(pathfile: string): MapInterface[] {
          const fileread = ds.createInterface(fs.readFileSync(pathfile));
          let medgeninterface: MapInterface[] = new Array();
          fileread.on("line", (l: string) => {
                    let linesplit = Array.from(l.split('|'));
                    let newmedgen: MapInterface = {
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
