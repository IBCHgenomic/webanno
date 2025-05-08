/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-8
*/



import { OMIMMap } from "../medgensrc/interfaces"

export class DiseasePred {
          cbigeneid: string
          genesymbol: string
          association: string
          diseaseid: string
          source: string

          constructor(cbigeneid: string, genesymbol: string, association: string, diseaseid: string, source: string) {
                    this.cbigeneid = cbigeneid;
                    this.genesymbol = genesymbol;
                    this.association = association;
                    this.diseaseid = diseaseid;
                    this.source = source;
          }
          /*
            getter and setter for the OMIM class returning a interface callable for another class.
          */
          getOMIM(): OMIMMap {
                    let gene: number = parseInt(this.cbigeneid.split(":")[1]);
                    let disease: number = parseInt(this.diseaseid.split(":")[1]);
                    let objectOMIM = { cbigeneid: gene, genesymbol: this.genesymbol, association: this.association, diseaseid: disease, source: this.source };
                    return objectOMIM;
          }

}
