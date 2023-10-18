// ==UserScript==
// @name         LSS Easter Egg Checker
// @namespace    www.leitstellenspiel.de
// @version      1.0
// @description  Prüfe ob Osterei, wenn ja Ton und Ausrufezeichen
// @author       MissSobol
// @match        https://www.leitstellenspiel.de/missions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Prüfe, ob das Element mit der ID "easter-egg-link" vorhanden ist
    var easterEggLink = document.getElementById('easter-egg-link');

if (easterEggLink) {
    // Lade den vorhandenen Sound auf der Website
    var audio = new Audio('https://github.com/Sobol0202/LSS-EasterEggHunter/raw/main/decidemp3-14575.mp3');

    // Warte auf das 'canplaythrough'-Event, um sicherzustellen, dass der Sound vollständig geladen ist
    audio.addEventListener('canplaythrough', function() {

        // Spiele den Sound ab
        audio.play();

        // Erstelle ein großes rotes Ausrufezeichen und füge es zum Body hinzu
        var exclamationMark = document.createElement('div');
        exclamationMark.innerHTML = '<span style="font-size: 1000px; color: red;">!!!</span>'; // Passen Sie die Schriftgröße an, um das Ausrufezeichen zu vergrößern
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
})();
