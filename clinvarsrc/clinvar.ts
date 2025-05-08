/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-8
*/

/*
 interface with an function to genrate the variant info
*/

export interface Allele {
          Allelid: string,
          Clndisdb: string,
          Clndn: string,
          Clnhgvs: string,
          Clnrevstat: string,
          Clnsig: string,
          Clnsigscv: string,
          Clnvc: string,
          Geneinfo: string,
          Mc: string,
          Origin: string,
          Rsid: string,
}

export class Clinvar {
          chrom: string
          pos: string
          id: string
          ref: string
          alt: string
          qual: string
          filterval: string
          info: string

          constructor(chrom: string, pos: string, id: string, ref: string, alt: string, qual: string, filterval: string, info: string) {
                    this.chrom = chrom;
                    this.pos = pos;
                    this.id = id;
                    this.ref = ref;
                    this.alt = alt;
                    this.qual = qual;
                    this.filterval = filterval;
                    this.info = info;
          }

          /*
          class function calling a interface for easier use.
          */
          generatevariantinfor(interfacevalue: string): Allele[] {
                    let value: Array<string> = interfacevalue.split(";");
                    let allelepush: Allele[] = [];
                    let allelid: string = value[0].split("=")[1];
                    let clndisdb: string = value[1].split("=")[1].split(":")[1];
                    let clndn: string = value[2].split("=")[1];
                    let clnhgvs: string = value[3].split("=")[1];
                    let clnrevstat: string = value[4].split("=")[1];
                    let clnsig: string = value[5].split("=")[1];
                    let clnsigscv: string = value[6].split("=")[1];
                    let clnvc: string = value[7].split("=")[1];
                    let geneinfo: string = value[8].split("=")[1].split(":")[1];
                    let mc: string = value[9].split("=")[1].split("|").join("-").toString();
                    let origin = value[10].split("=")[1];
                    let rsid: string = value[11].split("=")[1];
                    let spliceinformation = {
                              Allelid: allelid,
                              Clndisdb: clndisdb,
                              Clndn: clndn,
                              Clnhgvs: clnhgvs,
                              Clnrevstat: clnrevstat,
                              Clnsig: clnsig,
                              Clnsigscv: clnsigscv,
                              Clnvc: clnvc,
                              Geneinfo: geneinfo,
                              Mc: mc,
                              Origin: origin,
                              Rsid: rsid
                    };
                    allelepush.push(spliceinformation);

                    return allelepush;
          }
}
