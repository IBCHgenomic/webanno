/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-7
*/

/*
interface for the MedGen_HPO_OMIM_Mapping
*/
export interface HPOMap {
          omimcui: string,
          mimnumber: string,
          omimname: string,
          relationship: string,
          hpocui: string,
          hpoid: string,
          hponame: string,
          medgenname: string,
          medgensource: string,
          sty: string,
}

/*
interface for the MedGenIDMappings
*/
export interface Medgen {
          id: string,
          name: string,
          sourceid: string,
          source: string
}
/*
interface for the MedGen_HPO_Mapping
*/
export interface MedGenHPOInterface {
          cui: string,
          sdui: string,
          hpostr: string,
          medgenstr: string,
          medgenstrsab: string,
          sty: string,
}
/*
 interface for the Medgen_pubmed_lnk
*/
export interface MapPubMed {
          uidpubmed: string,
          cuipubmed: string,
          namepubmed: string,
          pmidpubmed: string,

}

/*
  interface for the OMIM class
*/

export interface OMIMMap {
          cbigeneid: string | number
          genesymbol: string
          association: string
          diseaseid: string | number
          source: string
}
