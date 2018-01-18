/*
  Showing number 0-9 on a Common Anode 7-segment LED display
  Displays the numbers 0-9 on the display, with one second inbetween.
    A
   ---
  F |   | B
  | G |
   ---
  E |   | C
  |   |
   ---
    D
  This example code is in the public domain.
*/
#include <Wire.h>
// Pin 2-8 is connected to the 7 segments of the display.

int pinA = 2;
int pinB = 3;
int pinC = 4;
int pinD = 5;
int pinE = 6;
int pinF = 7;
int pinG = 8;
int D1 = 9;
int D2 = 10;
int D3 = 11;
int D4 = 12;

int LED = 13;
int x = 0;
int teamA = 0;
int teamB = 0;


// the setup routine runs once when you press reset:
void setup() {
  Serial.begin(9600);           // start serial for output
  // initialize the digital pins as outputs.
  pinMode(pinA, OUTPUT);
  pinMode(pinB, OUTPUT);
  pinMode(pinC, OUTPUT);
  pinMode(pinD, OUTPUT);
  pinMode(pinE, OUTPUT);
  pinMode(pinF, OUTPUT);
  pinMode(pinG, OUTPUT);
  pinMode(D1, OUTPUT);
  pinMode(D2, OUTPUT);
  pinMode(D3, OUTPUT);
  pinMode(D4, OUTPUT);

  // Define the LED pin as Output
  pinMode (LED, OUTPUT);
  // Start the I2C Bus as Slave on address 9
  Wire.begin(9);
  // Attach a function to trigger when something is received.
  Wire.onReceive(receiveEvent);
  Serial.println("start");
}

void receiveEvent(int bytes) {
  x = Wire.read();    // read one character from the I2C
  teamA = x / 10;
  teamB = ((teamA * 10) - x)*-1;
  Serial.print(" A: ");
  Serial.print(teamA);
  Serial.print(" - B: ");
  Serial.print(teamB);
  Serial.println("");
}


void number(int nr) {
  switch (nr) {
    case 0:
      digitalWrite(pinA, HIGH);
      digitalWrite(pinB, HIGH);
      digitalWrite(pinC, HIGH);
      digitalWrite(pinD, HIGH);
      digitalWrite(pinE, HIGH);
      digitalWrite(pinF, HIGH);
      digitalWrite(pinG, LOW);
      break;
    case 1:
      digitalWrite(pinA, LOW);
      digitalWrite(pinB, HIGH);
      digitalWrite(pinC, HIGH);
      digitalWrite(pinD, LOW);
      digitalWrite(pinE, LOW);
      digitalWrite(pinF, LOW);
      digitalWrite(pinG, LOW);
      break;

    case 2:
      //2
      digitalWrite(pinA, HIGH);
      digitalWrite(pinB, HIGH);
      digitalWrite(pinC, LOW);
      digitalWrite(pinD, HIGH);
      digitalWrite(pinE, HIGH);
      digitalWrite(pinF, LOW);
      digitalWrite(pinG, HIGH);
      break;

    case 3:
      //3
      digitalWrite(pinA, HIGH);
      digitalWrite(pinB, HIGH);
      digitalWrite(pinC, HIGH);
      digitalWrite(pinD, HIGH);
      digitalWrite(pinE, LOW);
      digitalWrite(pinF, LOW);
      digitalWrite(pinG, HIGH);
      break;

    case 4:
      //4
      digitalWrite(pinA, LOW);
      digitalWrite(pinB, HIGH);
      digitalWrite(pinC, HIGH);
      digitalWrite(pinD, LOW);
      digitalWrite(pinE, LOW);
      digitalWrite(pinF, HIGH);
      digitalWrite(pinG, HIGH);
      break;

    case 5:
      digitalWrite(pinA, HIGH);
      digitalWrite(pinB, LOW);
      digitalWrite(pinC, HIGH);
      digitalWrite(pinD, HIGH);
      digitalWrite(pinE, LOW);
      digitalWrite(pinF, HIGH);
      digitalWrite(pinG, HIGH);
      break;

    case 6:
      //6
      digitalWrite(pinA, HIGH);
      digitalWrite(pinB, LOW);
      digitalWrite(pinC, HIGH);
      digitalWrite(pinD, HIGH);
      digitalWrite(pinE, HIGH);
      digitalWrite(pinF, HIGH);
      digitalWrite(pinG, HIGH);
      break;

    case 7:
      //7
      digitalWrite(pinA, HIGH);
      digitalWrite(pinB, HIGH);
      digitalWrite(pinC, HIGH);
      digitalWrite(pinD, LOW);
      digitalWrite(pinE, LOW);
      digitalWrite(pinF, LOW);
      digitalWrite(pinG, LOW);
      break;

    case 8:
      //8
      digitalWrite(pinA, HIGH);
      digitalWrite(pinB, HIGH);
      digitalWrite(pinC, HIGH);
      digitalWrite(pinD, HIGH);
      digitalWrite(pinE, HIGH);
      digitalWrite(pinF, HIGH);
      digitalWrite(pinG, HIGH);
      break;

    case 9:
      //9
      digitalWrite(pinA, HIGH);
      digitalWrite(pinB, HIGH);
      digitalWrite(pinC, HIGH);
      digitalWrite(pinD, HIGH);
      digitalWrite(pinE, LOW);
      digitalWrite(pinF, HIGH);
      digitalWrite(pinG, HIGH);
      break;

  }
}


// the loop routine runs over and over again forever:
void loop() {
  digitalWrite(D1, LOW);
  digitalWrite(D2, HIGH);
  digitalWrite(D3, HIGH);
  digitalWrite(D4, HIGH);

  number(teamA);
  delay(1);
  digitalWrite(D1, HIGH);
  digitalWrite(D2, HIGH);
  digitalWrite(D3, LOW);
  digitalWrite(D4, HIGH);
  number(teamB);
  delay(1);
}


// END OF PROGRAMM







// Single Numbers

//  digitalWrite(D1, LOW);
//  digitalWrite(D2, HIGH);
//  digitalWrite(D3, HIGH);
//  digitalWrite(D4, HIGH);
//  //0
//  digitalWrite(pinA, HIGH);
//  digitalWrite(pinB, HIGH);
//  digitalWrite(pinC, HIGH);
//  digitalWrite(pinD, HIGH);
//  digitalWrite(pinE, HIGH);
//  digitalWrite(pinF, HIGH);
//  digitalWrite(pinG, LOW);
//  delay(500);               // wait for a second
//
//  digitalWrite(D1, HIGH);
//  digitalWrite(D2, LOW);
//  digitalWrite(D3, HIGH);
//  digitalWrite(D4, HIGH);
//  //1
//  digitalWrite(pinA, LOW);
//  digitalWrite(pinB, HIGH);
//  digitalWrite(pinC, HIGH);
//  digitalWrite(pinD, LOW);
//  digitalWrite(pinE, LOW);
//  digitalWrite(pinF, LOW);
//  digitalWrite(pinG, LOW);
//  delay(500);               // wait for a second
//
//  digitalWrite(D1, HIGH);
//  digitalWrite(D2, HIGH);
//  digitalWrite(D3, LOW);
//  digitalWrite(D4, HIGH);
//
//  //2
//  digitalWrite(pinA, HIGH);
//  digitalWrite(pinB, HIGH);
//  digitalWrite(pinC, LOW);
//  digitalWrite(pinD, HIGH);
//  digitalWrite(pinE, HIGH);
//  digitalWrite(pinF, LOW);
//  digitalWrite(pinG, HIGH);
//  delay(500);               // wait for a second
//
//  digitalWrite(D1, HIGH);
//  digitalWrite(D2, HIGH);
//  digitalWrite(D3, HIGH);
//  digitalWrite(D4, LOW);
//
//  //3
//  digitalWrite(pinA, HIGH);
//  digitalWrite(pinB, HIGH);
//  digitalWrite(pinC, HIGH);
//  digitalWrite(pinD, HIGH);
//  digitalWrite(pinE, LOW);
//  digitalWrite(pinF, LOW);
//  digitalWrite(pinG, HIGH);
//  delay(500);               // wait for a second
//
//  digitalWrite(D1, LOW);
//  digitalWrite(D2, HIGH);
//  digitalWrite(D3, HIGH);
//  digitalWrite(D4, HIGH);
//
//  //4
//  digitalWrite(pinA, LOW);
//  digitalWrite(pinB, HIGH);
//  digitalWrite(pinC, HIGH);
//  digitalWrite(pinD, LOW);
//  digitalWrite(pinE, LOW);
//  digitalWrite(pinF, HIGH);
//  digitalWrite(pinG, HIGH);
//  delay(500);               // wait for a second
//
//  digitalWrite(D1, HIGH);
//  digitalWrite(D2, LOW);
//  digitalWrite(D3, HIGH);
//  digitalWrite(D4, HIGH);
//
//  //5
//  digitalWrite(pinA, HIGH);
//  digitalWrite(pinB, LOW);
//  digitalWrite(pinC, HIGH);
//  digitalWrite(pinD, HIGH);
//  digitalWrite(pinE, LOW);
//  digitalWrite(pinF, HIGH);
//  digitalWrite(pinG, HIGH);
//  delay(500);               // wait for a second
//
//  digitalWrite(D1, HIGH);
//  digitalWrite(D2, HIGH);
//  digitalWrite(D3, LOW);
//  digitalWrite(D4, HIGH);
//
//  //6
//  digitalWrite(pinA, HIGH);
//  digitalWrite(pinB, LOW);
//  digitalWrite(pinC, HIGH);
//  digitalWrite(pinD, HIGH);
//  digitalWrite(pinE, HIGH);
//  digitalWrite(pinF, HIGH);
//  digitalWrite(pinG, HIGH);
//  delay(500);               // wait for a second
//
//  digitalWrite(D1, HIGH);
//  digitalWrite(D2, HIGH);
//  digitalWrite(D3, HIGH);
//  digitalWrite(D4, LOW);
//
//
//  //7
//  digitalWrite(pinA, HIGH);
//  digitalWrite(pinB, HIGH);
//  digitalWrite(pinC, HIGH);
//  digitalWrite(pinD, LOW);
//  digitalWrite(pinE, LOW);
//  digitalWrite(pinF, LOW);
//  digitalWrite(pinG, LOW);
//  delay(500);               // wait for a second
//
//  digitalWrite(D1, LOW);
//  digitalWrite(D2, HIGH);
//  digitalWrite(D3, HIGH);
//  digitalWrite(D4, HIGH);
//
//  //8
//  digitalWrite(pinA, HIGH);
//  digitalWrite(pinB, HIGH);
//  digitalWrite(pinC, HIGH);
//  digitalWrite(pinD, HIGH);
//  digitalWrite(pinE, HIGH);
//  digitalWrite(pinF, HIGH);
//  digitalWrite(pinG, HIGH);
//  delay(500);               // wait for a second
//
//  digitalWrite(D1, HIGH);
//  digitalWrite(D2, LOW);
//  digitalWrite(D3, HIGH);
//  digitalWrite(D4, HIGH);
//
//  //9
//  digitalWrite(pinA, HIGH);
//  digitalWrite(pinB, HIGH);
//  digitalWrite(pinC, HIGH);
//  digitalWrite(pinD, HIGH);
//  digitalWrite(pinE, LOW);
//  digitalWrite(pinF, HIGH);
//  digitalWrite(pinG, HIGH);
//  delay(500);               // wait for a second