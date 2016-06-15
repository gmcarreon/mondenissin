$(document).ready(function () {
            var mond = "Monde Nissin";
            var text = mond;
            var length = text.length;
            var timeOut;
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

            var svg = document.getElementById("yad");
            var z = 10;

            for (var x = 0; x < 35; x++) {
                var q1 = x + 71;
                var q2 = x + 140;
                var q3 = x + 105;
                var newAtt1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
                var newAtt2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
                var newAtt3 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

                if (x > 20 && z > 0) {
                    newAtt1.setAttribute("d", "M0,0 Q" + q1 + "," + z + " 20,100");
                    newAtt2.setAttribute("d", "M70,3 Q" + q2 + "," + z + " 90,100");
                    newAtt3.setAttribute("d", "M40,3 Q" + q3 + "," + z + " 41,125");
                    z--;
                }
                else {
                    newAtt1.setAttribute("d", "M0,0 Q" + q1 + "," + z + " 20,100");
                    newAtt2.setAttribute("d", "M70,3 Q" + q2 + "," + z + " 90,100");
                    newAtt3.setAttribute("d", "M40,3 Q" + q3 + "," + z + " 41,125");
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