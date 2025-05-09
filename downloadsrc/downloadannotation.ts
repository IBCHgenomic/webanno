/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-7
*/

/*
changed into a nodejs version for better
*/

const executecommand = require("shelljs");

if (
	executecommand.exec(
		"wget https://ftp.ncbi.nlm.nih.gov/pub/clinvar/vcf_GRCh38/clinvar.vcf.gz",
	).code !== 0
) {
	executecommand.echo("download failed");
	executecommand.exit(1);
}
if (
	executecommand.exec(
		"wget https://github.com/obophenotype/human-phenotype-ontology/releases/download/v2025-03-03/genes_to_disease.txt",
	).code !== 0
) {
	executecommand.echo("download failed");
	executecommand.exit(1);
}
if (
	executecommand.exec(
		"wget https://github.com/obophenotype/human-phenotype-ontology/releases/download/v2025-03-03/genes_to_phenotype.txt",
	).code !== 0
) {
	executecommand.echo("download failed");
	executecommand.exit(1);
}
if (
	executecommand.exec(
		"wget https://github.com/obophenotype/human-phenotype-ontology/releases/download/v2025-03-03/phenotype.hpoa",
	).code !== 0
) {
	executecommand.echo("download failed");
	executecommand.exit(1);
}
if (
	executecommand.exec(
		"wget https://github.com/obophenotype/human-phenotype-ontology/releases/download/v2025-03-03/phenotype_to_genes.txt",
	).code !== 0
) {
	executecommand.echo("download failed");
	executecommand.exit(1);
}
if (
	executecommand.exec(
		"wget https://ftp.ncbi.nlm.nih.gov/pub/medgen/medgen_pubmed_lnk.txt.gz",
	).code !== 0
) {
	executecommand.echo("download failed");
	executecommand.exit(1);
}
if (
	executecommand.exec(
		"wget https://ftp.ncbi.nlm.nih.gov/pub/medgen/MedGen_HPO_Mapping.txt.gz",
	).code !== 0
) {
	executecommand.echo("download failed");
	executecommand.exit(1);
}
if (
	executecommand.exec(
		"wget https://ftp.ncbi.nlm.nih.gov/pub/medgen/MedGen_HPO_OMIM_Mapping.txt.gz",
	).code !== 0
) {
	executecommand.echo("download failed");
	executecommand.exit(1);
}
if (
	executecommand.exec(
		"wget https://ftp.ncbi.nlm.nih.gov/pub/medgen/MedGenIDMappings.txt.gz",
	).code !== 0
) {
	executecommand.echo("download failed");
	executecommand.exit(1);
}
