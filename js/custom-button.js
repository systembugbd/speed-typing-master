// function addScript(src, callback) {
//     var s = document.createElement('script');
//     s.setAttribute('src', src);
//     s.onload = callback;
//     document.body.appendChild(s);
// }

function activeKeyBoard(keyValue, textareaId) {
    console.log(keyValue)
    var showMsg = document.getElementById('message');

    showMsg.innerHTML = "English Int. is active now";

    //var editorattr = editorBangla.getAttribute('aria-hidden');

    if (keyValue == 'bvkphonetic') {
        showMsg.innerHTML = "Phonetic is active now";
        makePhoneticEditor(textareaId);


    } else if (keyValue == 'bvkinscript') {
        showMsg.innerHTML = "Inscript is active now";
        makeInscriptEditor(textareaId);


    } else if (keyValue == 'bvkunijoy') {
        showMsg.innerHTML = "Unijoy is active now";
        makeUnijoyEditor(textareaId);


    } else if (keyValue == 'bvkprobh') {
        showMsg.innerHTML = "Probhat is active now";
        makeProbhatEditor(textareaId);



    } else if (keyValue == 'bvkphonetici') {
        showMsg.innerHTML = "Phonetic Int. is active now";
        makePhoneticiEditor(textareaId);


    } else if (keyValue == 'bvkavro') {
        showMsg.innerHTML = "Avro is active now";
        OmicronLab.Avro.Phonetic();
    } else if (keyValue == 'bvkenglish') {
        showMsg.innerHTML = "English is active now";
    } else {
        showMsg.innerHTML = "English is active now";
    }
}