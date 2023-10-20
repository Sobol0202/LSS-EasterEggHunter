// ==UserScript==
// @name         LSS Easter Egg Checker
// @namespace    www.leitstellenspiel.de
// @version      1.4
// @description  Prüfe auf Ostereier und zeige das entsprechende Symbol im Easter-Egg-Element kurz in Groß an
// @author       MissSobol
// @match        https://www.leitstellenspiel.de/missions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Prüfe, ob das Element mit der ID "easter-egg-link" vorhanden ist
    var easterEggLink = document.getElementById('easter-egg-link');

    if (easterEggLink) {
        var imageSrc = easterEggLink.querySelector('img').getAttribute('src');
        var audioSrc = '';
        var symbol = '';

        // Prüfe, ob der Bild-Quelltext das Wort "Pumpkin" enthält
        if (imageSrc.includes('pumpkin')) {
            audioSrc = 'https://github.com/Sobol0202/LSS-EasterEggHunter/raw/main/boo-and-laugh-7060.mp3'; // URL zum Sound für Pumpkin
            symbol = '🎃';
        } else if (imageSrc.includes('Easter')) {
            audioSrc = 'https://github.com/Sobol0202/LSS-EasterEggHunter/raw/main/jump-15984.mp3'; // URL zum Sound für Easter
            symbol = '🐰';
        } else if (imageSrc.includes('Christmas')) {
            audioSrc = 'https://github.com/Sobol0202/LSS-EasterEggHunter/raw/main/hohoho-36506.mp3'; // URL zum Sound für Christmas
            symbol = '🎁';
        }

        if (audioSrc) {
            var audio = new Audio(audioSrc);

            // Zufällige Geschwindigkeit zwischen 0,9 und 1,1 festlegen
            audio.playbackRate = 0.5 + Math.random();

            // Warte auf das 'canplaythrough'-Event, um sicherzustellen, dass der Sound vollständig geladen ist
            audio.addEventListener('canplaythrough', function() {

                // Spiele den Sound ab
                audio.play();

                // Zeige das Symbol für 2 Sekunden an
                var symbolElement = document.createElement('div');
                symbolElement.innerHTML = '<span style="font-size: 600px;">' + symbol + '</span>';
                symbolElement.style.position = 'fixed';
                symbolElement.style.top = '0';
                symbolElement.style.left = '0';
                symbolElement.style.width = '100%';
                symbolElement.style.height = '100%';
                symbolElement.style.display = 'flex';
                symbolElement.style.justifyContent = 'center';
                symbolElement.style.alignItems = 'center';
                symbolElement.style.zIndex = '999999';
                document.body.appendChild(symbolElement);

                // Schließe das Symbol nach 2 Sekunden
                setTimeout(function() {
                    symbolElement.remove();
                }, 2000);
            });
        }
    }
})();
