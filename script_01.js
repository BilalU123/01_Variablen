"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
//console.log("Hallo");
//console.log(firstName);

/***** 02 Deklaration + Wertzuweisung *****/

//let firstName; //Deklaration (Definition)
//firstName = "Max"; //Wertzuweisung
//console.log(firstName); //Ausgaben

//let familyName = "Mütze"; //Deklaration + Wertzuweisung
//console.log(familyName);   //Ausgaben
//console.log(firstName +" "+ familyName);

/***** 02 Deklaration + Wertzuweisung 2 *****/

//let firstName,familyName;
//firstName = prompt("Bitte Vorname eingeben");
//familyName = prompt("Bitte Nachname eingeben");
//console.log(firstName +" "+ familyName);

// JS ist eine Untypisierte Sprache! | untyped

//let test;
//test = "Hi";
//test = 2;
//test = true;

//console.log("Datentyp: " + typeof test);
//console.log("Inhalt: "+ test);
/***** 03 Konstanten  *****/

//const test = "hallo";
//test = "hi"; // KEINE neue Zuweisung zur LZ möglich ---> Fehler
//console.log(test);

/**** 04 Beispiel ***** */

// Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

let date = new Date();
let year = date.getFullYear();
console.log(year);

// Wertzuweisung
ageJohn = 25;
ageMark = 30;

// Berechnung
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;

// Ausgabe
console.log("birthYearJohn: "  + birthYearJohn);
console.log("birthYearMark: "  + birthYearMark);

 

