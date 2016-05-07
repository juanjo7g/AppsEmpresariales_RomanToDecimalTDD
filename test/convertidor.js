// Archivo test para el convertidor de números romanos a decimales.
var expect    = require("chai").expect;
var convertidor = require("../app/convertidor");

describe("Convertir de Romano a Decimal", function() {
  it("Convertir I a decimal", function() {
    var decimal = convertidor.romanoADecimal("I");
    expect(decimal).to.equal(1);
  });
  it("Convertir II a decimal", function() {
    var decimal = convertidor.romanoADecimal("II");
    expect(decimal).to.equal(2);
  });
  it("Convertir III a decimal", function() {
    var decimal = convertidor.romanoADecimal("III");
    expect(decimal).to.equal(3);
  });
  it("Convertir IV a decimal", function() {
    var decimal = convertidor.romanoADecimal("IV");
    expect(decimal).to.equal(4);
  });
  it("Convertir iii (minuscula) a decimal", function() {
    var decimal = convertidor.romanoADecimal("iii");
    expect(decimal).to.equal(3);
  });
  it("Convertir V a decimal", function() {
    var decimal = convertidor.romanoADecimal("V");
    expect(decimal).to.equal(5);
  });
  it("Convertir VI a decimal", function() {
    var decimal = convertidor.romanoADecimal("VI");
    expect(decimal).to.equal(6);
  });
  it("Convertir VII a decimal", function() {
    var decimal = convertidor.romanoADecimal("VII");
    expect(decimal).to.equal(7);
  });
  it("Convertir VIII a decimal", function() {
    var decimal = convertidor.romanoADecimal("VIII");
    expect(decimal).to.equal(8);
  });
  it("Convertir IX a decimal", function() {
    var decimal = convertidor.romanoADecimal("IX");
    expect(decimal).to.equal(9);
  });
  it("Convertir X a decimal", function() {
    var decimal = convertidor.romanoADecimal("X");
    expect(decimal).to.equal(10);
  });
  it("Convertir XIV a decimal", function() {
    var decimal = convertidor.romanoADecimal("XIV");
    expect(decimal).to.equal(14);
  });
  it("Convertir XIX a decimal", function() {
    var decimal = convertidor.romanoADecimal("XIX");
    expect(decimal).to.equal(19);
  });
  it("Convertir XXIV a decimal", function() {
    var decimal = convertidor.romanoADecimal("XXIV");
    expect(decimal).to.equal(24);
  });
  it("Convertir XXIX a decimal", function() {
    var decimal = convertidor.romanoADecimal("XXIX");
    expect(decimal).to.equal(29);
  });
  it("Convertir XL a decimal", function() {
    var decimal = convertidor.romanoADecimal("XL");
    expect(decimal).to.equal(40);
  });
  it("Convertir XLIV a decimal", function() {
    var decimal = convertidor.romanoADecimal("XLIV");
    expect(decimal).to.equal(44);
  });
  it("Convertir C a decimal", function() {
    var decimal = convertidor.romanoADecimal("C");
    expect(decimal).to.equal(100);
  });
  it("Convertir D a decimal", function() {
    var decimal = convertidor.romanoADecimal("D");
    expect(decimal).to.equal(500);
  });
  it("Convertir M a decimal", function() {
    var decimal = convertidor.romanoADecimal("M");
    expect(decimal).to.equal(1000);
  });
  it("Convertir CMXCRX (contiene caracter invalido) a decimal", function() {
    var decimal = convertidor.romanoADecimal("CMXCRX");
    expect(decimal).to.equal("Numero invalido");
  });
  it("Convertir -M (no se aceptan numeros negativos) a decimal", function() {
    var decimal = convertidor.romanoADecimal("-M");
    expect(decimal).to.equal("Numero invalido");
  });
  it("Convertir XxIV (combinacion mayusculas y minusculas) a decimal", function() {
    var decimal = convertidor.romanoADecimal("XxIV");
    expect(decimal).to.equal(24);
  });
  it("Convertir XLX (Sintaxis invalida) a decimal", function() {
    var decimal = convertidor.romanoADecimal("XLX");
    expect(decimal).to.equal("Numero invalido");
  });
  it("Convertir MM (Fuera del rango) a decimal", function() {
    var decimal = convertidor.romanoADecimal("MM");
    expect(decimal).to.equal("Numero invalido");
  });
  it("Convertir IIX (Sintaxis invalida) a decimal", function() {
    var decimal = convertidor.romanoADecimal("IIX");
    expect(decimal).to.equal("Numero invalido");
  });
  it("Convertir IVI (Sintaxis invalida) a decimal", function() {
    var decimal = convertidor.romanoADecimal("IVI");
    expect(decimal).to.equal("Numero invalido");
  });
  it("Convertir IXI (Sintaxis invalida) a decimal", function() {
    var decimal = convertidor.romanoADecimal("IXI");
    expect(decimal).to.equal("Numero invalido");
  });
  it("Convertir CCXXXV a decimal", function() {
    var decimal = convertidor.romanoADecimal("CCXXXV");
    expect(decimal).to.equal(235);
  });
  it("Convertir DCCXXXV a decimal", function() {
    var decimal = convertidor.romanoADecimal("DCCXXXV");
    expect(decimal).to.equal(735);
  });
  it("Convertir CCCLVII a decimal", function() {
    var decimal = convertidor.romanoADecimal("CCCLVII");
    expect(decimal).to.equal(357);
  });
});
