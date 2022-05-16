let nota, suma, promedio, contador: number;
suma = 0;
contador = 1;

while (contador <= 10) {
  nota = Number(prompt("ingrese una nota: "));
  suma = suma + nota;
  contador++;
}
promedio = suma / 10;
console.log("El promedio es de: ", promedio);
