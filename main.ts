/*
 Author Gaurav Sablok
 Instytut Chemii Bioorganicznej
 Polskiej Akademii Nauk
 ul. Noskowskiego 12/14 | 61-704, Poznań
 Date: 2025-5-7
*/

/*
calling all the HTML and the innerHTML interfaces here.
*/

import { hpomapfunction } from "./medgensrc/hpomapinterface";
import { omiminterfacefunction } from "./medgensrc/medgenhpointerface";
import { readmedgenfunction } from "./medgensrc/medgenidmappings";
import { mappubmedfunction } from "./medgensrc/medgenmappubmed";

import
          function main() {
                    hpomapfunction();
                    omiminterfacefunction();
                    readmedgenfunction();
                    mappubmedfunction();

          }
main();
