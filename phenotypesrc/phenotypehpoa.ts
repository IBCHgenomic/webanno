/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-9
*/


import { Phenotypehpoa } from "./phenotype";
import * as fsPromise from 'fs/promises';

class Phenotype {
          filename: string
          constructor(filename: string) {
                    this.filename = filename
          }
          async resolvefilename(fileiter: string): Promise<Phenotypehpoa[]> {
                    const fileread = await fsPromise.open(fileiter, 'r');
                    let phenotypehpoareturn: Phenotypehpoa[] = new Array();
                    for await (const line of fileread.readLines()) {
                              let linesplit = line.split("\t");
                              let databaseidinsert = linesplit[0];
                              let diseasenameinsert = linesplit[1];
                              let qualifierinsert = linesplit[2];
                              let hpoidinsert = linesplit[3];
                              let referenceinsert = linesplit[4];
                              let evidenceinsert = linesplit[5];
                              let onsetinsert = linesplit[6];
                              let frequencyinsert = linesplit[7];
                              let sexinsert = linesplit[8];
                              let modifierinsert = linesplit[9];
                              let aspectinsert = linesplit[10];
                              let biocurationinsert = linesplit[11];

                              let insertobject
                                        = {
                                        databaseid: databaseidinsert, diseasename: diseasenameinsert, qualifier: qualifierinsert,
                                        hpoid: hpoidinsert, reference: referenceinsert, evidence: evidenceinsert, onset: onsetinsert,
                                        frequency: frequencyinsert, sex: sexinsert, modifier: modifierinsert,
                                        aspect: aspectinsert, biocuration: biocurationinsert
                              };
                              phenotypehpoareturn.push(insertobject);

                    }
                    return phenotypehpoareturn;
          }
          async getcompare(): Promise<string> {
                    return `this.databaseid + "|" + this.diseasename + "|" + this.qualifier + "|" + this.hpoid + "|" + this.reference + "|" + this.evidence + "|" + this.onset + "|" + this.frequency + "|" + this.sex + "|" + this.modifier + "|" + this.aspect + "|" + this.biocuration`
          }

}
