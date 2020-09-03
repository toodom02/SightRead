import { createXML } from './CreateXMLFile';

const GenerateXML = function (Keys, Times, numBars) {

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

    //generates & returns xml
    var xml = createXML(randomKey, randomTime, numBars);

    return xml;
}

export default GenerateXML;