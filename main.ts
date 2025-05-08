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

import { hpomapfunction } from "./hpomapinterface";
import { omiminterfacefunction } from "./medgenhpointerface";
import { readmedgenfunction } from "./medgenidmappings";
import { mappubmedfunction } from "./medgenmappubmed";

import
          function main() {
                    hpomapfunction();
                    omiminterfacefunction();
                    readmedgenfunction();
                    mappubmedfunction();

          }
main();
