export function createXML(keySig, timeSig, numBars) {
    var xml =
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.1 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="3.1">
    <work>
        <work-title>Generated</work-title>
    </work>
    <identification>
        <creator>SightRead</creator>
    </identification>
    <part-list>
        <score-part id="P1">
            <part-name> </part-name>
        </score-part>
    </part-list>
    <part id="P1">
        `;

    var attributes = getAttributes(keySig, timeSig);

    //First Bar (with attributes)
    xml +=
        `
        <measure number="1">
    ${attributes}
  `;

    var timeLeft = timeSig.crotchetBeats;

    while (timeLeft > 0) {

        var [note, timeLeft] = getNote(keySig, timeLeft);
        xml += note;
    }

    xml +=
        `
        </measure>
    `;

    // Handles subsequent bars
    var bars = numBars - 1;
    var barNum = 2;

    while (barNum <= bars) {
        xml +=
            `
        <measure number="${barNum}">
        `;
        timeLeft = timeSig.crotchetBeats;

        while (timeLeft > 0) {
            [note, timeLeft] = getNote(keySig, timeLeft);
            xml += note;
        }

        xml +=
            `
        </measure>
        `;
        barNum++
    }

    // Final bar whole note on key
    var randomNote1 = keySig.notes[[(keySig.notes.indexOf(keySig.name) + 2) % keySig.notes.length, (keySig.notes.indexOf(keySig.name) + 5) % keySig.notes.length][Math.floor(Math.random() * 2)]];
    var randomOctave1 = Math.floor(Math.random() * 2) + 4;
    var randomOctave2 = Math.floor(Math.random() * 2) + 2;

    xml += `
        <measure number="${bars + 1}">
            <note>
                <pitch>
                    <step>${randomNote1.charAt(0)}</step>
                    <alter>${randomNote1.slice(-2)}</alter>
                    <octave>${randomOctave1}</octave>
                </pitch>
                <duration>8</duration>
                <type>whole</type>
                <staff>1</staff>
            </note>

            <backup>
                <duration>8</duration>
            </backup>

            <note>
                <pitch>
                    <step>${keySig.name.charAt(0)}</step>
                    <alter>${keySig.name.slice(-2)}</alter>
                    <octave>${randomOctave2}</octave>
                </pitch>
                <duration>8</duration>
                <type>whole</type>
                <staff>2</staff>
            </note>
            <barline location="right">
                <bar-style>light-heavy</bar-style>
            </barline>
        </measure>`

    xml +=
        `
    </part>
</score-partwise>`;

    return xml;
}

function getNote(keySig, timeLeft) {

    const randomNoteBass = keySig.notes[Math.floor(Math.random() * keySig.notes.length)];
    //const randomNoteTreble = keySig.notes[Math.floor(Math.random() * keySig.notes.length)];
    // bass cleff note is either the same, or 2 or 5 higher than treble
    //const randomNoteBass = keySig.notes[[keySig.notes.indexOf(randomNoteTreble), (keySig.notes.indexOf(randomNoteTreble) + 2) % keySig.notes.length, (keySig.notes.indexOf(randomNoteTreble) + 5) % keySig.notes.length][Math.floor(Math.random() * 3)]];
    const randomOctaveTreble = Math.floor(Math.random() * 2) + 4;
    const randomOctaveBass = Math.floor(Math.random() * 2) + 2;

    if (timeLeft >= 4) {
        var duration = [8, 4, 2, 1][Math.floor(Math.random() * 4)];
    }
    else if (timeLeft >= 2) {
        duration = [4, 2, 1][Math.floor(Math.random() * 3)];
    }
    else if (timeLeft >= 1) {
        duration = [2, 1][Math.floor(Math.random() * 2)];
    }
    else {
        duration = 1;
    }

    if (duration === 1) {
        var type = 'eighth';
        timeLeft -= 0.5;
        var trebleDuration = 1;

    }
    else if (duration === 2) {
        type = 'quarter';
        timeLeft -= 1;
        trebleDuration = [2, 1][Math.floor(Math.random() * 2)];
    }
    else if (duration === 4) {
        type = 'half';
        timeLeft -= 2;
        trebleDuration = [4, 2, 1][Math.floor(Math.random() * 3)];
    }
    else if (duration === 8) {
        type = 'whole';
        timeLeft -= 4;
        trebleDuration = [4, 2, 1][Math.floor(Math.random() * 3)];
    }

    var lastNote = randomNoteBass;
    var notes = [];

    if (trebleDuration === 1) {
        var count = 2 // includes length of firstNote
        var trebleType = 'eighth';

        var firstNote = keySig.notes[
            [keySig.notes.indexOf(lastNote),
            (keySig.notes.indexOf(lastNote) + 2) % keySig.notes.length,
            (keySig.notes.indexOf(lastNote) + 5) % keySig.notes.length][Math.floor(Math.random() * 3)]];
        notes.push(firstNote);

        while (count <= duration) {
            var randomNoteTreble = keySig.notes[
                [keySig.notes.indexOf(lastNote),
                (keySig.notes.indexOf(lastNote) + 1) % keySig.notes.length,
                (keySig.notes.indexOf(lastNote) + 2) % keySig.notes.length,
                (keySig.notes.indexOf(lastNote) + 5) % keySig.notes.length,
                (keySig.notes.indexOf(lastNote) + 6) % keySig.notes.length][Math.floor(Math.random() * 5)]];
            notes.push(randomNoteTreble);
            lastNote = randomNoteTreble;
            count++;
        }
    }

    else if (trebleDuration === 2) {
        count = 4 // includes length of firstNote
        trebleType = 'quarter';

        firstNote = keySig.notes[
            [keySig.notes.indexOf(lastNote),
            (keySig.notes.indexOf(lastNote) + 2) % keySig.notes.length,
            (keySig.notes.indexOf(lastNote) + 5) % keySig.notes.length][Math.floor(Math.random() * 3)]];
        notes.push(firstNote);

        while (count <= duration) {
            randomNoteTreble = keySig.notes[
                [keySig.notes.indexOf(lastNote),
                (keySig.notes.indexOf(lastNote) + 1) % keySig.notes.length,
                (keySig.notes.indexOf(lastNote) + 2) % keySig.notes.length,
                (keySig.notes.indexOf(lastNote) + 5) % keySig.notes.length,
                (keySig.notes.indexOf(lastNote) + 6) % keySig.notes.length][Math.floor(Math.random() * 5)]];
            notes.push(randomNoteTreble);
            lastNote = randomNoteTreble;
            count += 2;
        }
    }

    else if (trebleDuration === 4) {
        count = 8 // includes length of firstNote
        trebleType = 'half';

        firstNote = keySig.notes[
            [keySig.notes.indexOf(lastNote),
            (keySig.notes.indexOf(lastNote) + 5) % keySig.notes.length][Math.floor(Math.random() * 2)]];
        notes.push(firstNote);

        while (count <= duration) {
            randomNoteTreble = keySig.notes[
                [keySig.notes.indexOf(lastNote),
                (keySig.notes.indexOf(lastNote) + 1) % keySig.notes.length,
                (keySig.notes.indexOf(lastNote) + 2) % keySig.notes.length,
                (keySig.notes.indexOf(lastNote) + 5) % keySig.notes.length,
                (keySig.notes.indexOf(lastNote) + 6) % keySig.notes.length][Math.floor(Math.random() * 5)]];
            notes.push(randomNoteTreble);
            lastNote = randomNoteTreble;
            count += 4;
        }
    }

    var note = "";
    var i;

    for (i = 0; i < notes.length; i++) {
        note += `            
            <note>
                <pitch>
                    <step>${notes[i].charAt(0)}</step>
                    <alter>${notes[i].slice(-2)}</alter>
                    <octave>${randomOctaveTreble}</octave>
                </pitch>
                <duration>${trebleDuration}</duration>
                <type>${trebleType}</type>
                <staff>1</staff>
            `;

        if (trebleDuration === 1 && notes.length > 1) {
            if (i === 0) {
                note += '<beam number="1">begin</beam>';
            }
            else if (i == notes.length - 1) {
                note += '<beam number="1">end</beam>';
            }
            else {
                note += '<beam number="1">continue</beam>';
            }
        }
        note += `
            </note>
        `;
    }



    note +=
        `
            <backup>
                <duration>${duration}</duration>
            </backup>

            <note>
                <pitch>
                    <step>${randomNoteBass.charAt(0)}</step>
                    <alter>${randomNoteBass.slice(-2)}</alter>
                    <octave>${randomOctaveBass}</octave>
                </pitch>
                <duration>${duration}</duration>
                <type>${type}</type>
                <staff>2</staff>
            </note>
        `;

    return [note, timeLeft];
}

function getAttributes(keySig, timeSig) {
    var attributes = `
            <attributes>
                <divisions>2</divisions>

                <key>
                    <fifths>${keySig.fifths}</fifths>
                    <mode>${keySig.mode}</mode>
                </key>
                <time>
                    <beats>${timeSig.num}</beats>
                    <beat-type>${timeSig.denom}</beat-type>
                </time>

                <staves>2</staves>
                    <clef number="1">
                        <sign>G</sign>
                        <line>2</line>
                    </clef>
                    <clef number="2">
                        <sign>F</sign>
                        <line>4</line>
                    </clef>
            </attributes >
    `;

    return attributes;
}