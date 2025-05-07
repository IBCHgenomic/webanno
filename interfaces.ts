/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-7
*/


export interface Medgen {
          id: string,
          name: string,
          sourceid: string,
          source: string
}

export interface MapInterface {
          cui: string,
          sdui: string,
          hpostr: string,
          medgenstr: string,
          medgenstrsab: string,
          sty: string,
}
