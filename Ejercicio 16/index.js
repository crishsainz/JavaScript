class calculos {
    constructor(lado) {
      this.lado = lado;
    }
  
    perimetro() {
      return this.lado * 4;
    }
  
    area() {
      return this.lado * this.lado;
    }
  }
  
  const cuadradoPequeño = new calculos(2);
  console.log("El perímetro del cuadrado pequeño es ", cuadradoPequeño.perimetro(), "cm");
  console.log("El área del cuadrado pequeño es ", cuadradoPequeño.area(), " cm2");
  
  const cuadradoMediano = new calculos(5);
  console.log("El perímetro del cuadrado mediano es ", cuadradoMediano.perimetro(), "cm");
  console.log("El área del cuadrado mediano es ", cuadradoMediano.area(), " cm2");
  
  const cuadradoGrande = new calculos(10);
  console.log("El perímetro del cuadrado grande es ", cuadradoGrande.perimetro(), "cm");
  console.log("El área del cuadrado grande es ", cuadradoGrande.area(), " cm2");
  