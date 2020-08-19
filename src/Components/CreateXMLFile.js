export function createXML(keySig, timeSig) {
    var xml =
        `
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.1 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="3.1">
    <work>
        <work-title>Generated</work-title>
    </work>
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
        <measure number="0">
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

    // Handles subsequent bars (11 more)
    var bars = 11;
    var barNum = 1;

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

        if (barNum === bars) {
            xml += `
            <barline location="right">
                <bar-style>light-heavy</bar-style>
            </barline>
        `
        }
        xml +=
            `
        </measure>
    `;
        barNum++
    }

    xml +=
        `
    </part>
</score-partwise>
    `;

    return xml;
}

function getNote(keySig, timeLeft) {

    const randomNote = keySig.notes[Math.floor(Math.random() * keySig.notes.length)];
    // bass cleff note is either 2 or 5 higher than treble
    const randomNote2 = keySig.notes[[(keySig.notes.indexOf(randomNote) + 2) % keySig.notes.length, (keySig.notes.indexOf(randomNote) + 5) % keySig.notes.length][Math.floor(Math.random() * 2)]];
    const randomOctave1 = Math.floor(Math.random() * 2) + 4;
    const randomOctave2 = Math.floor(Math.random() * 2) + 2;

    if (timeLeft >= 4) {
        var duration = [8, 4, 2, 1][Math.floor(Math.random() * 4)];
    }
    else if (timeLeft >= 2) {
        duration = [8, 4, 2][Math.floor(Math.random() * 3)];
    }
    else if (timeLeft >= 1) {
        duration = [8, 4][Math.floor(Math.random() * 2)];
    }
    else {
        duration = 8;
    }

    if (duration === 8) {
        var type = 'eighth';
        timeLeft -= 0.5;
    }
    else if (duration === 4) {
        type = 'quarter';
        timeLeft -= 1;
    }
    else if (duration === 2) {
        type = 'half';
        timeLeft -= 2;
    }
    else if (duration === 1) {
        type = 'whole';
        timeLeft -= 4;
    }

    var note =
        `
            <note>
                <pitch>
                    <step>${randomNote.charAt(0)}</step>
                    <alter>${randomNote.charAt(1)}</alter>
                    <octave>${randomOctave1}</octave>
                </pitch>
                <duration>${duration}</duration>
                <type>${type}</type>
                <staff>1</staff>
            </note>

            <backup>
                <duration>${duration}</duration>
            </backup>

            <note>
                <pitch>
                    <step>${randomNote2.charAt(0)}</step>
                    <alter>${randomNote2.charAt(1)}</alter>
                    <octave>${randomOctave2}</octave>
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
                <divisions>1</divisions>

                <key>
                    <fifths>${keySig.id}</fifths>
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