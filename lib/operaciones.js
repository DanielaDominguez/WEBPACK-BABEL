"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saludo = exports.suma = void 0;

var suma = function suma(num1, num2) {
  return num1 + num2;
};

exports.suma = suma;

var resta = function resta(num1, num2) {
  return num1 - num2;
};

var multiplicacion = function multiplicacion(num1, num2) {
  return num1 * num2;
};

var saludo = 'Hola, soy Daniela Domínguez Peña, saludos desde un módulo';
exports.saludo = saludo;