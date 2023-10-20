// ==UserScript==
// @name         LSS Easter Egg Checker
// @namespace    www.leitstellenspiel.de
// @version      1.3
// @description  Prüfe auf Ostereier und spiele entsprechende Sounds ab
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

        // Prüfe, ob der Bild-Quelltext das Wort "Pumpkin" enthält
        if (imageSrc.includes('pumpkin')) {
            audioSrc = 'https://github.com/Sobol0202/LSS-EasterEggHunter/raw/main/boo-and-laugh-7060.mp3'; // URL zum Sound für Pumpkin
        } else if (imageSrc.includes('Easter')) {
            audioSrc = 'https://github.com/Sobol0202/LSS-EasterEggHunter/raw/main/jump-15984.mp3'; // URL zum Sound für Easter
        } else if (imageSrc.includes('Christmas')) {
            audioSrc = 'https://github.com/Sobol0202/LSS-EasterEggHunter/raw/main/hohoho-36506.mp3'; // URL zum Sound für Christmas
        }

        if (audioSrc) {
            var audio = new Audio(audioSrc);

            // Zufällige Geschwindigkeit zwischen 0,9 und 1,1 festlegen
            audio.playbackRate = 0.5 + Math.random();

            // Warte auf das 'canplaythrough'-Event, um sicherzustellen, dass der Sound vollständig geladen ist
            audio.addEventListener('canplaythrough', function() {

                // Spiele den Sound ab
                audio.play();

                // Erstelle ein großes rotes Ausrufezeichen und füge es zum Body hinzu
                var exclamationMark = document.createElement('div');
                exclamationMark.innerHTML = '<span style="font-size: 600px;">🎃</span>';
                exclamationMark.style.position = 'fixed';
                exclamationMark.style.top = '0';
                exclamationMark.style.left = '0';
                exclamationMark.style.width = '100%';
                exclamationMark.style.height = '100%';
                exclamationMark.style.display = 'flex';
                exclamationMark.style.justifyContent = 'center';
                exclamationMark.style.alignItems = 'center';
                document.body.appendChild(exclamationMark);

                // Entferne das Ausrufezeichen nach 2 Sekunden
                setTimeout(function() {
                    exclamationMark.remove();
                }, 2000);
            });
        }
    }
})();
