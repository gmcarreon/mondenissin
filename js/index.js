$(document).ready(function () {
    var mond = "Monde Nissin";
    var TM = "TM";
    var text = mond;
    var text2 = TM;
    var length = text.length;
    var length2 = text2.length;
    var timeOut;
    var timeOutTM;
    var character = 0;

    (function typeWriter() {
        timeOut = setTimeout(function () {
            var type = text.substring(0, character);
            $('.typewriter').text(type);
            character++;
            typeWriter();

            if (character > length) {
                clearTimeout(timeOut);
            }
        }, 200);
    } ());

    setTimeout(function () {
        var char = 0;
        (function typeWriterTM() {
            timeOutTM = setTimeout(function () {
                var type = text2.substring(0, char);
                $('.typewriterTM').text(type);
                char++;
                typeWriterTM();

                if (char > length2) {
                    clearTimeout(timeOutTM);
                }
            }, 200);
        } ());
    }, 7300);


    var svg = document.getElementById("yad");
    var z = 10;

    for (var x = 0; x < 35; x++) {
        var q1 = x + 71;
        var q2 = x + 141;
        var q3 = x + 106;
        var newAtt1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        var newAtt2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        var newAtt3 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

        if (x > 20 && z > 0) {
            newAtt1.setAttribute("d", "M0,0 Q" + q1 + "," + z + " 20,100");
            newAtt2.setAttribute("d", "M67,4 Q" + q2 + "," + z + " 90,100");
            newAtt3.setAttribute("d", "M34,2 Q" + q3 + "," + z + " 41,125");
            z--;
        }
        else {
            newAtt1.setAttribute("d", "M0,0 Q" + q1 + "," + z + " 20,100");
            newAtt2.setAttribute("d", "M67,4 Q" + q2 + "," + z + " 90,100");
            newAtt3.setAttribute("d", "M34,2 Q" + q3 + "," + z + " 41,125");
        }
        newAtt1.setAttribute("class", "logo__fill");
        newAtt1.style.strokeWidth = "1";
        newAtt1.style.fill = "none";
        newAtt2.setAttribute("class", "logo__fill");
        newAtt2.style.strokeWidth = "1";
        newAtt2.style.fill = "none";
        newAtt3.setAttribute("class", "logo__fillmid");
        newAtt3.style.strokeWidth = "1";
        newAtt3.style.fill = "none";
        svg.appendChild(newAtt1);
        svg.appendChild(newAtt2);
        svg.appendChild(newAtt3);
    }
});