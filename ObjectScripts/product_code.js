"use strict";

function parsePartcode(partcode){
    let positionOfColon =partcode.indexOf(":")
    let positionOfDash= partcode.indexOf("-")
    let sc=partcode.substring(0,positionOfColon)
    let pn=partcode.substring(positionOfColon+1, positionOfDash)
    let ps= partcode.substring(positionOfDash + 1)
   

    let part = {
        supplierCode: sc,
        partNumber: pn,
        partSize: ps,
        partCode: partcode
    }


    return part;

}


function DisplayPart(part){
    console.log(part.partCode);
    console.log("Supplier: " + part.supplierCode);
    console.log("Part Number: " + part.partNumber);
    console.log("Part Size: " + part.partSize);
}

let partcode1 = "ACME:123-L";

let part1 = parsePartcode(partcode1)

DisplayPart(part1);


let partcode2 = "DI:12345-M";


DisplayPart(parsePartcode(partcode2));











// parseandDisplayPartcode("DI:12345-M")
// parseandDisplayPartcode("ACE:12345-M")

// partcode1="ACME:123-L"

// let partcode1={
//    let part1= parsePartcode(partcode1),
   

//    console.log ('Supplier: + ${}')

// }