function generateNotes(keySig) {
    var MidiWriter = require('midi-writer-js');

    const arr = [2, 4, 8];

    var notes = [];

    var i;
    for (i = 0; i < 20; i++) {
        var note = new MidiWriter.NoteEvent({
            pitch: (keySig.notes[Math.floor(Math.random() * keySig.notes.length)]),
            duration: (arr[Math.floor(Math.random() * arr.length)])
        });
        notes.push(note);
    }

    return notes
}

function generateXML(keySig) {
    const MusicAutomaton = require('music-automaton');

    const metaData = new MusicAutomaton.MetaData('Generated Passage', 'ComposerName', 'PoetName', 'Rights');
    const scale = new MusicAutomaton.Scale(keySig.name, 'I');
    const xml = MusicAutomaton.default(metaData, scale);

    return xml
}


const GenerateMidi = function (Keys, Times) {

    var MidiWriter = require('midi-writer-js');

    // Creates new array of all time sigs selected
    let selectedTimes = [];
    for (let i = 0; i < Times.length; i++) {
        if (Times[i].value) selectedTimes.push(Times[i])
    }

    // Selects random time signature
    const randomTime = selectedTimes[Math.floor(Math.random() * selectedTimes.length)];

    // Creates new array of all key sigs selected
    let selectedKeys = [];
    for (let i = 0; i < Keys.length; i++) {
        if (Keys[i].value) selectedKeys.push(Keys[i])
    }

    // Selects random key signature
    const randomKey = selectedKeys[Math.floor(Math.random() * selectedKeys.length)];

    /* 
    //Generates & returns MIDI File
    var track = new MidiWriter.Track();

    track.setTimeSignature(randomTime.num, randomTime.denom);

    track.setKeySignature(randomKey.name);

    track.addEvent(generateNotes(randomKey), function (event, index) {
        return { sequential: true };
    }
    );

    var write = new MidiWriter.Writer(track);
    console.log(write.dataUri());
    return write.dataUri();
    */

    //generates & returns xml
    var xml = generateXML(randomKey);
    return xml;


}

export default GenerateMidi;


