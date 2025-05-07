/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-7
*/
import exec from "shelljs";

const download1: string = "wget https://ftp.ncbi.nlm.nih.gov/pub/clinvar/vcf_GRCh38/clinvar.vcf.gz";
const download2: string = "wget https://github.com/obophenotype/human-phenotype-ontology/releases/download/v2025-03-03/genes_to_disease.txt";
const download3: string = "wget https://github.com/obophenotype/human-phenotype-ontology/releases/download/v2025-03-03/genes_to_phenotype.txt";
const download4: string = "wget https://github.com/obophenotype/human-phenotype-ontology/releases/download/v2025-03-03/phenotype.hpoa";
const download5: string = "wget https://github.com/obophenotype/human-phenotype-ontology/releases/download/v2025-03-03/phenotype_to_genes.txt";
const download6: string = "wget https://ftp.ncbi.nlm.nih.gov/pub/medgen/medgen_pubmed_lnk.txt.gz";
const download7: string = "wget https://ftp.ncbi.nlm.nih.gov/pub/medgen/MedGen_HPO_Mapping.txt.gz";
const download8: string = "wget https://ftp.ncbi.nlm.nih.gov/pub/medgen/MedGen_HPO_OMIM_Mapping.txt.gz";
const download9: string = "wget https://ftp.ncbi.nlm.nih.gov/pub/medgen/MedGenIDMappings.txt.gz"

const { downloadout1, stdout1, stderr1 } = exec(download1);
if (downloadout1 != 0) {
          console.error(`download link missing: ${stderr1}`)
} else {
          console.log(`download completed: ${stdout1}`)
}

const { downloadout2, stdout2, stderr2 } = exec(download2);
if (downloadout2 != 0) {
          console.error(`download link missing: ${stderr2}`)
} else {
          console.log(`download completed: ${stdout2}`)
}

const { downloadout3, stdout3, stderr3 } = exec(download3);
if (downloadout3 != 0) {
          console.error(`download link missing: ${stderr3}`)
} else {
          console.log(`download completed: ${stdout3}`)
}

const { downloadout4, stdout4, stderr4 } = exec(download4);
if (downloadout4 != 0) {
          console.error(`download link missing: ${stderr4}`)
} else {
          console.log(`download completed: ${stdout4}`)
}
const { downloadout5, stdout5, stderr5 } = exec(download5);
if (downloadout5 != 0) {
          console.error(`download link missing: ${stderr5}`)
} else {
          console.log(`download completed: ${stdout5}`)
}
const { downloadout6, stdout6, stderr6 } = exec(download6);
if (downloadout6 != 0) {
          console.error(`download link missing: ${stderr6}`)
} else {
          console.log(`download completed: ${stdout6}`)
}
const { downloadout7, stdout7, stderr7 } = exec(download7);
if (downloadout7 != 0) {
          console.error(`download link missing: ${stderr7}`)
} else {
          console.log(`download completed: ${stdout7}`)
}
const { downloadout8, stdout8, stderr8 } = exec(download8);
if (downloadout8 != 0) {
          console.error(`download link missing: ${stderr8}`)
} else {
          console.log(`download completed: ${stdout8}`)
}
const { downloadout9, stdout9, stderr9 } = exec(download9);
if (downloadout9 != 0) {
          console.error(`download link missing: ${stderr9}`)
} else {
          console.log(`download completed: ${stdout9}`)
}
