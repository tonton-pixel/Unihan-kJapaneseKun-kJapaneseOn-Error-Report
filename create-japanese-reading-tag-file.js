//
// You'll need Node.js <https://nodejs.org> installed on your computer in order to run this script.
// From a terminal:
// $ cd [working directory containing this script and the associated data files]
// $ npm install simple-romaji-kana
// $ node create-japanese-reading-tag-file.js
//
let start = new Date ();
//
const fs = require ('fs');
const path = require ('path');
//
const { romajiToKana } = require ('simple-romaji-kana');
//
const codePoints = { };
//
// Parse relevant lines of tab-separated files into a single data structure
const inFiles =
[
    'Unihan_Readings.txt', // Must be first
    'Unihan_Readings_kJapaneseKun-Corrected.txt', // Override kJapaneseKun fields
    'Unihan_Readings_kJapaneseOn-Corrected.txt' // Override kJapaneseOn fields
];
for (let file of inFiles)
{
    let lines = fs.readFileSync (path.join (__dirname, file), { encoding: 'utf8' }).split ("\n");
    for (let line of lines)
    {
        if (line && (line[0] !== "#"))
        {
            let fields = line.split ("\t");
            let codePoint = fields[0];
            let tag = fields[1];
            let value = fields[2];
            if ((tag === "kJapaneseKun") || (tag === "kJapaneseOn"))
            {
                if (!(codePoint in codePoints))
                {
                    codePoints[codePoint] = { };
                }
                codePoints[codePoint][tag] = (value) ? value.split (" ") : [ ];
            }
        }
    }
}
//
let stop = new Date ();
console.log (`Parsed input files in ${((stop - start) / 1000).toFixed (2)} seconds`);
//
// console.log (JSON.stringify (codePoints, null, 4));
//
function createTagFile (unihanTag, isKana)
{
    let start = new Date ();
    //
    let convert = isKana ? romajiToKana : (dummy) => dummy;
    // Create from the single data structure a tab-separated file with new tag and converted values
    const outFile = `Unihan_Readings_${unihanTag}-Experimental.txt`;
    let lines = [ ];
    for (let codePoint in codePoints)
    {
        let onReadings = codePoints[codePoint]["kJapaneseOn"] || [ ];
        let kunReadings = codePoints[codePoint]["kJapaneseKun"] || [ ];
        onReadings = onReadings.map (value => convert (value.toUpperCase ()));
        kunReadings = kunReadings.map (value => convert (value.toLowerCase ()));
        let readings = [ ...onReadings, ...kunReadings ];
        if (readings.length > 0)
        {
            lines.push (`${codePoint}\t${unihanTag}\t${readings.join (" ")}\n`);
        }
    }
    fs.writeFileSync (path.join (__dirname, outFile), lines.join (""), { encoding: 'utf8' });
    //
    let stop = new Date ();
    console.log (`Created file in ${((stop - start) / 1000).toFixed (2)} seconds:\n${path.join (__dirname, outFile)}`);
}
//
createTagFile ("kJapaneseOnKun");
createTagFile ("kJapanese", true);
//
