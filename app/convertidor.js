// Funcion que realiza la conversión, recibe un romano y retorna un decimal o un
// mensaje de error si el número romano es invalido.
exports.romanoADecimal = function (romano) {
  var decimal = 0;
  var valorNumero = 0;

  var romanoCaracterActual;
  var romanoCaracterAnterior;

  romano = romano.toLowerCase();

  if (!validarSintaxis(romano)) {
    return "Numero invalido";
  }

  for (var i = romano.length -1; i >= 0; i--) {
    romanoCaracterActual = romano.charAt(i);
    valorNumero = convertirCaracter(romanoCaracterActual);
    if (convertirCaracter(romanoCaracterAnterior) > convertirCaracter(romanoCaracterActual)) {
      decimal = decimal - valorNumero;
    } else {
      decimal = decimal + valorNumero;
      if (decimal > 1000) {
        return "Numero invalido";
      }
    }
    romanoCaracterAnterior = romanoCaracterActual;
  }
  return decimal;
}

// Valida la sintaxis del numero romano usando una expresion regular.
var validarSintaxis = function(romano) {
  var expresionRegular = /^(?:m(?=cm(?:xc)?(?:ix)?$))?(?:c(?=m[^cd]*(?:xc)?[^cd]*$))?m?(?:c(?=d[^c]*(?:xc)?[^c]*$))?d?c{0,2}(?:c(?=xc(?:ix)?$))?(?:x(?=c[^x]*(?:ix)?[^x]*$)(?!.*l))?c?(?:x(?=l[^x]*(?:ix)?[^x]*$))?l?x{0,2}(?:x(?=ix$))?(?:i(?=[xv]$))?x?v?i{0,3}$/;
  return expresionRegular.test(romano);
}

// Convierte un caracter de un numero romano.
var convertirCaracter = function(romanoCaracter) {
  var decimalDigito = 0;
  switch (romanoCaracter) {
    case 'i':
      decimalDigito = 1;
      break;
    case 'v':
      decimalDigito = 5;
      break;
    case 'x':
      decimalDigito = 10;
      break;
    case 'l':
      decimalDigito = 50;
      break;
    case 'c':
      decimalDigito = 100;
      break;
    case 'd':
      decimalDigito = 500;
      break;
    case 'm':
      decimalDigito = 1000;
      break;
    default: // Caracter invalido
      decimalDigito = -1
    break;
  }
  return decimalDigito;
}
