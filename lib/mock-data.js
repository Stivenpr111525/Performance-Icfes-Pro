export const mockQuestions = [
  {
    "id": 1,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Cuatro cursos con igual número de estudiantes presentan una prueba. Se comparan promedios del año anterior y actual: I (63/65), II (61/45), III (50/53), IV (53/54).",
    "question": "Al revisar los puntajes, una persona afirma que hubo un aumento en el puntaje respecto al año anterior. Esta afirmación es:",
    "options": [
      {
        "id": "A",
        "text": "Correcta, ya que el promedio de la mayoría de los cursos aumentó respecto al año anterior."
      },
      {
        "id": "B",
        "text": "Incorrecta, ya que el promedio total en el año anterior es superior al promedio total en el año actual."
      },
      {
        "id": "C",
        "text": "Correcta, ya que al observar todos los promedios, el mayor corresponde al curso I en el año actual."
      },
      {
        "id": "D",
        "text": "Incorrecta, ya que se necesita el puntaje de cada estudiante para realizar la comparación."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Al sumar los promedios del año anterior (227) y compararlos con los del actual (217), se evidencia una disminución global del rendimiento."
  },
  {
    "id": 2,
    "subject": "Matemáticas",
    "difficulty": "Fácil",
    "context": "Una inversión en dólares tiene una tasa de cambio constante (1 USD = 4.000 COP) y una ganancia del 3%.",
    "question": "¿Es correcta la afirmación de que en pesos las ganancias también serán del 3%?",
    "options": [
      {
        "id": "A",
        "text": "Sí, porque la proporción de aumento es la misma sin importar la tasa."
      },
      {
        "id": "B",
        "text": "No, porque se requiere el valor exacto de la inversión."
      },
      {
        "id": "C",
        "text": "Sí, porque el 3% es una proporción fija y la tasa de cambio es constante."
      },
      {
        "id": "D",
        "text": "No, porque el incremento será mayor en pesos al ser 4.000 veces mayor el valor de cada dólar."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Si la tasa de cambio no varía, cualquier incremento porcentual en la moneda base se traduce exactamente en el mismo porcentaje en la moneda de conversión."
  },
  {
    "id": 3,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Se deben organizar 140 estudiantes en 3 grupos usando franjas horarias: F1 (50 cupos, $35k), F2 (40 cupos, $40k), F3 (30 cupos, $50k), F4 (60 cupos, $45k).",
    "question": "¿La elección de las franjas 1, 3 y 4 garantiza el menor precio para los 140 estudiantes?",
    "options": [
      {
        "id": "A",
        "text": "Sí, porque suman exactamente 140 estudiantes."
      },
      {
        "id": "B",
        "text": "No, porque es posible obtener un precio menor eligiendo la franja 2 en lugar de la franja 3."
      },
      {
        "id": "C",
        "text": "Sí, porque se incluyó la franja 1 de menor precio."
      },
      {
        "id": "D",
        "text": "No, porque en la franja 3 la cantidad máxima es 30."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La franja 2 es más barata ($40k) que la franja 3 ($50k). Al usar la franja 2 se ahorra dinero manteniendo la capacidad necesaria para cubrir a los alumnos."
  },
  {
    "id": 4,
    "subject": "Matemáticas",
    "difficulty": "Difícil",
    "context": "Capacitación en 4 módulos. El módulo I tiene 40h a $35.000/h. Los cursos son de 20 a 30 personas.",
    "question": "Si la empresa paga $4.200.000 por el módulo I para la dependencia 'Insumos', ¿cuántos empleados tiene?",
    "options": [
      {
        "id": "A",
        "text": "Entre 20 y 30 trabajadores."
      },
      {
        "id": "B",
        "text": "Entre 41 y 60 trabajadores."
      },
      {
        "id": "C",
        "text": "Entre 61 y 90 trabajadores."
      },
      {
        "id": "D",
        "text": "Entre 80 y 120 trabajadores."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El costo por curso es 40h * $35k = $1.400.000. Como pagaron $4.2M, contrataron 3 cursos ($4.2M / $1.4M). Con 3 cursos de 20-30 personas, el total de empleados está entre 60 y 90."
  },
  {
    "id": 5,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Dependencia con 50 trabajadores. Módulo II (30h a $30.000/h).",
    "question": "¿Cuánto debería pagar cada trabajador si el costo se reparte equitativamente?",
    "options": [
      {
        "id": "A",
        "text": "$ 18.000."
      },
      {
        "id": "B",
        "text": "$ 36.000."
      },
      {
        "id": "C",
        "text": "$ 450.000."
      },
      {
        "id": "D",
        "text": "$ 900.000."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Costo total = 30h * $30.000 * 2 cursos (porque el máximo por curso es 30 personas y son 50 empleados) = $1.800.000. Repartido entre 50: $36.000."
  },
  {
    "id": 6,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "La empresa paga $900.000 por 40 funcionarios de 'Importaciones'.",
    "question": "¿A qué módulo corresponde el valor pagado?",
    "options": [
      {
        "id": "A",
        "text": "I."
      },
      {
        "id": "B",
        "text": "II."
      },
      {
        "id": "C",
        "text": "III."
      },
      {
        "id": "D",
        "text": "IV."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Para 40 funcionarios se requieren 2 cursos. Si el total es $900k, cada curso costó $450k. El módulo IV (10h * $45k) coincide con este valor."
  },
  {
    "id": 7,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Portalápices de base cuadrada (perímetro 18 cm) y boca cuadrada (perímetro 24 cm). La relación es 18/24 = 3/4.",
    "question": "Eliécer afirma que el área de la base es 3/4 del área de la boca. ¿Es verdadera esta afirmación?",
    "options": [
      {
        "id": "A",
        "text": "No, porque las áreas deben ser iguales al ser el mismo caucho."
      },
      {
        "id": "B",
        "text": "Sí, porque las relaciones de áreas y perímetros son iguales."
      },
      {
        "id": "C",
        "text": "No, porque la relación de las áreas corresponde a la razón de las longitudes elevada al cuadrado."
      },
      {
        "id": "D",
        "text": "Sí, porque al ser figuras semejantes mantienen la misma razón."
      }
    ],
    "correctAnswer": "C",
    "explanation": "En figuras semejantes, si la razón de linealidad es r, la razón de las áreas es $r^2$. Por tanto, la relación de áreas es 9/16, no 3/4."
  },
  {
    "id": 8,
    "subject": "Matemáticas",
    "difficulty": "Fácil",
    "context": "A 1.000 m la temperatura es 20°C. Cada 100 m de ascenso, la temperatura baja 1°C.",
    "question": "¿Qué expresión permite determinar la temperatura a 4.000 m de altitud?",
    "options": [
      {
        "id": "A",
        "text": "T = (Altitud/100) + 10."
      },
      {
        "id": "B",
        "text": "T = -Altitud * 100 + 30."
      },
      {
        "id": "C",
        "text": "T = -(Altitud/100) + 30."
      },
      {
        "id": "D",
        "text": "T = Altitud * 100 + 10."
      }
    ],
    "correctAnswer": "C",
    "explanation": "A 4.000 m, la temperatura ha bajado 30°C respecto al nivel del mar (proyección teórica). La fórmula -(4000/100) + 30 da -10°C, que es correcto (20°C iniciales - 30°C de cambio por los 3.000m de diferencia)."
  },
  {
    "id": 9,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Comerciante vende mango en ciudades W y Z. Capacidad camión: 5 ton. Costos y precios varían por ciudad.",
    "question": "¿Por qué es más rentable vender 6 toneladas de mango en Z que en W?",
    "options": [
      {
        "id": "A",
        "text": "Porque el dinero recibido en Z es mayor que en W."
      },
      {
        "id": "B",
        "text": "Porque la diferencia en precio de venta es mayor que la diferencia en transporte."
      },
      {
        "id": "C",
        "text": "Porque la diferencia entre ventas totales es mayor que la diferencia entre gastos totales."
      },
      {
        "id": "D",
        "text": "Porque el gasto total en empleados y transporte es mayor en W que en Z."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La rentabilidad se define como Ingresos - Gastos. Solo comparando ambos factores en conjunto se justifica la afirmación."
  },
  {
    "id": 10,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Se envían 3 camiones con 5 ton de banano cada uno a ciudad W. Costo compra: $400k/ton. Venta W: $1M/ton. Transporte/camión: $150k. Pago trabajador: $180k (2 por viaje).",
    "question": "¿Cuál es la ganancia obtenida siguiendo el procedimiento descrito?",
    "options": [
      {
        "id": "A",
        "text": "$ 5.670.000."
      },
      {
        "id": "B",
        "text": "$ 5.970.000."
      },
      {
        "id": "C",
        "text": "$ 7.470.000."
      },
      {
        "id": "D",
        "text": "$ 8.010.000."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Venta: 15 ton * ($1M - $400k) = $9M. Gastos: (3 * $150k) + (3 * 2 * $180k) = $450k + $1.08M = $1.53M. Ganancia: $9M - $1.53M = $7.47M."
  },
  {
    "id": 11,
    "subject": "Matemáticas",
    "difficulty": "Difícil",
    "context": "Bono de 0,3% por cada 5 ton vendidas. Se venden 47 ton de mango en W ($1.3M/ton).",
    "question": "¿De qué valor fue aproximadamente el bono recibido por cada empleado?",
    "options": [
      {
        "id": "A",
        "text": "526.000 pesos."
      },
      {
        "id": "B",
        "text": "175.000 pesos."
      },
      {
        "id": "C",
        "text": "148.000 pesos."
      },
      {
        "id": "D",
        "text": "87.000 pesos."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Toneladas efectivas para bono: 45 (múltiplo de 5). Valor venta: 45 * $1.3M = $58.5M. Bono: $58.5M * 0.003 = $175.500."
  },
  {
    "id": 12,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "7 ton a W (2 camiones) y 10 ton a Z (2 camiones). Costos: W (transp: 2*$150k, trab: 2*2*$180k); Z (transp: 2*$180k, trab: 2*2*$200k).",
    "question": "¿Cuál gráfica muestra correctamente la relación de costos por ciudad?",
    "options": [
      {
        "id": "A",
        "text": "Gráfica con topes de 450.000."
      },
      {
        "id": "B",
        "text": "Gráfica con topes de 900.000 mostrando mayor pago a trabajadores."
      },
      {
        "id": "C",
        "text": "Gráfica con costos de transporte superiores a los de trabajadores."
      },
      {
        "id": "D",
        "text": "Gráfica con relación inversa de costos entre ciudades"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los costos de trabajadores (W: $720k, Z: $800k) son superiores a los de transporte (W: $300k, Z: $360k), lo cual se refleja en la escala de la opción B."
  },
  {
    "id": 13,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Enero: 100 ton mango, 50 ton banano, 10 trabajadores contratados.",
    "question": "¿Qué se puede determinar con esta información?",
    "options": [
      {
        "id": "A",
        "text": "La ganancia de los productores."
      },
      {
        "id": "B",
        "text": "El pago que recibirá cada trabajador."
      },
      {
        "id": "C",
        "text": "Los costos totales del comerciante."
      },
      {
        "id": "D",
        "text": "El número mínimo de viajes realizados."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Al conocer el total de toneladas (150) y la capacidad de cada camión (5), se puede calcular el número mínimo de viajes necesarios para mover la carga (30 viajes)."
  },
  {
    "id": 14,
    "subject": "Matemáticas",
    "difficulty": "Fácil",
    "context": "Se aumenta la longitud de uno de los lados de un rectángulo en un 100%.",
    "question": "¿Qué se puede concluir de su área?",
    "options": [
      {
        "id": "A",
        "text": "Aumenta en un 50%."
      },
      {
        "id": "B",
        "text": "Se duplica."
      },
      {
        "id": "C",
        "text": "No cambia."
      },
      {
        "id": "D",
        "text": "Aumenta en 100 unidades."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Área = base * altura. Si uno de los factores se multiplica por 2 (aumento del 100%), el producto final también se multiplica por 2."
  },
  {
    "id": 15,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Dos postes paralelos proyectan sombras. Poste 1 (10m) con ángulo α=30°. Poste 2 (5m).",
    "question": "¿Cuál es el ángulo β entre la acera y la sombra del poste 2?",
    "options": [
      {
        "id": "A",
        "text": "β = 5°."
      },
      {
        "id": "B",
        "text": "β = 15°."
      },
      {
        "id": "C",
        "text": "β = 30°."
      },
      {
        "id": "D",
        "text": "β = 60°."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Al ser postes paralelos y sombras proyectadas por la misma fuente de luz (sol), los rayos son paralelos y forman el mismo ángulo con la horizontal."
  },
  {
    "id": 16,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "16 estudiantes, promedio estatura 1,70 m. Piscina profunda para ≥ 1,80 m. El director quiere subir el promedio a 1,80 m para igualar cantidad de personas en las piscinas.",
    "question": "¿Por qué es errónea la afirmación del director?",
    "options": [
      {
        "id": "A",
        "text": "Porque debe aceptar otros 16 alumnos altos."
      },
      {
        "id": "B",
        "text": "Porque con el promedio no se determina la distribución de los datos."
      },
      {
        "id": "C",
        "text": "Porque el promedio es insuficiente para igualar grupos."
      },
      {
        "id": "D",
        "text": "Porque el promedio no indica cuántas personas hay por encima o debajo de ese valor."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El promedio es una medida de tendencia central sensible a valores extremos; no garantiza una distribución equitativa (ej. 15 personas de 1,79 y 1 de 1,95 pueden dar promedio de 1,80)."
  },
  {
    "id": 17,
    "subject": "Matemáticas",
    "difficulty": "Fácil",
    "context": "Caja con aristas de longitud l, a, h.",
    "question": "¿Qué expresión determina la longitud total de todas las aristas de la caja?",
    "options": [
      {
        "id": "A",
        "text": "lah."
      },
      {
        "id": "B",
        "text": "4lah."
      },
      {
        "id": "C",
        "text": "l + a + h."
      },
      {
        "id": "D",
        "text": "4l + 4a + 4h."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Un paralelepípedo tiene 12 aristas: 4 de largo, 4 de ancho y 4 de alto."
  },
  {
    "id": 18,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Barco entre dos faros inferiores. Ángulos barco-faro superior son 45°. Distancia entre faros base es 2 unidades. Ángulos base: 30° y 60°.",
    "question": "¿Cuál es la distancia x entre el faro superior y el barco?",
    "options": [
      {
        "id": "A",
        "text": "x = 2 sen(30°)/sen(45°)."
      },
      {
        "id": "B",
        "text": "x = 2 sen(60°)/sen(45°)."
      },
      {
        "id": "C",
        "text": "x = sen(60°)/sen(75°)."
      },
      {
        "id": "D",
        "text": "x = sen(30°)/sen(60°)."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Aplicando la Ley de Senos en el triángulo formado, la relación entre el lado y el seno del ángulo opuesto permite despejar x."
  },
  {
    "id": 19,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Robot P (7 pts) vs Robot Q (2 pts). Por cada 2 de P, Q anota 3.",
    "question": "¿Qué ecuación determina cuándo igualará Q a P?",
    "options": [
      {
        "id": "A",
        "text": "3/2 x = 0."
      },
      {
        "id": "B",
        "text": "7 + x = 3/2 x + 2."
      },
      {
        "id": "C",
        "text": "7 + 3x = 2 + 2y."
      },
      {
        "id": "D",
        "text": "x + y = 7 + 2."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Si x es lo que anota P, Q anota 1.5x (3/2). La igualdad ocurre cuando P_inicial + x = Q_inicial + 1.5x."
  },
  {
    "id": 20,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Datos publicidad/ganancia: (200, 8.000), (280, 10.400), (250, 9.500).",
    "question": "¿Cuál función representa la ganancia G en función de publicidad p?",
    "options": [
      {
        "id": "A",
        "text": "G(p) = 30p + 2.000."
      },
      {
        "id": "B",
        "text": "G(p) = 10p."
      },
      {
        "id": "C",
        "text": "G(p) = 40p."
      },
      {
        "id": "D",
        "text": "G(p) = 40p - 800."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Sustituyendo p=200: 30(200) + 2000 = 8000. La pendiente es (10.400 - 8.000) / (280 - 200) = 2.400 / 80 = 30."
  },
  {
    "id": 21,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Mesas $40k, Sillas $20k. Ingreso $1.4M. Se venden 3 veces más sillas que mesas.",
    "question": "¿Las ecuaciones 40.000M + 20.000S = 1.400.000 y M = 3S representan la situación?",
    "options": [
      {
        "id": "A",
        "text": "No, la ecuación 2 indica que se venden 3 veces más mesas que sillas."
      },
      {
        "id": "B",
        "text": "Sí, ambas ecuaciones son correctas."
      },
      {
        "id": "C",
        "text": "No, los precios deberían estar dividiendo."
      },
      {
        "id": "D",
        "text": "Sí, porque la solución es un número entero."
      }
    ],
    "correctAnswer": "A",
    "explanation": "M = 3S significa que la cantidad de mesas es el triple de las sillas. El enunciado dice lo opuesto (S = 3M)."
  },
  {
    "id": 22,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Triángulo con hipotenusa 120 cm y ángulo 45°. Corte paralelo a la base a mitad de la altura h.",
    "question": "¿A qué distancia aproximada se cortó la altura (h/2)?",
    "options": [
      {
        "id": "A",
        "text": "85 cm."
      },
      {
        "id": "B",
        "text": "60 cm."
      },
      {
        "id": "C",
        "text": "42 cm."
      },
      {
        "id": "D",
        "text": "30 cm."
      }
    ],
    "correctAnswer": "C",
    "explanation": "h = 120 * sen(45°) = 120 * 0,71 = 85,2 cm. La mitad es aproximadamente 42,6 cm."
  },
  {
    "id": 23,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Cartabón (30°-60°-90°). Cateto largo = 32 cm. Hipotenusa es el doble del cateto menor.",
    "question": "¿Cuál medida corresponde al cateto menor?",
    "options": [
      {
        "id": "A",
        "text": "16 cm."
      },
      {
        "id": "B",
        "text": "32 / √3 cm."
      },
      {
        "id": "C",
        "text": "27 cm."
      },
      {
        "id": "D",
        "text": "64 / √3 cm."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Tan(60°) = Cateto opuesto / Cateto adyacente. √3 = 32 / x. Por tanto, x = 32 / √3."
  },
  {
    "id": 24,
    "subject": "Matemáticas",
    "difficulty": "Difícil",
    "context": "Cuadrado de 1 dm² con puntos medios. Estrategia de reacomodar piezas para hallar áreas sombreadas.",
    "question": "¿Cuál es el área del cuadrado sombreado en la Figura 3?",
    "options": [
      {
        "id": "A",
        "text": "1/9 dm²."
      },
      {
        "id": "B",
        "text": "1/8 dm²."
      },
      {
        "id": "C",
        "text": "1/6 dm²."
      },
      {
        "id": "D",
        "text": "1/5 dm²."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Mediante el teorema de Pitágoras y semejanza en la construcción de los 'molinos' de este tipo, se demuestra que el área central es 1/5 del total."
  },
  {
    "id": 25,
    "subject": "Matemáticas",
    "difficulty": "Fácil",
    "context": "Dígitos 2, 3, 4, 5 para extensiones de 4 dígitos diferentes.",
    "question": "¿Cuántas habitaciones pueden tener extensión?",
    "options": [
      {
        "id": "A",
        "text": "24."
      },
      {
        "id": "B",
        "text": "56."
      },
      {
        "id": "C",
        "text": "120."
      },
      {
        "id": "D",
        "text": "256."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Es una permutación de 4 elementos: 4 * 3 * 2 * 1 = 24."
  },
  {
    "id": 26,
    "subject": "Matemáticas",
    "difficulty": "Fácil",
    "context": "Gráfica parque automotor: Bus (24%), Microbús (23%), Buseta (18%), Automóvil (18%), Camioneta (9%), Campero (7%), Bus escalera (1%).",
    "question": "¿Qué afirmación es verdadera según la gráfica?",
    "options": [
      {
        "id": "A",
        "text": "La mayor parte son automóviles, camionetas y camperos."
      },
      {
        "id": "B",
        "text": "La mitad corresponde a automóviles, camionetas y camperos."
      },
      {
        "id": "C",
        "text": "La mayor parte son buses, microbuses y busetas."
      },
      {
        "id": "D",
        "text": "La mitad corresponde a buses, microbuses y busetas."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Buses + Microbuses + Busetas = 24 + 23 + 18 = 65%, lo cual es la mayoría (>50%)."
  },
  {
    "id": 27,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Récord mundial: 10,49 s. Récord olímpico: 10,50 s.",
    "question": "¿Es posible romper el récord olímpico pero no el mundial?",
    "options": [
      {
        "id": "A",
        "text": "Sí, con un tiempo como 10,497 s."
      },
      {
        "id": "B",
        "text": "Sí, con un tiempo menor que 10,4."
      },
      {
        "id": "C",
        "text": "No, no hay registros posibles entre ambos."
      },
      {
        "id": "D",
        "text": "No, cualquier tiempo menor al olímpico es menor al mundial."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Existen infinitos números reales entre 10,49 y 10,50."
  },
  {
    "id": 28,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "75 estudiantes total (45 mujeres, 30 hombres). Probabilidad de mujer es 3/5.",
    "question": "Si un valor de la razón es el total de mujeres (45), ¿cuál es el otro valor?",
    "options": [
      {
        "id": "A",
        "text": "Número total de estudiantes (75)."
      },
      {
        "id": "B",
        "text": "Número total de hombres (30)."
      },
      {
        "id": "C",
        "text": "Mujeres de 11B (23)."
      },
      {
        "id": "D",
        "text": "Hombres de 11A (18)."
      }
    ],
    "correctAnswer": "A",
    "explanation": "45 / 75 simplificado por 15 es 3 / 5."
  },
  {
    "id": 29,
    "subject": "Matemáticas",
    "difficulty": "Fácil",
    "context": "Escalera apoyada en muro a 12 m de altura. Base a 5 m. Hipotenusa (escalera) mide 13 m.",
    "question": "¿Cuál es el coseno del ángulo θ entre suelo y escalera?",
    "options": [
      {
        "id": "A",
        "text": "12 / 13."
      },
      {
        "id": "B",
        "text": "12 / 5."
      },
      {
        "id": "C",
        "text": "5 / 13."
      },
      {
        "id": "D",
        "text": "13 / 5."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Coseno = Cateto adyacente / Hipotenusa = 5 / 13."
  },
  {
    "id": 30,
    "subject": "Matemáticas",
    "difficulty": "Fácil",
    "context": "Baraja de póquer (Negras: Picas/Tréboles, Rojas: Corazones/Diamantes).",
    "question": "¿Qué par de características tienen probabilidad cero de ocurrir juntas?",
    "options": [
      {
        "id": "A",
        "text": "Negra y número par."
      },
      {
        "id": "B",
        "text": "Roja y de picas."
      },
      {
        "id": "C",
        "text": "Corazones y número impar."
      },
      {
        "id": "D",
        "text": "Roja K y diamantes."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Las picas son siempre negras; es imposible que una carta sea roja y de picas a la vez."
  },
  {
    "id": 31,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Ecuación: (x+2)(x+3) = 5(x+3). María, Nelson y Óscar proponen soluciones.",
    "question": "¿Quién realizó el procedimiento correcto?",
    "options": [
      {
        "id": "A",
        "text": "Solo Nelson y Óscar."
      },
      {
        "id": "B",
        "text": "Solo María y Nelson."
      },
      {
        "id": "C",
        "text": "Solamente Óscar."
      },
      {
        "id": "D",
        "text": "Solamente María."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Óscar cometió el error de 'cancelar' términos sumando erróneamente. María y Nelson aplicaron álgebra válida (expansión y factorización)."
  },
  {
    "id": 32,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Trapecio isósceles con vértices en (-4, 2) y (-2, 8). El eje y es el eje de simetría.",
    "question": "¿Cuáles son las coordenadas de los otros dos vértices?",
    "options": [
      {
        "id": "A",
        "text": "(8, 2) y (2, 4)."
      },
      {
        "id": "B",
        "text": "(2, 8) y (4, 2)."
      },
      {
        "id": "C",
        "text": "(-2, -4) y (-8, -2)."
      },
      {
        "id": "D",
        "text": "(-4, -2) y (-2, -8)."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Para simetría respecto al eje y, se cambia el signo de la coordenada x: (-4, 2) → (4, 2) y (-2, 8) → (2, 8)."
  },
  {
    "id": 33,
    "subject": "Matemáticas",
    "difficulty": "Difícil",
    "context": "100 empleados. 60% mujeres (60). 20% de mujeres en bus (12). 40% de hombres caminando (16 de 40).",
    "question": "¿Cuál tabla representa correctamente esta información?",
    "options": [
      {
        "id": "A",
        "text": "Tabla con 40 hombres en bus."
      },
      {
        "id": "B",
        "text": "Tabla con 34 hombres en bus."
      },
      {
        "id": "C",
        "text": "Tabla con 0 hombres en bus."
      },
      {
        "id": "D",
        "text": "Tabla con 24 hombres en bus y 48 mujeres caminando."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Hombres = 40. Caminando = 40 * 0,4 = 16. Bus = 40 - 16 = 24. Mujeres = 60. Bus = 60 * 0,2 = 12. Caminando = 60 - 12 = 48."
  },
  {
    "id": 34,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Para +10 dB, multiplicar intensidad por 10. Ramiro quiere +20 dB y multiplica por 20.",
    "question": "¿Es correcta su interpretación?",
    "options": [
      {
        "id": "A",
        "text": "No, la regla solo aplica para 10 dB."
      },
      {
        "id": "B",
        "text": "Sí, es una relación aditiva."
      },
      {
        "id": "C",
        "text": "No, debe multiplicar por 10 dos veces (10 * 10 = 100)."
      },
      {
        "id": "D",
        "text": "Sí, 10 + 10 es 20."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Los decibeles son logarítmicos. Sumar 10 dB es x10; sumar 20 dB es x100."
  },
  {
    "id": 35,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Descuento del 10% inicial y cupón adicional del 10% sobre el precio ya rebajado.",
    "question": "¿En cuál paso del procedimiento de Juan hay un error?",
    "options": [
      {
        "id": "A",
        "text": "Paso 1."
      },
      {
        "id": "B",
        "text": "Paso 3, porque debe multiplicar por 9 el precio de venta y no por 10."
      },
      {
        "id": "C",
        "text": "Paso 2."
      },
      {
        "id": "D",
        "text": "Paso 4."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El segundo descuento también es del 10%, por lo que debería calcular el 90% del valor intermedio, no el 10%."
  },
  {
    "id": 36,
    "subject": "Matemáticas",
    "difficulty": "Fácil",
    "context": "Bolsa con 3 bolas rojas, 3 negras y 12 blancas.",
    "question": "¿Tienen los tres colores la misma probabilidad de salir?",
    "options": [
      {
        "id": "A",
        "text": "Sí, el número no importa."
      },
      {
        "id": "B",
        "text": "No, se desconoce el total."
      },
      {
        "id": "C",
        "text": "No, hay más blancas que de los otros colores."
      },
      {
        "id": "D",
        "text": "Sí, están repartidas igual."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La probabilidad depende de la frecuencia relativa. Al haber 12 blancas frente a 3 de las otras, la probabilidad es distinta."
  },
  {
    "id": 37,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Circunferencia centro O y puntos P, P' en ella.",
    "question": "¿Cuál figura NO puede resultar al unir P, P' y O?",
    "options": [
      {
        "id": "A",
        "text": "Triángulo isósceles."
      },
      {
        "id": "B",
        "text": "Un radio de la circunferencia."
      },
      {
        "id": "C",
        "text": "Triángulo equilátero."
      },
      {
        "id": "D",
        "text": "Un diámetro de la circunferencia."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Unir tres puntos distintos (vértices) siempre forma un triángulo o un segmento (diámetro si son colineales). Un radio solo requiere dos puntos."
  },
  {
    "id": 38,
    "subject": "Matemáticas",
    "difficulty": "Difícil",
    "context": "110 clientes. Bebida caliente (20), fría (40), pizza (100). Nadie pidió caliente y fría a la vez.",
    "question": "¿Cuál dato se puede calcular con seguridad?",
    "options": [
      {
        "id": "A",
        "text": "Pizza y bebida caliente."
      },
      {
        "id": "B",
        "text": "Pizza o bebida caliente."
      },
      {
        "id": "C",
        "text": "Solo pizza."
      },
      {
        "id": "D",
        "text": "Solo bebida fría."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Se sabe que el total es 110 y que 60 personas pidieron bebida. Como no hay solapamiento entre bebidas, el resto (110-60=50) debió pedir solo comida o nada de bebida."
  },
  {
    "id": 39,
    "subject": "Matemáticas",
    "difficulty": "Difícil",
    "context": "Contraseña de 3 caracteres (26 letras Mayus/minus + 10 dígitos). R1: 3 dígitos. R2: 3 dígitos distintos. R3: Mayus-minus-dígito. R4: Letra-dígito-dígito.",
    "question": "¿Cuál es el ordern de menor a mayor cantidad de contraseñas?",
    "options": [
      {
        "id": "A",
        "text": "R1, R2, R4, R3."
      },
      {
        "id": "B",
        "text": "R1, R2, R3, R4."
      },
      {
        "id": "C",
        "text": "R2, R1, R4, R3."
      },
      {
        "id": "D",
        "text": "R2, R3, R1, R4."
      }
    ],
    "correctAnswer": "C",
    "explanation": "R2 (10x9x8=720) < R1 (10x10x10=1.000) < R4 (52x10x10=5.200) < R3 (26x26x10=6.760)."
  },
  {
    "id": 40,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Racionales cercanos a k mediante k + 1/j.",
    "question": "¿Cuántos racionales hay entre k y k + 1/11?",
    "options": [
      {
        "id": "A",
        "text": "10."
      },
      {
        "id": "B",
        "text": "Infinita, pues hay infinitos j > 11."
      },
      {
        "id": "C",
        "text": "11."
      },
      {
        "id": "D",
        "text": "Uno."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cualquier entero j mayor a 11 generará un número más pequeño que 1/11 y mayor a cero, permitiendo infinitas construcciones."
  },
  {
    "id": 41,
    "subject": "Matemáticas",
    "difficulty": "Fácil",
    "context": "Requerimientos para un triángulo: 1. Ángulo de 90°. 2. Lados de 7, 7 y 18 m. 3. Ángulo < 45°. 4. Suma de ángulos = 180°.",
    "question": "¿Cuál requerimiento es imposible de cumplir?",
    "options": [
      {
        "id": "A",
        "text": "Requerimiento 1."
      },
      {
        "id": "B",
        "text": "Requerimiento 2."
      },
      {
        "id": "C",
        "text": "Requerimiento 3."
      },
      {
        "id": "D",
        "text": "Requerimiento 4."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Por la desigualdad triangular, la suma de dos lados (7+7=14) debe ser mayor al tercero (18). Como no se cumple, el triángulo no existe."
  },
  {
    "id": 42,
    "subject": "Matemáticas",
    "difficulty": "Fácil",
    "context": "Cancha de 60 x 100 metros. Maqueta 100 veces menor.",
    "question": "¿Qué diseño representa las medidas de la maqueta?",
    "options": [
      {
        "id": "A",
        "text": "6x10⁻² m y 1x10⁻² m."
      },
      {
        "id": "B",
        "text": "6x10⁻² cm."
      },
      {
        "id": "C",
        "text": "6x10¹ m."
      },
      {
        "id": "D",
        "text": "6x10⁻¹ m y 1x10⁰ m (Equivalente a 0,6 y 1,0 m)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "100m / 100 = 1m (10⁰). 60m / 100 = 0,6m (6x10⁻¹). Las opciones del texto original presentan variaciones de escala, siendo la D la correcta en la tabla oficial."
  },
  {
    "id": 43,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "f(x) = 5/x. Área del rectángulo Ax = x * f(x).",
    "question": "¿Cuál gráfica corresponde a Ax?",
    "options": [
      {
        "id": "A",
        "text": "Gráfica lineal ascendente."
      },
      {
        "id": "B",
        "text": "Gráfica de una función constante en y=5."
      },
      {
        "id": "C",
        "text": "Gráfica curva descendente."
      },
      {
        "id": "D",
        "text": "Gráfica parabólica."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Ax = x * (5/x) = 5. El área es siempre 5 para cualquier x > 0, resultando en una línea horizontal."
  },
  {
    "id": 44,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Rueda de 3m de radio para 10 personas. S = r² * (θ/2) con θ = 2π/10 e r=3. Usar π ≈ 3.",
    "question": "¿Cuál es el área aproximada por persona?",
    "options": [
      {
        "id": "A",
        "text": "3,6 m²."
      },
      {
        "id": "B",
        "text": "2,7 m²."
      },
      {
        "id": "C",
        "text": "9,0 m²."
      },
      {
        "id": "D",
        "text": "1,8 m²."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Área total ≈ 3 * 3² = 27 m². Dividido entre 10 personas = 2,7 m²."
  },
  {
    "id": 45,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Enviar 2 de 5 estudiantes de décimo y 3 de 4 de undécimo.",
    "question": "¿Cuántos grupos diferentes pueden formarse?",
    "options": [
      {
        "id": "A",
        "text": "9."
      },
      {
        "id": "B",
        "text": "14."
      },
      {
        "id": "C",
        "text": "20."
      },
      {
        "id": "D",
        "text": "40."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Combinatoria: C(5,2) * C(4,3) = 10 * 4 = 40."
  },
  {
    "id": 46,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Juego 1 (P=1/2), Juego 2 (P=1/6). Consola si gana ambos.",
    "question": "¿Qué procedimientos hallan la probabilidad total?",
    "options": [
      {
        "id": "A",
        "text": "1 y 3."
      },
      {
        "id": "B",
        "text": "1 y 4."
      },
      {
        "id": "C",
        "text": "2 y 3."
      },
      {
        "id": "D",
        "text": "2 y 4."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Para eventos independientes, se multiplican las probabilidades. El complemento de 'perder al menos uno' es 'ganar ambos'."
  },
  {
    "id": 47,
    "subject": "Matemáticas",
    "difficulty": "Fácil",
    "context": "10³ = I / I₀ para un sonido de 30 dB.",
    "question": "¿Cuántas veces es el valor de I respecto a I₀?",
    "options": [
      {
        "id": "A",
        "text": "Una milésima."
      },
      {
        "id": "B",
        "text": "Un tercio."
      },
      {
        "id": "C",
        "text": "Tres veces."
      },
      {
        "id": "D",
        "text": "Mil veces."
      }
    ],
    "correctAnswer": "D",
    "explanation": "10³ es igual a 1.000."
  },
  {
    "id": 48,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Suma de 3 balotas (1-6) define el ganador. En la primera salió 2.",
    "question": "¿Por qué el 10 es más probable que el 7?",
    "options": [
      {
        "id": "A",
        "text": "Por ser mayor el número."
      },
      {
        "id": "B",
        "text": "El 10 tiene más combinaciones de suma (8 restante) que el 7 (5 restante)."
      },
      {
        "id": "C",
        "text": "Es más probable obtener pares."
      },
      {
        "id": "D",
        "text": "Por la diferencia respecto al máximo."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Para llegar a 10 faltando dos lanzamientos se necesita sumar 8. Para llegar a 7 se necesita sumar 5. Hay más formas de obtener 8 con dos dados que 5."
  },
  {
    "id": 49,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Costo $800k. Valorización anual del 5%.",
    "question": "¿Qué expresión representa el costo tras n años?",
    "options": [
      {
        "id": "A",
        "text": "800.000 + 5n."
      },
      {
        "id": "B",
        "text": "800.000(5)."
      },
      {
        "id": "C",
        "text": "800.000(5/100)ⁿ."
      },
      {
        "id": "D",
        "text": "800.000(1 + 5/100)ⁿ."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Es una fórmula de interés compuesto donde el capital se multiplica por (1+r) cada periodo."
  },
  {
    "id": 50,
    "subject": "Matemáticas",
    "difficulty": "Media",
    "context": "Empaques con h=2 y r o L = 3/2. Cilindro, Caja cuadrada, Esfera (r=3/2).",
    "question": "¿Qué es verdad sobre sus volúmenes?",
    "options": [
      {
        "id": "A",
        "text": "V_cilindro > V_caja y V_esfera > V_cilindro."
      },
      {
        "id": "B",
        "text": "V_cilindro = V_caja."
      },
      {
        "id": "C",
        "text": "V_cilindro < V_caja."
      },
      {
        "id": "D",
        "text": "V_cilindro > V_caja y V_esfera > V_cilindro."
      }
    ],
    "correctAnswer": "A",
    "explanation": "V_cilindro = π(1,5)²(2) ≈ 14,1. V_caja = (1,5)²(2) = 4,5. V_esfera = 4/3 π(1,5)³ ≈ 14,1. El cilindro supera a la caja y la esfera iguala al cilindro según el análisis geométrico estándar para estas medidas."
  },
  {
    "id": 1005,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'JOHNNY' : Relato sobre un personaje que vive de las apariencias y de los demás en EE. UU.",
    "question": "En el último párrafo del texto se utiliza la palabra 'famélico' para describir a Johnny. ¿Cuál de los siguientes adjetivos le da un sentido contrario al significado que tiene esta palabra en el texto?",
    "options": [
      {
        "id": "A",
        "text": "Magro."
      },
      {
        "id": "B",
        "text": "Enjuto."
      },
      {
        "id": "C",
        "text": "Relleno."
      },
      {
        "id": "D",
        "text": "Esquelético."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El texto asocia 'famélico' con un estado de extrema delgadez y debilidad; por lo tanto, 'relleno' actúa como su antónimo directo."
  },
  {
    "id": 1006,
    "subject": "Lectura Crítica",
    "difficulty": "Fácil",
    "context": "Texto 'JOHNNY' .",
    "question": "El fragmento lo narra",
    "options": [
      {
        "id": "A",
        "text": "Un testigo que solo cuenta lo que ve."
      },
      {
        "id": "B",
        "text": "Johnny, el protagonista."
      },
      {
        "id": "C",
        "text": "Un personaje de la historia que cuenta lo que le contaron."
      },
      {
        "id": "D",
        "text": "Alguien que conoce a Johnny."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La voz narrativa utiliza la primera persona para describir su interacción directa y conocimiento personal sobre las costumbres de Johnny."
  },
  {
    "id": 1007,
    "subject": "Lectura Crítica",
    "difficulty": "Fácil",
    "context": "Texto 'JOHNNY' .",
    "question": "Desde la información que brinda el texto, ¿cuál de las siguientes palabras describe mejor a Johnny?",
    "options": [
      {
        "id": "A",
        "text": "Vividor."
      },
      {
        "id": "B",
        "text": "Generoso."
      },
      {
        "id": "C",
        "text": "Trabajador."
      },
      {
        "id": "D",
        "text": "Mezquino."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Johnny se caracteriza por aprovecharse de subsidios y del dinero de su pareja para mantener un estilo de vida ostentoso sin trabajar."
  },
  {
    "id": 1008,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'Instinto en lugar de lógica' : Sobre el comportamiento mecánico de la avispa Sphex.",
    "question": "¿Cuál de las siguientes citas refuerza la idea de que el comportamiento de la avispa Sphex no resulta de un proceso de pensamiento racional?",
    "options": [
      {
        "id": "A",
        "text": "'La avispa lleva al grillo a su madriguera, deja sus huevos, cierra la madriguera y luego se va para no volver'."
      },
      {
        "id": "B",
        "text": "'La avispa nunca piensa en llevar al grillo directamente a su madriguera. En una ocasión, este procedimiento fue repetido cuarenta veces, siempre con el mismo resultado'."
      },
      {
        "id": "C",
        "text": "'Para la mente humana, tal rutina tan organizada y aparentemente llena de propósitos lleva consigo un sabor de lógica y de pensamiento'."
      },
      {
        "id": "D",
        "text": "'Por ejemplo, la rutina de la avispa consiste en llevar al grillo hacia la madriguera, dejarlo en la entrada, ir adentro a revisar que todo esté bien, salir y luego dejar el grillo adentro'."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La repetición ciega de una tarea ante una alteración mínima del entorno demuestra una respuesta instintiva y no una adaptación racional."
  },
  {
    "id": 1009,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'Instinto en lugar de lógica' .",
    "question": "¿Cuál de los siguientes enunciados sintetiza el tema principal del texto?",
    "options": [
      {
        "id": "A",
        "text": "El comportamiento aparentemente inteligente de la avispa Sphex."
      },
      {
        "id": "B",
        "text": "El papel de los grillos en la alimentación de las avispas Sphex."
      },
      {
        "id": "C",
        "text": "La avispa Sphex como un caso que prueba la inteligencia animal."
      },
      {
        "id": "D",
        "text": "Los métodos de crianza y las precauciones de las avispas Sphex."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El texto busca desmitificar la supuesta 'lógica' del insecto, mostrando que su orden es puramente biológico e instintivo."
  },
  {
    "id": 1010,
    "subject": "Lectura Crítica",
    "difficulty": "Fácil",
    "context": "Infografía sobre Reanimación Cardiopulmonar (RCP) .",
    "question": "De acuerdo con la infografía, ¿en qué momento se requiere proceder a efectuar una reanimación cardíaca?",
    "options": [
      {
        "id": "A",
        "text": "Después de confirmar que la víctima reacciona."
      },
      {
        "id": "B",
        "text": "Después de comprobar que la víctima no tiene pulso."
      },
      {
        "id": "C",
        "text": "En el momento en que la víctima muestra problemas de respiración."
      },
      {
        "id": "D",
        "text": "En el momento en que la víctima está en posición de recuperación."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El paso 7 (masaje cardíaco) solo se activa tras realizar el paso 5 (tomar el pulso) y obtener un resultado negativo."
  },
  {
    "id": 1011,
    "subject": "Lectura Crítica",
    "difficulty": "Fácil",
    "context": "Infografía sobre RCP .",
    "question": "En caso de que la víctima no respire, ¿qué procedimiento se sugiere seguir en la infografía?",
    "options": [
      {
        "id": "A",
        "text": "Saltar al paso 5 (tomar el pulso)."
      },
      {
        "id": "B",
        "text": "Llamar a un número de emergencias."
      },
      {
        "id": "C",
        "text": "Realizar una respiración boca a boca."
      },
      {
        "id": "D",
        "text": "Llevar a cabo una reanimación cardiopulmonar."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La infografía indica explícitamente pasar a la respiración boca a boca si se detecta falta de aire en la víctima."
  },
  {
    "id": 1012,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Infografía sobre RCP .",
    "question": "De acuerdo con el propósito del texto, ¿cuál de las siguientes opciones NO presenta una buena razón para incluir imágenes en la infografía?",
    "options": [
      {
        "id": "A",
        "text": "La descripción verbal se debe acompañar de un ejemplo gráfico."
      },
      {
        "id": "B",
        "text": "Se debe ilustrar en qué lugares se puede llevar a cabo la reanimación."
      },
      {
        "id": "C",
        "text": "Se le debe aclarar al lector qué debe hacer en cada etapa de la reanimación."
      },
      {
        "id": "D",
        "text": "Se deben representar los pasos que debe realizar una persona para reanimar a otra."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El objetivo de la infografía es instruir sobre la técnica, no sobre la ubicación geográfica de los accidentes."
  },
  {
    "id": 1013,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'Es noche de martes' : Reflexión sobre roles domésticos y educación de género.",
    "question": "En el fragmento del texto: 'Si llego tarde a casa, sobre el pálido desierto de la mesa lucirá, con suerte, el laguito rojo de un tomate cortado al medio', ¿para qué se utilizan las expresiones 'pálido desierto de la mesa' y 'laguito rojo de un tomate'?",
    "options": [
      {
        "id": "A",
        "text": "Para resaltar el poco esfuerzo de Diego en la cocina."
      },
      {
        "id": "B",
        "text": "Para explicar por qué Diego no se esforzó en la cocina."
      },
      {
        "id": "C",
        "text": "Para justificar el poco esfuerzo de Diego en la cocina."
      },
      {
        "id": "D",
        "text": "Para ilustrar el buen trabajo de Diego en la cocina."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Las metáforas subrayan la precariedad y simplicidad de la cena cuando Diego es el encargado, contrastando con el esmero de la narradora."
  },
  {
    "id": 1014,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'Es noche de martes' .",
    "question": "En el texto, ¿por qué la narradora finge enojarse cuando Diego le dice que es una buena ama de casa?",
    "options": [
      {
        "id": "A",
        "text": "Porque no quiere ser catalogada como ama de casa."
      },
      {
        "id": "B",
        "text": "Porque no es cierto que sea una buena ama de casa."
      },
      {
        "id": "C",
        "text": "Porque no le gusta que la comparen con su mamá."
      },
      {
        "id": "D",
        "text": "Porque no siente afecto por las mujeres que son amas de casa."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Aunque disfruta de las labores, la narradora rechaza la etiqueta tradicional y limitante que la sociedad impone a la mujer en el hogar."
  },
  {
    "id": 1015,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'Tratado contra el método' : Crítica a la visión lineal y única de la ciencia.",
    "question": "¿Cuál de las siguientes opciones describe mejor la relación entre el contenido del texto y el título?",
    "options": [
      {
        "id": "A",
        "text": "El texto introduce la propuesta de un nuevo método para la investigación científica."
      },
      {
        "id": "B",
        "text": "El texto ataca diferentes ideas a propósito de qué es aquello en lo que consiste el llamado 'método científico'."
      },
      {
        "id": "C",
        "text": "El texto crítica concepciones del conocimiento científico, el cual se ha concebido como resultado de un método."
      },
      {
        "id": "D",
        "text": "El texto argumenta a favor de la pluralidad de métodos disponibles para que cada ciencia alcance sus verdades."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Feyerabend argumenta que el conocimiento es un 'océano de alternativas' y no el producto de un solo método ideal y convergente."
  },
  {
    "id": 1016,
    "subject": "Lectura Crítica",
    "difficulty": "Difícil",
    "context": "Texto 'Tratado contra el método' .",
    "question": "El autor aplica a la filosofía de la ciencia el principio del liberalismo. ¿Cuál de las siguientes afirmaciones refleja de manera más directa esta influencia?",
    "options": [
      {
        "id": "A",
        "text": "La tarea del científico no ha de ser por más tiempo la glorificación de dios."
      },
      {
        "id": "B",
        "text": "Toda teoría particular, todo cuento de hadas, todo mito, forman parte del conocimiento."
      },
      {
        "id": "C",
        "text": "Hacer de la causa más débil la causa más fuerte, por ello en apoyar el movimiento de conjunto."
      },
      {
        "id": "D",
        "text": "El conocimiento no consiste en una serie de teorías autoconsistentes."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La inclusión de mitos y cuentos en el debate científico refleja la igualdad de participación propia del pensamiento liberal."
  },
  {
    "id": 1017,
    "subject": "Lectura Crítica",
    "difficulty": "Fácil",
    "context": "Historieta de Calvin y Hobbes : Sobre economía y venta de limonada.",
    "question": "En la historieta, el niño intenta justificar el alto precio de la limonada recurriendo a:",
    "options": [
      {
        "id": "A",
        "text": "Argumentos absurdos pero consistentes."
      },
      {
        "id": "B",
        "text": "Un modelo económico fiel a la realidad."
      },
      {
        "id": "C",
        "text": "Una ley de mercado que no existe."
      },
      {
        "id": "D",
        "text": "Su propia versión de la economía."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Calvin inventa demandas salariales y beneficios corporativos ficticios para intentar validar un precio irrazonable."
  },
  {
    "id": 1018,
    "subject": "Lectura Crítica",
    "difficulty": "Fácil",
    "context": "Caricatura de Quino : Un ángel linchado por la multitud.",
    "question": "¿Cuál de los siguientes enunciados describe mejor la caricatura?",
    "options": [
      {
        "id": "A",
        "text": "El pueblo hace justicia por su propia mano."
      },
      {
        "id": "B",
        "text": "El linchamiento de un ángel."
      },
      {
        "id": "C",
        "text": "Entrevista con el asesino."
      },
      {
        "id": "D",
        "text": "Un ángel bajó del cielo."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La imagen muestra visualmente el cuerpo de un ángel en el suelo rodeado de personas con armas improvisadas."
  },
  {
    "id": 1019,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'Gran Hermano' : Sobre la distopía de 1984.",
    "question": "Teniendo en cuenta la información que brinda el texto, ¿cuál de las siguientes afirmaciones es compatible con las políticas del Partido?",
    "options": [
      {
        "id": "A",
        "text": "El pueblo debe mantenerse unido."
      },
      {
        "id": "B",
        "text": "La individualidad debe ser eliminada."
      },
      {
        "id": "C",
        "text": "El poder está en ser fiel a uno mismo."
      },
      {
        "id": "D",
        "text": "Un pueblo ignorante es más poderoso."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El régimen busca que no exista más lealtad que al Partido ni más amor que al Gran Hermano, anulando al individuo."
  },
  {
    "id": 1020,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'Gran Hermano' .",
    "question": "En el texto, la frase 'figúrate una bota aplastando un rostro humano...incesantemente'",
    "options": [
      {
        "id": "A",
        "text": "explica los planes para el futuro del régimen."
      },
      {
        "id": "B",
        "text": "ejemplifica las ideas transmitidas al pueblo."
      },
      {
        "id": "C",
        "text": "expone el verdadero propósito del sistema de gobierno."
      },
      {
        "id": "D",
        "text": "ilustra las condiciones de los ciudadanos bajo el régimen."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La metáfora ilustra gráficamente el estado de opresión y sufrimiento constante de los ciudadanos bajo el poder totalitario."
  },
  {
    "id": 1021,
    "subject": "Lectura Crítica",
    "difficulty": "Fácil",
    "context": "Texto 'Sobre la fotografía' : Crítica al acto de fotografiar durante los viajes.",
    "question": "¿Cuál de las siguientes palabras es un sinónimo de la palabra 'irrecusable' en el contexto del texto?",
    "options": [
      {
        "id": "A",
        "text": "Inminente."
      },
      {
        "id": "B",
        "text": "Concluyente."
      },
      {
        "id": "C",
        "text": "Irremplazable."
      },
      {
        "id": "D",
        "text": "Cuestionable."
      }
    ],
    "correctAnswer": "B",
    "explanation": "En el texto, las fotos son la prueba definitiva o 'concluyente' de que el viaje ocurrió realmente."
  },
  {
    "id": 1022,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'Sobre la fotografía' .",
    "question": "El resumen propuesto en la pregunta 18 se describe como inadecuado porque:",
    "options": [
      {
        "id": "A",
        "text": "expone ideas contrarias a las afirmaciones principales del texto."
      },
      {
        "id": "B",
        "text": "se centra en un tipo particular de turistas y no en los turistas en general."
      },
      {
        "id": "C",
        "text": "omite el tono irónico y burlón con que la autora se refiere al arte."
      },
      {
        "id": "D",
        "text": "se detiene en presentar información en extremo detallada y secundaria."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El resumen limita el análisis a los 'cosmopolitas' de ciertas naciones, ignorando que la autora habla de una tendencia turística general."
  },
  {
    "id": 1023,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'Entre la crónica y la ideología' : Crítica histórica a las crónicas de Pedro de Aguado.",
    "question": "La descripción de los indios de Ibagué hecha por Aguado corresponde a:",
    "options": [
      {
        "id": "A",
        "text": "un periodo anterior a la llegada de los españoles."
      },
      {
        "id": "B",
        "text": "el proceso de fundación de la ciudad colonial de Ibagué."
      },
      {
        "id": "C",
        "text": "la etapa de 'conquista' de los territorios neogranadinos."
      },
      {
        "id": "D",
        "text": "un periodo histórico indeterminado."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El fragmento se ubica dentro de un relato sobre las campañas militares del capitán Galarza."
  },
  {
    "id": 1024,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'Entre la crónica y la ideología' .",
    "question": "¿Qué otro título podría ajustarse al texto?",
    "options": [
      {
        "id": "A",
        "text": "Civilización y barbarie en la colonización española."
      },
      {
        "id": "B",
        "text": "Fray Pedro de Aguado y la construcción retórica del indígena."
      },
      {
        "id": "C",
        "text": "El canibalismo ritual en la crónica de fray Pedro de Aguado."
      },
      {
        "id": "D",
        "text": "La influencia de los autores clásicos en los cronistas."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El texto se centra en cómo Aguado construyó una imagen mental del indio basada en prejuicios europeos y no en la experiencia real."
  },
  {
    "id": 1025,
    "subject": "Lectura Crítica",
    "difficulty": "Fácil",
    "context": "Caricatura de Quino: Habitación con patrones geométricos excesivos y un niño siendo regañado.",
    "question": "¿En cuál de los siguientes contextos se inscribe mejor la caricatura?",
    "options": [
      {
        "id": "A",
        "text": "Anuncio publicitario."
      },
      {
        "id": "B",
        "text": "Reportaje gráfico."
      },
      {
        "id": "C",
        "text": "Humor gráfico."
      },
      {
        "id": "D",
        "text": "Sátira política."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La obra de Quino analizada pertenece al género del humor gráfico, utilizando la exageración visual para la crítica social."
  },
  {
    "id": 1026,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'Desobediencia civil' : Thoreau sobre la relación individuo-Estado.",
    "question": "¿Cuál de los siguientes es un ejemplo que menciona el autor para apoyar su posición frente a los Gobiernos?",
    "options": [
      {
        "id": "A",
        "text": "La guerra con México."
      },
      {
        "id": "B",
        "text": "Los abusos del ejército."
      },
      {
        "id": "C",
        "text": "La tiranía de las mayorías."
      },
      {
        "id": "D",
        "text": "La debilidad de las minorías."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Thoreau cita la guerra con México como un caso donde el gobierno fue usado como herramienta por unos pocos contra la voluntad popular."
  },
  {
    "id": 1027,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Escolios de Nicolás Gómez Dávila .",
    "question": "De acuerdo con el enunciado 'Los sistemas filosóficos difieren... en la manera de escamotear los problemas', ¿cuál es la principal diferencia entre ellos?",
    "options": [
      {
        "id": "A",
        "text": "La manera de plantear los problemas."
      },
      {
        "id": "B",
        "text": "La manera de resolver los problemas."
      },
      {
        "id": "C",
        "text": "La manera de esquivar los problemas."
      },
      {
        "id": "D",
        "text": "La manera de burlarse de los problemas."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El término 'escamotear' significa ocultar o evitar, sugiriendo que las filosofías se distinguen por cómo evaden ciertas verdades incómodas."
  },
  {
    "id": 1028,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'Aprendiendo de los chimpancés' : Jane Goodall sobre la etología tradicional.",
    "question": "¿Qué prejuicio cuestiona la autora al mencionar que no era científico discutir sobre motivación o propósito?",
    "options": [
      {
        "id": "A",
        "text": "Los animales tienen mente y personalidad."
      },
      {
        "id": "B",
        "text": "La etología es una ciencia 'dura'."
      },
      {
        "id": "C",
        "text": "Las explicaciones científicas no deben tener en cuenta la intención."
      },
      {
        "id": "D",
        "text": "La variabilidad individual es un hecho contingente."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Goodall critica la idea de que para ser 'científico' se deba ignorar la voluntad o los sentimientos de los animales estudiados."
  },
  {
    "id": 1029,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Historieta sobre Crates y la libertad racional .",
    "question": "¿Cuál de los siguientes enunciados contradice la tesis central del texto?",
    "options": [
      {
        "id": "A",
        "text": "No todo se divide entre lo que depende y lo que no."
      },
      {
        "id": "B",
        "text": "Alejarnos de alguien no depende de nosotros mismos."
      },
      {
        "id": "C",
        "text": "La mente de un filósofo funciona igual que su cuerpo."
      },
      {
        "id": "D",
        "text": "El juicio y el deseo no dependen de nosotros."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La tesis afirma que el juicio y la voluntad son lo único que depende de nosotros; decir lo contrario invalida el argumento de libertad de Crates."
  },
  {
    "id": 1030,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'La historia del arte' : Gombrich sobre los gustos estéticos.",
    "question": "¿Para qué el autor hace referencia a Rubens?",
    "options": [
      {
        "id": "A",
        "text": "Para mostrar que el arte recoge lo bello."
      },
      {
        "id": "B",
        "text": "Para resaltar que el público exige realidad."
      },
      {
        "id": "C",
        "text": "Para manifestar que algunos artistas plasman lo que nos gusta ver en la realidad."
      },
      {
        "id": "D",
        "text": "Para concluir que la inclinación por lo bonito es nociva."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Rubens sirve como ejemplo de un artista que pinta temas 'agradables' que el público disfruta ver en la vida real."
  },
  {
    "id": 1031,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'La historia del arte' .",
    "question": "¿Cuál de los siguientes enunciados expresa un juicio de valor presente en el texto?",
    "options": [
      {
        "id": "A",
        "text": "Mientras Rubens dibujó la juventud, Durero dibujó la vejez."
      },
      {
        "id": "B",
        "text": "Los golfillos del pintor español Murillo tienen gran encanto."
      },
      {
        "id": "C",
        "text": "Rubens estaba orgulloso de su hijo."
      },
      {
        "id": "D",
        "text": "Para el público, la hermosura reside en la belleza del tema."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La palabra 'encanto' es una valoración subjetiva que el autor hace sobre la obra de Murillo."
  },
  {
    "id": 1032,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'La historia del arte' .",
    "question": "¿Cuál de los siguientes títulos podría ser el más adecuado para el texto anterior?",
    "options": [
      {
        "id": "A",
        "text": "En defensa del mal gusto en el arte."
      },
      {
        "id": "B",
        "text": "El arte como modelo de la realidad."
      },
      {
        "id": "C",
        "text": "La representación de la belleza en el arte."
      },
      {
        "id": "D",
        "text": "Rubens, Durero y Murillo: el arte de la pintura."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El texto explora cómo la belleza en el arte puede encontrarse tanto en temas atractivos como en temas crudos."
  },
  {
    "id": 1033,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'El Anillo de Giges' : Mito de Platón sobre la justicia y el poder.",
    "question": "¿Cuál de las siguientes afirmaciones contradice las ideas que presenta el autor?",
    "options": [
      {
        "id": "A",
        "text": "Algunas personas actúan justamente a pesar de poder actuar mal."
      },
      {
        "id": "B",
        "text": "La injusticia es natural en el ser humano."
      },
      {
        "id": "C",
        "text": "Actuar con justicia brinda menos ventajas que la injusticia."
      },
      {
        "id": "D",
        "text": "La injusticia se comete voluntariamente."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El autor sostiene que NADIE es justo por voluntad, sino por falta de poder para ser injusto impunemente."
  },
  {
    "id": 1034,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'El Anillo de Giges' .",
    "question": "¿Cuál es un supuesto subyacente a la frase 'Todo hombre piensa que la injusticia le brinda más ventajas... y está en lo cierto'?",
    "options": [
      {
        "id": "A",
        "text": "La injusticia brinda las mismas ventajas que la justicia."
      },
      {
        "id": "B",
        "text": "La justicia, al igual que la injusticia, brinda ventajas individuales."
      },
      {
        "id": "C",
        "text": "La injusticia brinda pocas ventajas."
      },
      {
        "id": "D",
        "text": "La justicia no brinda ninguna de las ventajas de la injusticia."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El argumento asume que ambas opciones compiten en términos de 'ventajas individuales' para el sujeto."
  },
  {
    "id": 1035,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'El Anillo de Giges' .",
    "question": "¿Qué afirmación apoya la tesis de que se actúa justamente solo por obligación?",
    "options": [
      {
        "id": "A",
        "text": "La gente se ve obligada a actuar justamente."
      },
      {
        "id": "B",
        "text": "Solo la igualdad garantiza el respeto por la ley."
      },
      {
        "id": "C",
        "text": "La injusticia brinda las mismas ventajas que la justicia."
      },
      {
        "id": "D",
        "text": "Siempre que una persona cuente con libertad para ser injusta lo hará."
      }
    ],
    "correctAnswer": "D",
    "explanation": "La premisa de que el poder absoluto corrompe incluso al justo refuerza que la justicia es una restricción externa."
  },
  {
    "id": 1036,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'El Anillo de Giges' .",
    "question": "¿Cuál enunciado sintetiza el primer párrafo?",
    "options": [
      {
        "id": "A",
        "text": "Ser justo es un deber de la conciencia moral."
      },
      {
        "id": "B",
        "text": "Ser justo resulta de una imposición y restricciones de la ley."
      },
      {
        "id": "C",
        "text": "La justicia es una ilusión."
      },
      {
        "id": "D",
        "text": "La justicia es un ideal inalcanzable."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El autor expone que el hombre sigue el camino de sus propios intereses a menos que la ley lo obligue a la igualdad."
  },
  {
    "id": 1037,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'El Anillo de Giges' .",
    "question": "¿Qué propósito tiene el autor al introducir el relato del anillo?",
    "options": [
      {
        "id": "A",
        "text": "Promover la injusticia como camino ventajoso."
      },
      {
        "id": "B",
        "text": "Convencer de que todo hombre cometerá injusticias si tiene oportunidad."
      },
      {
        "id": "C",
        "text": "Reforzar que todos cometemos injusticias."
      },
      {
        "id": "D",
        "text": "Persuadir de que la justicia requiere fuerza de voluntad."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El mito sirve para probar que, ante la invisibilidad y la falta de castigo, cualquier persona optaría por la injusticia."
  },
  {
    "id": 1038,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'El matrimonio: más allá del amor' : Perspectiva histórica y cultural del matrimonio.",
    "question": "Para el autor, el amor o el enamoramiento son:",
    "options": [
      {
        "id": "A",
        "text": "la base fundamental del matrimonio y la familia."
      },
      {
        "id": "B",
        "text": "una atracción que amenaza al respeto y solidaridad."
      },
      {
        "id": "C",
        "text": "unas ideas vinculadas recientemente al matrimonio."
      },
      {
        "id": "D",
        "text": "sentimientos irracionales que contradicen el deber ser."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El texto explica que el amor como centro del matrimonio es un invento del siglo XVIII consolidado en el XIX."
  },
  {
    "id": 1039,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'El matrimonio: más allá del amor' .",
    "question": "¿Qué función cumple el conector 'Sin embargo' en el texto?",
    "options": [
      {
        "id": "A",
        "text": "Introducir un nuevo tema de reflexión."
      },
      {
        "id": "B",
        "text": "Negar información previa."
      },
      {
        "id": "C",
        "text": "Agregar nuevos detalles."
      },
      {
        "id": "D",
        "text": "Contrastar la información anterior sin invalidarla."
      }
    ],
    "correctAnswer": "D",
    "explanation": "El autor acepta que la gente se enamoraba, pero usa el conector para señalar que eso no implicaba casarse por ello en muchas culturas."
  },
  {
    "id": 1040,
    "subject": "Lectura Crítica",
    "difficulty": "Fácil",
    "context": "Texto 'El matrimonio: más allá del amor' .",
    "question": "¿Por cuál término puede remplazarse 'dote' sin cambiar el sentido?",
    "options": [
      {
        "id": "A",
        "text": "Ahorros de la futura esposa."
      },
      {
        "id": "B",
        "text": "Dinero de los familiares."
      },
      {
        "id": "C",
        "text": "Aporte patrimonial."
      },
      {
        "id": "D",
        "text": "Ceremonia matrimonial."
      }
    ],
    "correctAnswer": "C",
    "explanation": "En el contexto económico del texto, la dote se refiere a los bienes que se transfieren en el enlace matrimonial."
  },
  {
    "id": 1041,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'El matrimonio: más allá del amor' .",
    "question": "¿Qué función cumple el tercer párrafo?",
    "options": [
      {
        "id": "A",
        "text": "Presentar un paralelo entre China y Occidente."
      },
      {
        "id": "B",
        "text": "Demostrar que en China el amor era una amenaza."
      },
      {
        "id": "C",
        "text": "Sintetizar razones de incompatibilidad."
      },
      {
        "id": "D",
        "text": "Proveer un ejemplo de que la asociación amor-matrimonio no es universal."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Usa los casos de China y los fulbes para ilustrar que otras culturas tienen visiones muy distintas a la nuestra."
  },
  {
    "id": 1042,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'El matrimonio: más allá del amor' .",
    "question": "¿Cuál enunciado apoya la idea de que el amor no siempre fue la base de la familia?",
    "options": [
      {
        "id": "A",
        "text": "En los años 50 hubo distinción de roles."
      },
      {
        "id": "B",
        "text": "La idea surgió con el movimiento romántico en el siglo XVIII."
      },
      {
        "id": "C",
        "text": "La pareja debe poner empeño para que el enlace se sostenga."
      },
      {
        "id": "D",
        "text": "El matrimonio se consolidó en el siglo XIX."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Al dar una fecha de origen reciente, se confirma que históricamente la base del matrimonio fue otra."
  },
  {
    "id": 1043,
    "subject": "Lectura Crítica",
    "difficulty": "Fácil",
    "context": "Texto 'El matrimonio: más allá del amor' .",
    "question": "¿Cuál ejemplo ilustra la familia como institución política y económica?",
    "options": [
      {
        "id": "A",
        "text": "En la Edad Media la mujer aportaba una dote."
      },
      {
        "id": "B",
        "text": "Mujeres fulbes niegan amar a sus maridos."
      },
      {
        "id": "C",
        "text": "En los siglos XVIII y XIX cambió la idea de familia."
      },
      {
        "id": "D",
        "text": "En China solo hasta 1920 se habló de cariño entre esposos."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La dote es el ejemplo directo de una transacción de bienes fundamental para la alianza entre familias."
  },
  {
    "id": 1044,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Texto 'El matrimonio: más allá del amor' .",
    "question": "¿Qué implicación sobre los fulbes se deriva de lo dicho?",
    "options": [
      {
        "id": "A",
        "text": "Que no existe amor entre esposos en esa comunidad."
      },
      {
        "id": "B",
        "text": "Que el amor no es condición necesaria para el matrimonio."
      },
      {
        "id": "C",
        "text": "Que las mujeres sienten temor a enamorarse."
      },
      {
        "id": "D",
        "text": "Que el amor de las mujeres no es correspondido."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El rechazo vehemente de apego por parte de las mujeres indica que su vínculo no se fundamenta en el sentimiento."
  },
  {
    "id": 1045,
    "subject": "Lectura Crítica",
    "difficulty": "Fácil",
    "context": "Texto 'El matrimonio: más allá del amor' .",
    "question": "¿Qué se puede concluir acerca del matrimonio?",
    "options": [
      {
        "id": "A",
        "text": "Tiene únicamente propósitos económicos."
      },
      {
        "id": "B",
        "text": "Es la base de la familia en todas las culturas."
      },
      {
        "id": "C",
        "text": "Es una institución que varía según el contexto histórico y social."
      },
      {
        "id": "D",
        "text": "Debe basarse en el amor y la confianza."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El texto demuestra que lo que hoy consideramos esencial (el amor) no lo ha sido en otros tiempos o lugares."
  },
  {
    "id": 1046,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Infografía 'Traumatismos por el tránsito' .",
    "question": "En la frase sobre países de ingresos medios, ¿qué función cumple la conjunción 'a pesar de'?",
    "options": [
      {
        "id": "A",
        "text": "Resaltar que el índice de muertes es elevado dadas las condiciones."
      },
      {
        "id": "B",
        "text": "Oponer número de vehículos frente a bajas muertes."
      },
      {
        "id": "C",
        "text": "Aclarar relación entre muertes y número de autos."
      },
      {
        "id": "D",
        "text": "Señalar que las cifras pueden ser más altas."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Sirve para enfatizar la desproporción: teniendo pocos autos (la mitad), tienen la gran mayoría de muertes (80%)."
  },
  {
    "id": 1047,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Infografía 'Traumatismos por el tránsito' .",
    "question": "La descripción en la pregunta 43 es insatisfactoria porque:",
    "options": [
      {
        "id": "A",
        "text": "Pasa por alto información esencial."
      },
      {
        "id": "B",
        "text": "El orden no corresponde."
      },
      {
        "id": "C",
        "text": "Expone información que NO está presente."
      },
      {
        "id": "D",
        "text": "Omite evidencias."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La infografía habla de mortalidad, NO ofrece 'ejemplos de accidentes' de tránsito reales como afirma la descripción."
  },
  {
    "id": 1048,
    "subject": "Lectura Crítica",
    "difficulty": "Fácil",
    "context": "Infografía 'Traumatismos por el tránsito' .",
    "question": "¿En qué medio de transporte es más probable que haya muerto una víctima?",
    "options": [
      {
        "id": "A",
        "text": "A pie."
      },
      {
        "id": "B",
        "text": "En moto."
      },
      {
        "id": "C",
        "text": "En bicicleta."
      },
      {
        "id": "D",
        "text": "En otro tipo de vehículo."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sumando peatones (22%), motociclistas (23%) y ciclistas (5%), se llega al 50%. El otro 50% corresponde a 'otros vehículos', siendo el grupo individual más grande."
  },
  {
    "id": 1049,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Infografía 'Traumatismos por el tránsito' .",
    "question": "¿Qué se puede inferir del cuadro sobre muertes según la región?",
    "options": [
      {
        "id": "A",
        "text": "Países donde menos se usan motores."
      },
      {
        "id": "B",
        "text": "Zonas con mismo número de muertes."
      },
      {
        "id": "C",
        "text": "Riesgo de morir según la zona geográfica."
      },
      {
        "id": "D",
        "text": "Zonas que requieren mejora de vías."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Los datos están normalizados 'por cada 100.000 habitantes', lo que permite comparar el peligro real en cada continente."
  },
  {
    "id": 1050,
    "subject": "Lectura Crítica",
    "difficulty": "Difícil",
    "context": "Infografía 'Traumatismos por el tránsito' .",
    "question": "¿Qué se infiere de la población en países de ingresos altos comparada con los de ingresos medios?",
    "options": [
      {
        "id": "A",
        "text": "Tiene más vehículos por persona."
      },
      {
        "id": "B",
        "text": "Usa menos el vehículo particular."
      },
      {
        "id": "C",
        "text": "Es más educada en materia vial."
      },
      {
        "id": "D",
        "text": "Está más expuesta a multas."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Aunque tienen la mitad de los autos del mundo, solo sufren el 8,7% de las muertes, lo que implica mejores sistemas de seguridad y cultura vial."
  },
  {
    "id": 1051,
    "subject": "Lectura Crítica",
    "difficulty": "Fácil",
    "context": "Infografía 'Traumatismos por el tránsito' .",
    "question": "Sobre las figuras que acompañan el dato de que 3 de 4 fallecidos son hombres:",
    "options": [
      {
        "id": "A",
        "text": "ilustran la información presentada."
      },
      {
        "id": "B",
        "text": "profundizan la información."
      },
      {
        "id": "C",
        "text": "proporcionan información adicional."
      },
      {
        "id": "D",
        "text": "ejemplifican la información."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Los iconos de figuras masculinas y femeninas simplemente traducen el texto a un lenguaje visual directo."
  },
  {
    "id": 1052,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Infografía 'Traumatismos por el tránsito' .",
    "question": "¿Cuál es el propósito del autor de la infografía?",
    "options": [
      {
        "id": "A",
        "text": "Sensibilizar sobre los riesgos de morir en accidentes."
      },
      {
        "id": "B",
        "text": "Incentivar el uso de movilidad alterna."
      },
      {
        "id": "C",
        "text": "Conmover con datos numéricos."
      },
      {
        "id": "D",
        "text": "Sensibilizar sobre manejar sobrio."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El uso de datos crudos y su distribución busca que el lector tome conciencia de la magnitud del problema de salud pública."
  },
  {
    "id": 1053,
    "subject": "Lectura Crítica",
    "difficulty": "Media",
    "context": "Infografía 'Traumatismos por el tránsito' .",
    "question": "¿A cuál contexto se adecuaría mejor esta infografía?",
    "options": [
      {
        "id": "A",
        "text": "Protesta ecológica."
      },
      {
        "id": "B",
        "text": "Exposición sobre transporte público."
      },
      {
        "id": "C",
        "text": "Campaña para promover seguros de vida."
      },
      {
        "id": "D",
        "text": "Estudio sobre asesinatos."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Al mostrar los altos riesgos de muerte por factores fuera del control del individuo, resulta ideal para el marketing de prevención financiera."
  },
  {
    "id": 1054,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "Un estudiante camina sobre una alfombra y luego toca un pomo metálico, sintiendo una pequeña descarga eléctrica. Este fenómeno se debe a la acumulación de cargas en su cuerpo.",
    "question": "¿Cómo se denomina el proceso por el cual el estudiante se cargó al caminar sobre la alfombra?",
    "options": [
      {
        "id": "A",
        "text": "Conducción."
      },
      {
        "id": "B",
        "text": "Inducción."
      },
      {
        "id": "C",
        "text": "Fricción."
      },
      {
        "id": "D",
        "text": "Radiación."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Al frotar dos materiales distintos (zapatos y alfombra), hay una transferencia de electrones por contacto físico repetido, lo que se conoce como carga por fricción o rozamiento."
  },
  {
    "id": 1055,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "En una cadena alimentaria, los descomponedores (como hongos y bacterias) degradan la materia orgánica muerta.",
    "question": "¿Cuál es la función principal de los descomponedores en el ciclo de la materia?",
    "options": [
      {
        "id": "A",
        "text": "Producir oxígeno para los consumidores."
      },
      {
        "id": "B",
        "text": "Convertir la energía solar en energía química."
      },
      {
        "id": "C",
        "text": "Reincorporar nutrientes al suelo para ser usados por los productores."
      },
      {
        "id": "D",
        "text": "Controlar la población de los depredadores."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Los descomponedores cierran el ciclo de la materia al transformar compuestos orgánicos complejos en sustancias inorgánicas que las plantas pueden absorber nuevamente."
  },
  {
    "id": 1056,
    "subject": "Ciencias Naturales",
    "difficulty": "Difícil",
    "context": "Un gas ideal se encuentra en un recipiente cerrado a volumen constante. Si se duplica la temperatura absoluta del gas...",
    "question": "¿Qué sucede con la presión del gas dentro del recipiente?",
    "options": [
      {
        "id": "A",
        "text": "Se reduce a la mitad."
      },
      {
        "id": "B",
        "text": "Se mantiene constante."
      },
      {
        "id": "C",
        "text": "Se duplica."
      },
      {
        "id": "D",
        "text": "Aumenta cuatro veces."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Según la Ley de Gay-Lussac, a volumen constante, la presión de un gas es directamente proporcional a su temperatura absoluta (P1/T1 = P2/T2)."
  },
  {
    "id": 1057,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "La selección natural es un mecanismo evolutivo propuesto por Charles Darwin.",
    "question": "¿Cuál de las siguientes condiciones es INDISPENSABLE para que ocurra la selección natural en una población?",
    "options": [
      {
        "id": "A",
        "text": "Que todos los individuos sean idénticos."
      },
      {
        "id": "B",
        "text": "Que exista variabilidad genética entre los individuos."
      },
      {
        "id": "C",
        "text": "Que los recursos sean infinitos para todos."
      },
      {
        "id": "D",
        "text": "Que no haya depredadores en el ecosistema."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Sin variabilidad, no habría rasgos diferenciales que otorguen ventajas de supervivencia o reproducción, por lo que la composición de la población no cambiaría."
  },
  {
    "id": 1058,
    "subject": "Ciencias Naturales",
    "difficulty": "Fácil",
    "context": "El pH es una medida de la acidez o alcalinidad de una solución. Se sabe que el jugo de limón tiene un pH de 2,3.",
    "question": "De acuerdo con este valor, el jugo de limón se clasifica como una sustancia:",
    "options": [
      {
        "id": "A",
        "text": "Básica."
      },
      {
        "id": "B",
        "text": "Neutra."
      },
      {
        "id": "C",
        "text": "Ácida."
      },
      {
        "id": "D",
        "text": "Alcalina."
      }
    ],
    "correctAnswer": "C",
    "explanation": "En la escala de pH, cualquier valor inferior a 7 se considera ácido."
  },
  {
    "id": 1059,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "Una onda sonora viaja del aire al agua. Se sabe que la velocidad del sonido en el agua es mayor que en el aire.",
    "question": "¿Qué propiedad de la onda permanece constante durante este cambio de medio?",
    "options": [
      {
        "id": "A",
        "text": "La longitud de onda."
      },
      {
        "id": "B",
        "text": "La velocidad."
      },
      {
        "id": "C",
        "text": "La frecuencia."
      },
      {
        "id": "D",
        "text": "La amplitud."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Cuando una onda cambia de medio (refracción), su frecuencia permanece constante porque depende exclusivamente de la fuente que la genera."
  },
  {
    "id": 1060,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "En la mitosis, una célula madre se divide para formar dos células hijas.",
    "question": "¿Cuál es la característica principal de las células hijas resultantes de la mitosis?",
    "options": [
      {
        "id": "A",
        "text": "Tienen la mitad del material genético de la madre."
      },
      {
        "id": "B",
        "text": "Son genéticamente idénticas a la célula madre."
      },
      {
        "id": "C",
        "text": "Presentan mutaciones planificadas para la evolución."
      },
      {
        "id": "D",
        "text": "Solo una de ellas conserva el núcleo original."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La mitosis es un proceso de división asexual que garantiza que las células hijas reciban una copia exacta del ADN diploide de la célula progenitora."
  },
  {
    "id": 1061,
    "subject": "Ciencias Naturales",
    "difficulty": "Difícil",
    "context": "La configuración electrónica de un átomo neutro termina en 3s².",
    "question": "¿A qué grupo y periodo de la tabla periódica pertenece este elemento?",
    "options": [
      {
        "id": "A",
        "text": "Grupo 1, Periodo 2."
      },
      {
        "id": "B",
        "text": "Grupo 2, Periodo 3."
      },
      {
        "id": "C",
        "text": "Grupo 3, Periodo 2."
      },
      {
        "id": "D",
        "text": "Grupo 2, Periodo 2."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El coeficiente '3' indica el periodo (nivel de energía) y el exponente '2' en el orbital s indica que pertenece al grupo 2 (metales alcalinotérreos)."
  },
  {
    "id": 1062,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "Un paracaidista salta de un avión y, después de unos segundos, abre su paracaídas.",
    "question": "¿Cuál es el efecto principal de abrir el paracaídas sobre la fuerza de resistencia del aire?",
    "options": [
      {
        "id": "A",
        "text": "Disminuye la resistencia para caer más rápido."
      },
      {
        "id": "B",
        "text": "Aumenta la resistencia debido al incremento del área de contacto."
      },
      {
        "id": "C",
        "text": "Anula la gravedad permitiendo que el paracaidista flote."
      },
      {
        "id": "D",
        "text": "No tiene efecto sobre la resistencia, solo sobre el peso."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Al aumentar la superficie de fricción con las moléculas de aire, la fuerza de arrastre aumenta, contrarrestando el peso y permitiendo una velocidad de caída constante y segura (velocidad terminal)."
  },
  {
    "id": 1063,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "El efecto invernadero es un proceso natural que mantiene la temperatura de la Tierra. Sin embargo, su aumento está provocando el calentamiento global.",
    "question": "¿Cuál de los siguientes gases es el principal responsable del aumento del efecto invernadero por actividades humanas?",
    "options": [
      {
        "id": "A",
        "text": "Oxígeno (O₂)."
      },
      {
        "id": "B",
        "text": "Nitrógeno (N₂)."
      },
      {
        "id": "C",
        "text": "Dióxido de carbono (CO₂)."
      },
      {
        "id": "D",
        "text": "Argón (Ar)."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La quema de combustibles fósiles y la deforestación han incrementado los niveles de CO₂, un gas que atrapa la radiación infrarroja en la atmósfera."
  },
  {
    "id": 1064,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "Una ciudadana, preocupada por el alto consumo de energía eléctrica en su hogar, decide investigar cuáles son los electrodomésticos que más consumen.",
    "question": "¿Cuál de las siguientes acciones le permitiría a la ciudadana obtener información confiable para su investigación?",
    "options": [
      {
        "id": "A",
        "text": "Preguntar a sus vecinos cuáles electrodomésticos creen que consumen más."
      },
      {
        "id": "B",
        "text": "Consultar las etiquetas de eficiencia energética y el manual de cada electrodoméstico."
      },
      {
        "id": "C",
        "text": "Apagar todos los electrodomésticos durante un día y observar el contador."
      },
      {
        "id": "D",
        "text": "Revisar el recibo de la luz del mes anterior para ver el consumo total."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Las etiquetas de eficiencia y manuales técnicos proporcionan datos exactos de consumo por hora, permitiendo una comparación técnica y real entre aparatos."
  },
  {
    "id": 1065,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "Un alcalde propone construir una nueva carretera que atravesará una reserva forestal, argumentando que esto reducirá los tiempos de viaje y mejorará la economía local.",
    "question": "¿Qué dimensiones están principalmente en conflicto en esta situación?",
    "options": [
      {
        "id": "A",
        "text": "La económica y la cultural."
      },
      {
        "id": "B",
        "text": "La ambiental y la económica."
      },
      {
        "id": "C",
        "text": "La política y la social."
      },
      {
        "id": "D",
        "text": "La tecnológica y la ambiental."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El beneficio económico del transporte y el comercio se opone directamente a la preservación del ecosistema de la reserva forestal."
  },
  {
    "id": 1066,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Difícil",
    "context": "Durante el siglo XIX en Colombia, el debate entre centralismo y federalismo fue constante y llevó a diversas guerras civiles.",
    "question": "¿Cuál era la principal diferencia entre estas dos formas de organización política?",
    "options": [
      {
        "id": "A",
        "text": "El centralismo buscaba la independencia de España y el federalismo no."
      },
      {
        "id": "B",
        "text": "El federalismo otorgaba autonomía a las provincias, mientras que el centralismo concentraba el poder en la capital."
      },
      {
        "id": "C",
        "text": "El centralismo defendía el libre comercio y el federalismo el proteccionismo."
      },
      {
        "id": "D",
        "text": "El federalismo apoyaba la monarquía y el centralismo la república."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El federalismo permitía a los estados soberanos dictar sus propias leyes, mientras que el centralismo unificaba la legislación bajo un mando central en Bogotá."
  },
  {
    "id": 1067,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "Un grupo de trabajadores decide realizar una huelga para exigir mejores condiciones laborales y un aumento salarial.",
    "question": "¿Qué derecho constitucional están ejerciendo estos trabajadores?",
    "options": [
      {
        "id": "A",
        "text": "El derecho a la propiedad privada."
      },
      {
        "id": "B",
        "text": "El derecho de asociación y huelga."
      },
      {
        "id": "C",
        "text": "El derecho a la libertad de prensa."
      },
      {
        "id": "D",
        "text": "El derecho al voto secreto."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La Constitución garantiza a los trabajadores el derecho a la huelga, salvo en servicios públicos esenciales definidos por el legislador."
  },
  {
    "id": 1068,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "La Revolución Industrial generó un crecimiento acelerado de las ciudades en Europa durante el siglo XIX.",
    "question": "¿Cuál fue una de las principales consecuencias sociales de este fenómeno urbanístico?",
    "options": [
      {
        "id": "A",
        "text": "La mejora inmediata de las condiciones sanitarias para todos."
      },
      {
        "id": "B",
        "text": "El fortalecimiento de los gremios de artesanos rurales."
      },
      {
        "id": "C",
        "text": "La aparición de barrios obreros con condiciones de hacinamiento."
      },
      {
        "id": "D",
        "text": "La disminución de la población en las zonas urbanas."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La migración masiva superó la capacidad de las ciudades, creando zonas de vivienda precarias para la nueva clase trabajadora."
  },
  {
    "id": 1069,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "El personero estudiantil es el encargado de promover el ejercicio de los deberes y derechos de los estudiantes consagrados en la Constitución y el Manual de Convivencia.",
    "question": "¿Cuál de las siguientes acciones corresponde a una función del personero?",
    "options": [
      {
        "id": "A",
        "text": "Sancionar a los estudiantes que incumplan el manual."
      },
      {
        "id": "B",
        "text": "Elegir a los profesores de la institución."
      },
      {
        "id": "C",
        "text": "Recibir y evaluar las quejas sobre lesiones a los derechos de los alumnos."
      },
      {
        "id": "D",
        "text": "Administrar el presupuesto del restaurante escolar."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El personero actúa como un defensor de los derechos estudiantiles, mediando ante las autoridades del colegio."
  },
  {
    "id": 1070,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "En un municipio se presenta un conflicto por el uso del agua entre una empresa minera y los agricultores locales durante una temporada de sequía.",
    "question": "¿Cuál sería la solución más coherente con los principios de equidad y sostenibilidad?",
    "options": [
      {
        "id": "A",
        "text": "Priorizar el uso del agua para la empresa que genera más impuestos."
      },
      {
        "id": "B",
        "text": "Suspender el suministro a los agricultores para no afectar la producción minera."
      },
      {
        "id": "C",
        "text": "Establecer un diálogo para priorizar el consumo humano y la seguridad alimentaria."
      },
      {
        "id": "D",
        "text": "Vender el agua al mejor postor mediante una subasta pública."
      }
    ],
    "correctAnswer": "C",
    "explanation": "En situaciones de escasez, la ley prioriza el consumo humano y las actividades que garantizan la supervivencia de la población."
  },
  {
    "id": 1071,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "El sistema democrático colombiano contempla la separación de poderes en tres ramas: Ejecutiva, Legislativa y Judicial.",
    "question": "¿Cuál es la función principal de la Rama Judicial?",
    "options": [
      {
        "id": "A",
        "text": "Hacer cumplir las leyes y administrar el Estado."
      },
      {
        "id": "B",
        "text": "Elaborar y modificar las leyes del país."
      },
      {
        "id": "C",
        "text": "Administrar justicia y resolver conflictos entre ciudadanos o con el Estado."
      },
      {
        "id": "D",
        "text": "Controlar el gasto público y vigilar a los funcionarios."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La Rama Judicial vela por el cumplimiento de la legalidad y la protección de derechos mediante sentencias judiciales."
  },
  {
    "id": 1072,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "La globalización económica ha permitido que las empresas trasnacionales operen en múltiples países simultáneamente.",
    "question": "¿Cuál es una ventaja competitiva que buscan estas empresas al instalarse en países en desarrollo?",
    "options": [
      {
        "id": "A",
        "text": "Pagar salarios más altos que en sus países de origen."
      },
      {
        "id": "B",
        "text": "Acceder a materias primas y mano de obra a menores costos."
      },
      {
        "id": "C",
        "text": "Fortalecer las industrias locales de los países receptores."
      },
      {
        "id": "D",
        "text": "Cumplir con regulaciones ambientales más estrictas."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La deslocalización busca reducir costos operativos para maximizar beneficios en el mercado global."
  },
  {
    "id": 1073,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "El voto es un derecho y un deber ciudadano en Colombia.",
    "question": "¿En cuál de los siguientes mecanismos de participación la ciudadanía elige directamente al Presidente de la República?",
    "options": [
      {
        "id": "A",
        "text": "Referendo."
      },
      {
        "id": "B",
        "text": "Plebiscito."
      },
      {
        "id": "C",
        "text": "Elecciones ordinarias."
      },
      {
        "id": "D",
        "text": "Consulta popular."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Las elecciones son el proceso mediante el cual se designan los cargos de representación política en las ramas ejecutiva y legislativa."
  },
  {
    "id": 1074,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "Un grupo de jóvenes quiere pintar un mural en una pared pública para expresar su desacuerdo con la corrupción, pero la policía se lo impide.",
    "question": "¿Qué derecho fundamental podría estar siendo limitado en este caso?",
    "options": [
      {
        "id": "A",
        "text": "Derecho a la libre expresión."
      },
      {
        "id": "B",
        "text": "Derecho a la propiedad privada."
      },
      {
        "id": "C",
        "text": "Derecho a la educación."
      },
      {
        "id": "D",
        "text": "Derecho al debido proceso."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La libre expresión abarca manifestaciones artísticas y políticas, aunque debe regularse respecto al uso del espacio público."
  },
  {
    "id": 1075,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Difícil",
    "context": "El neoliberalismo propone la reducción del gasto público y la privatización de empresas estatales.",
    "question": "¿Qué argumento suelen usar los defensores de este modelo?",
    "options": [
      {
        "id": "A",
        "text": "Que el Estado es más eficiente que el mercado en la asignación de recursos."
      },
      {
        "id": "B",
        "text": "Que la competencia privada mejora la calidad y reduce los precios de los servicios."
      },
      {
        "id": "C",
        "text": "Que los subsidios estatales son la única forma de eliminar la pobreza."
      },
      {
        "id": "D",
        "text": "Que los impuestos a las empresas deben aumentar para financiar lo público."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El modelo neoliberal confía en que la libre competencia incentiva la eficiencia y la innovación."
  },
  {
    "id": 1076,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "La Segunda Guerra Mundial finalizó en 1945 con la derrota de las potencias del Eje.",
    "question": "¿Cuál fue una consecuencia política inmediata a nivel mundial tras este conflicto?",
    "options": [
      {
        "id": "A",
        "text": "El inicio de la Revolución Industrial."
      },
      {
        "id": "B",
        "text": "La desaparición de todas las dictaduras en América Latina."
      },
      {
        "id": "C",
        "text": "La creación de la Organización de las Naciones Unidas (ONU)."
      },
      {
        "id": "D",
        "text": "El fin del colonialismo en Asia y África ese mismo año."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La ONU nació con el propósito de evitar futuros conflictos globales y promover la cooperación internacional."
  },
  {
    "id": 1077,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "Un grupo de ciudadanos presenta una acción de tutela contra una empresa minera, argumentando que sus actividades están contaminando las fuentes de agua que abastecen a la comunidad.",
    "question": "¿Por qué es procedente la acción de tutela en este caso?",
    "options": [
      {
        "id": "A",
        "text": "Porque busca proteger el derecho fundamental a la salud y a la vida en conexidad con un ambiente sano."
      },
      {
        "id": "B",
        "text": "Porque la tutela es el único mecanismo para cerrar empresas que no pagan impuestos."
      },
      {
        "id": "C",
        "text": "Porque permite que los ciudadanos se apropien de los terrenos de la empresa minera."
      },
      {
        "id": "D",
        "text": "Porque obliga a la empresa a contratar únicamente a personas de la comunidad."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La tutela protege derechos fundamentales. Cuando la contaminación ambiental amenaza directamente la salud o la vida de las personas, este mecanismo es el adecuado para solicitar protección inmediata."
  },
  {
    "id": 1078,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "A finales del siglo XX, muchos países latinoamericanos adoptaron modelos económicos de apertura comercial.",
    "question": "¿Cuál es uno de los propósitos principales de la apertura económica?",
    "options": [
      {
        "id": "A",
        "text": "Aislar la economía nacional para proteger a los productores locales de la competencia externa."
      },
      {
        "id": "B",
        "text": "Fomentar el intercambio de bienes y servicios eliminando barreras arancelarias."
      },
      {
        "id": "C",
        "text": "Prohibir la entrada de inversión extranjera para fortalecer las empresas estatales."
      },
      {
        "id": "D",
        "text": "Establecer precios fijos para todos los productos de la canasta básica."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La apertura económica busca integrar al país en el mercado global, permitiendo la libre competencia y el acceso a productos internacionales."
  },
  {
    "id": 1079,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "El Congreso de la República de Colombia aprobó una ley que modifica el sistema de pensiones.",
    "question": "¿Qué organismo tiene la función de revisar si esta ley se ajusta a lo establecido en la Constitución Política?",
    "options": [
      {
        "id": "A",
        "text": "El Consejo de Estado."
      },
      {
        "id": "B",
        "text": "La Corte Constitucional."
      },
      {
        "id": "C",
        "text": "La Contraloría General de la Nación."
      },
      {
        "id": "D",
        "text": "La Procuraduría General de la Nación."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La Corte Constitucional es la guardiana de la integridad y supremacía de la Constitución; su función es decidir sobre la exequibilidad de las leyes."
  },
  {
    "id": 1080,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Fácil",
    "context": "En una democracia representativa, los ciudadanos eligen a sus gobernantes mediante el voto.",
    "question": "¿Cuál de las siguientes afirmaciones describe una característica esencial del voto en Colombia?",
    "options": [
      {
        "id": "A",
        "text": "Es obligatorio para todos los ciudadanos mayores de 18 años."
      },
      {
        "id": "B",
        "text": "Es secreto, permitiendo que el ciudadano elija libremente su opción."
      },
      {
        "id": "C",
        "text": "Es público, para que todos sepan por quién votó cada persona."
      },
      {
        "id": "D",
        "text": "Solo pueden votar las personas que demuestren tener propiedades."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El secreto del voto garantiza la libertad del elector y evita presiones o represalias externas."
  },
  {
    "id": 1081,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "La Revolución Rusa de 1917 transformó profundamente la estructura política y económica de ese país.",
    "question": "¿Cuál fue uno de los cambios fundamentales introducidos por los bolcheviques?",
    "options": [
      {
        "id": "A",
        "text": "La instauración de una monarquía constitucional parlamentaria."
      },
      {
        "id": "B",
        "text": "La abolición de la propiedad privada de los medios de producción."
      },
      {
        "id": "C",
        "text": "El fortalecimiento del sistema capitalista de libre mercado."
      },
      {
        "id": "D",
        "text": "La alianza militar con las potencias centrales durante la Gran Guerra."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El modelo soviético se basó en la propiedad estatal y la planificación centralizada de la economía, eliminando la propiedad privada industrial y agraria."
  },
  {
    "id": 1082,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "Un grupo de indígenas reclama que una empresa petrolera está explorando en sus tierras ancestrales sin haber realizado una consulta previa.",
    "question": "¿Por qué es importante el derecho a la consulta previa para estas comunidades?",
    "options": [
      {
        "id": "A",
        "text": "Porque les permite decidir si quieren pagar impuestos o no."
      },
      {
        "id": "B",
        "text": "Porque garantiza su participación en decisiones que afectan su integridad cultural y territorial."
      },
      {
        "id": "C",
        "text": "Porque les da el derecho de expulsar a cualquier persona que no sea de su etnia del municipio."
      },
      {
        "id": "D",
        "text": "Porque obliga al Estado a darles dinero mensualmente sin condiciones."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La consulta previa reconoce la autonomía de las minorías étnicas sobre sus territorios y protege sus formas de vida tradicionales."
  },
  {
    "id": 1083,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "Durante la época colonial en América, la estructura social estaba rígidamente jerarquizada según el origen étnico.",
    "question": "¿Qué grupo ocupaba la posición más alta y tenía acceso a los cargos de gobierno?",
    "options": [
      {
        "id": "A",
        "text": "Los criollos, hijos de españoles nacidos en América."
      },
      {
        "id": "B",
        "text": "Los españoles peninsulares, nacidos en España."
      },
      {
        "id": "C",
        "text": "Los mestizos, mezcla de español e indígena."
      },
      {
        "id": "D",
        "text": "Los indígenas que aceptaban la religión católica."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los peninsulares detentaban el poder político y administrativo enviado por la Corona, lo que generó tensiones con los criollos."
  },
  {
    "id": 1084,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "El desplazamiento forzado en Colombia ha llevado a que muchas personas dejen sus tierras debido al conflicto armado.",
    "question": "¿Cuál es uno de los principales impactos de este fenómeno en las zonas urbanas receptoras?",
    "options": [
      {
        "id": "A",
        "text": "La reducción del costo de la vivienda en las ciudades."
      },
      {
        "id": "B",
        "text": "El aumento de la presión sobre los servicios de salud y educación pública."
      },
      {
        "id": "C",
        "text": "La disminución del desempleo debido a la llegada de mano de obra."
      },
      {
        "id": "D",
        "text": "La mejora de la seguridad en los barrios periféricos."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La llegada masiva de población vulnerable requiere una respuesta estatal inmediata en servicios básicos, superando a menudo la capacidad instalada."
  },
  {
    "id": 1085,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "Un ciudadano considera que una nueva ley aprobada por el Congreso vulnera sus derechos fundamentales y decide demandarla.",
    "question": "¿Cuál de los siguientes términos describe esta acción legal?",
    "options": [
      {
        "id": "A",
        "text": "Acción de tutela."
      },
      {
        "id": "B",
        "text": "Demanda de inconstitucionalidad."
      },
      {
        "id": "C",
        "text": "Derecho de petición."
      },
      {
        "id": "D",
        "text": "Acción popular."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cualquier ciudadano puede demandar una ley ante la Corte Constitucional si considera que contradice la norma superior del Estado."
  },
  {
    "id": 1086,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Difícil",
    "context": "En el contexto de la globalización, el concepto de 'soberanía nacional' ha sido objeto de debate.",
    "question": "¿Cómo afecta la integración económica internacional a la soberanía de los Estados?",
    "options": [
      {
        "id": "A",
        "text": "La fortalece, permitiendo que cada Estado dicte sus leyes sin importar los tratados."
      },
      {
        "id": "B",
        "text": "La limita, ya que los Estados deben ajustar sus leyes internas a los compromisos y tratados internacionales."
      },
      {
        "id": "C",
        "text": "La elimina por completo, haciendo que el Banco Mundial gobierne todos los países."
      },
      {
        "id": "D",
        "text": "No tiene ningún efecto, ya que la economía y la política son ámbitos totalmente separados."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Al firmar tratados de libre comercio u organismos internacionales, los países aceptan reglas de juego comunes que restringen sus decisiones autónomas en ciertos ámbitos."
  },
  {
    "id": 1087,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "El principio de 'separación de poderes' busca evitar la tiranía distribuyendo las funciones del Estado.",
    "question": "¿Qué rama del poder es la encargada de administrar el presupuesto nacional y ejecutar las políticas públicas?",
    "options": [
      {
        "id": "A",
        "text": "Rama Legislativa."
      },
      {
        "id": "B",
        "text": "Rama Ejecutiva."
      },
      {
        "id": "C",
        "text": "Rama Judicial."
      },
      {
        "id": "D",
        "text": "Ministerio Público."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Presidente y sus ministros dirigen la administración pública y ejecutan los planes de desarrollo."
  },
  {
    "id": 1088,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "Un estudiante de 10° grado quiere participar en el gobierno escolar para proponer mejoras en la biblioteca.",
    "question": "¿A qué instancia del gobierno escolar debería postularse para representar a sus compañeros y tener voz en las decisiones generales del colegio?",
    "options": [
      {
        "id": "A",
        "text": "Al Consejo de Padres."
      },
      {
        "id": "B",
        "text": "Al Consejo Directivo."
      },
      {
        "id": "C",
        "text": "Al Consejo Estudiantil."
      },
      {
        "id": "D",
        "text": "A la Comisaría de Familia."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El Consejo Estudiantil es el órgano donde se aseguran la participación y el liderazgo de los alumnos en la vida institucional."
  },
  {
    "id": 1089,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "La Declaración Universal de los Derechos Humanos fue proclamada por la ONU en 1948.",
    "question": "¿Cuál es la característica principal de estos derechos?",
    "options": [
      {
        "id": "A",
        "text": "Son aplicables solo en los países que están en paz."
      },
      {
        "id": "B",
        "text": "Son universales, inalienables e inherentes a todos los seres humanos."
      },
      {
        "id": "C",
        "text": "Pueden ser retirados por el gobierno si el ciudadano comete un delito menor."
      },
      {
        "id": "D",
        "text": "Solo protegen a las personas que tienen una nacionalidad reconocida."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los derechos humanos no dependen de la nacionalidad, género o religión; pertenecen a la persona por su simple condición humana."
  },
  {
    "id": 1090,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "Un país atraviesa una crisis económica y el Gobierno decide reducir el gasto en programas de asistencia social para equilibrar el presupuesto.",
    "question": "¿Qué impacto social es más probable que genere esta medida?",
    "options": [
      {
        "id": "A",
        "text": "Una disminución de la desigualdad social a corto plazo."
      },
      {
        "id": "B",
        "text": "Un aumento en los niveles de pobreza y vulnerabilidad de la población."
      },
      {
        "id": "C",
        "text": "La eliminación inmediata de la inflación económica."
      },
      {
        "id": "D",
        "text": "El fortalecimiento de la clase media urbana."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Al reducir las transferencias y ayudas a los sectores más pobres, estos pierden su red de seguridad, lo que profundiza las carencias básicas."
  },
  {
    "id": 1091,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "La Constitución de 1991 define a Colombia como un Estado Social de Derecho.",
    "question": "¿Cuál de los siguientes enunciados es una característica fundamental de este tipo de Estado?",
    "options": [
      {
        "id": "A",
        "text": "La prevalencia de los intereses particulares sobre los generales."
      },
      {
        "id": "B",
        "text": "El deber del Estado de garantizar derechos mínimos como salud, educación y vivienda."
      },
      {
        "id": "C",
        "text": "La concentración de todo el poder en la figura del Presidente."
      },
      {
        "id": "D",
        "text": "La prohibición de cualquier forma de protesta social."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Estado Social de Derecho busca la justicia social mediante la intervención activa para proteger a los más débiles y asegurar condiciones dignas de vida."
  },
  {
    "id": 1092,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "Durante la Primera Guerra Mundial (1914-1918), se implementó el uso masivo de nuevas tecnologías militares como tanques, aviones y gases químicos.",
    "question": "¿Qué efecto tuvo esta innovación tecnológica en el desarrollo del conflicto?",
    "options": [
      {
        "id": "A",
        "text": "Hizo que las guerras fueran más cortas y con menos víctimas."
      },
      {
        "id": "B",
        "text": "Aumentó drásticamente la capacidad de destrucción y el número de bajas."
      },
      {
        "id": "C",
        "text": "Evitó que la población civil se viera afectada por los combates."
      },
      {
        "id": "D",
        "text": "Permitió que la caballería tradicional siguiera siendo la fuerza principal."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La industrialización de la guerra convirtió el conflicto en una carnicería masiva debido al poder letal de las nuevas armas."
  },
  {
    "id": 1093,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "Un ciudadano considera que una valla publicitaria instalada frente a su ventana afecta su tranquilidad y el paisaje de la zona.",
    "question": "¿Qué mecanismo legal debe usar para solicitar que se revise la legalidad de la instalación de dicha valla?",
    "options": [
      {
        "id": "A",
        "text": "Acción de cumplimiento."
      },
      {
        "id": "B",
        "text": "Habeas Corpus."
      },
      {
        "id": "C",
        "text": "Derecho de petición."
      },
      {
        "id": "D",
        "text": "Habeas Data."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El derecho de petición permite a los ciudadanos dirigirse a las autoridades para obtener información o solicitar la resolución de situaciones de interés particular o general."
  },
  {
    "id": 1094,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Difícil",
    "context": "La 'Seguridad Democrática' fue una política de gobierno en Colombia que buscaba el control territorial mediante el fortalecimiento militar.",
    "question": "¿Cuál fue una de las principales críticas de organismos de derechos humanos a esta política?",
    "options": [
      {
        "id": "A",
        "text": "Que redujo el tamaño de las fuerzas armadas."
      },
      {
        "id": "B",
        "text": "Que descuidó la inversión en infraestructura vial."
      },
      {
        "id": "C",
        "text": "Que se presentaron casos de ejecuciones extrajudiciales y violaciones a las libertades civiles."
      },
      {
        "id": "D",
        "text": "Que promovió el diálogo con todos los grupos armados ilegales."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La presión por resultados operacionales llevó a abusos por parte de algunos sectores de la fuerza pública contra la población civil."
  },
  {
    "id": 1095,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "El desarrollo sostenible plantea que el crecimiento económico debe ser compatible con la protección ambiental y la equidad social.",
    "question": "¿Cuál de las siguientes acciones es contraria al desarrollo sostenible?",
    "options": [
      {
        "id": "A",
        "text": "El uso de paneles solares en zonas rurales."
      },
      {
        "id": "B",
        "text": "La reforestación de cuencas hidrográficas."
      },
      {
        "id": "C",
        "text": "La explotación intensiva de madera en selvas tropicales sin planes de manejo."
      },
      {
        "id": "D",
        "text": "El reciclaje de plásticos y vidrios a nivel industrial."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La explotación sin control agota los recursos para el futuro, violando el principio básico de sostenibilidad."
  },
  {
    "id": 1096,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "La rama legislativa en Colombia tiene la potestad de reformar la Constitución.",
    "question": "¿Cómo se denomina el documento legal mediante el cual el Congreso reforma la Constitución?",
    "options": [
      {
        "id": "A",
        "text": "Ley Ordinaria."
      },
      {
        "id": "B",
        "text": "Decreto Ley."
      },
      {
        "id": "C",
        "text": "Acto Legislativo."
      },
      {
        "id": "D",
        "text": "Sentencia de Constitucionalidad."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Los actos legislativos son el instrumento específico para modificar, adicionar o derogar normas de la Constitución Nacional."
  },
  {
    "id": 1097,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "En un país, se prohíbe por ley que las mujeres ocupen cargos directivos en empresas públicas.",
    "question": "¿Qué principio democrático se está vulnerando con esta ley?",
    "options": [
      {
        "id": "A",
        "text": "La libertad de empresa."
      },
      {
        "id": "B",
        "text": "El derecho a la propiedad."
      },
      {
        "id": "C",
        "text": "La igualdad y la no discriminación."
      },
      {
        "id": "D",
        "text": "La soberanía nacional."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Cualquier exclusión basada en el género atenta contra el derecho fundamental de todas las personas a ser tratadas con la misma dignidad y oportunidades."
  },
  {
    "id": 1098,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "El Fondo Monetario Internacional (FMI) es una organización que busca asegurar la estabilidad financiera mundial.",
    "question": "¿A qué recurre normalmente un país cuando tiene una deuda externa impagable y solicita ayuda al FMI?",
    "options": [
      {
        "id": "A",
        "text": "A solicitar que se le regale el dinero sin condiciones."
      },
      {
        "id": "B",
        "text": "A aceptar programas de ajuste estructural que implican recortes en el gasto público."
      },
      {
        "id": "C",
        "text": "A declarar la guerra a sus acreedores internacionales."
      },
      {
        "id": "D",
        "text": "A imprimir billetes masivamente para pagar la deuda."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El FMI condiciona sus préstamos a reformas económicas (austeridad) para garantizar que el país pueda recuperar su capacidad de pago."
  },
  {
    "id": 1099,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "La segregación racial en Estados Unidos (Jim Crow) permitía lugares separados para blancos y negros.",
    "question": "¿Qué movimiento social fue fundamental para acabar con estas leyes a mediados del siglo XX?",
    "options": [
      {
        "id": "A",
        "text": "El movimiento hippie."
      },
      {
        "id": "B",
        "text": "El movimiento por los derechos civiles liderado por figuras como Martin Luther King."
      },
      {
        "id": "C",
        "text": "El movimiento sufragista femenino."
      },
      {
        "id": "D",
        "text": "El movimiento ambientalista global."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Este movimiento utilizó la desobediencia civil no violenta para lograr la igualdad legal de la población afroamericana."
  },
  {
    "id": 1100,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "Un joven es detenido por la policía sin que se le informe el motivo y sin una orden judicial.",
    "question": "¿Qué recurso legal puede interponer un familiar para exigir su libertad inmediata si considera que la detención es ilegal?",
    "options": [
      {
        "id": "A",
        "text": "Acción de tutela."
      },
      {
        "id": "B",
        "text": "Habeas Corpus."
      },
      {
        "id": "C",
        "text": "Acción popular."
      },
      {
        "id": "D",
        "text": "Habeas Data."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Habeas Corpus es el mecanismo específico para proteger la libertad personal frente a capturas arbitrarias o ilegales."
  },
  {
    "id": 1101,
    "subject": "Sociales y Ciudadanas",
    "difficulty": "Media",
    "context": "El calentamiento global es un fenómeno causado por la emisión de gases de efecto invernadero.",
    "question": "¿Qué acuerdo internacional busca que los países reduzcan voluntariamente estas emisiones?",
    "options": [
      {
        "id": "A",
        "text": "Tratado de Versalles."
      },
      {
        "id": "B",
        "text": "Acuerdo de París."
      },
      {
        "id": "C",
        "text": "Tratado de Tordesillas."
      },
      {
        "id": "D",
        "text": "Pacto de Varsovia."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Acuerdo de París es el marco global actual donde las naciones se comprometen a limitar el aumento de la temperatura del planeta."
  },
  {
    "id": 1102,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "Un investigador observa que una planta crece más rápido cuando se le aplica un fertilizante rico en nitrógeno que cuando se usa uno rico en fósforo.",
    "question": "¿Cuál de las siguientes es la hipótesis que el investigador está poniendo a prueba?",
    "options": [
      {
        "id": "A",
        "text": "El nitrógeno es un elemento esencial para todas las plantas del ecosistema."
      },
      {
        "id": "B",
        "text": "Las plantas crecen más si se riegan con mayor frecuencia."
      },
      {
        "id": "C",
        "text": "El nitrógeno tiene un efecto mayor en el crecimiento de esta planta que el fósforo."
      },
      {
        "id": "D",
        "text": "El fósforo impide que la planta absorba luz solar."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Una hipótesis es una suposición tentativa sobre la relación entre variables; en este caso, compara directamente el efecto de dos nutrientes sobre el crecimiento."
  },
  {
    "id": 1103,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "Se quema un trozo de madera en una fogata y quedan cenizas y humo.",
    "question": "¿Qué tipo de cambio ha ocurrido en la madera?",
    "options": [
      {
        "id": "A",
        "text": "Cambio físico, porque la madera solo cambió de forma."
      },
      {
        "id": "B",
        "text": "Cambio químico, porque se formaron nuevas sustancias con propiedades diferentes."
      },
      {
        "id": "C",
        "text": "Cambio físico, porque las cenizas pueden volver a convertirse en madera."
      },
      {
        "id": "D",
        "text": "Cambio nuclear, porque se liberó una gran cantidad de energía."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La combustión es una reacción química donde la materia reacciona con oxígeno para formar nuevas sustancias como dióxido de carbono y cenizas."
  },
  {
    "id": 1104,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "El sistema circulatorio humano se encarga de transportar nutrientes y gases a todo el cuerpo.",
    "question": "¿Cuál es la función principal de los glóbulos rojos en la sangre?",
    "options": [
      {
        "id": "A",
        "text": "Defender al organismo de infecciones y bacterias."
      },
      {
        "id": "B",
        "text": "Transportar oxígeno desde los pulmones hacia los tejidos."
      },
      {
        "id": "C",
        "text": "Permitir la coagulación de la sangre en caso de heridas."
      },
      {
        "id": "D",
        "text": "Regular la temperatura corporal mediante el sudor."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los eritrocitos contienen hemoglobina, proteína especializada en la captación y transporte de oxígeno."
  },
  {
    "id": 1105,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "Un objeto se mueve en una trayectoria circular con rapidez constante.",
    "question": "¿Existe aceleración en este movimiento?",
    "options": [
      {
        "id": "A",
        "text": "No, porque la rapidez no cambia."
      },
      {
        "id": "B",
        "text": "Sí, porque la dirección del vector velocidad cambia continuamente."
      },
      {
        "id": "C",
        "text": "No, porque el objeto siempre vuelve al mismo punto."
      },
      {
        "id": "D",
        "text": "Sí, solo si el objeto aumenta su rapidez en cada vuelta."
      }
    ],
    "correctAnswer": "B",
    "explanation": "En el movimiento circular uniforme, aunque la magnitud de la velocidad es constante, su dirección cambia, lo que implica la existencia de una aceleración centrípeta."
  },
  {
    "id": 1106,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "En la tabla periódica, los elementos del mismo grupo tienen propiedades químicas similares.",
    "question": "¿A qué se debe principalmente esta similitud?",
    "options": [
      {
        "id": "A",
        "text": "A que tienen el mismo número de protones en el núcleo."
      },
      {
        "id": "B",
        "text": "A que tienen la misma masa atómica."
      },
      {
        "id": "C",
        "text": "A que tienen el mismo número de electrones en su último nivel de energía."
      },
      {
        "id": "D",
        "text": "A que todos se encuentran en el mismo estado de agregación."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Los electrones de valencia determinan el comportamiento químico y la formación de enlaces, y son constantes para elementos de un mismo grupo."
  },
  {
    "id": 1107,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "La homeostasis es el proceso por el cual los organismos mantienen su medio interno constante.",
    "question": "¿Cuál de los siguientes es un ejemplo de homeostasis en el ser humano?",
    "options": [
      {
        "id": "A",
        "text": "El aumento de la estatura durante la adolescencia."
      },
      {
        "id": "B",
        "text": "La sudoración para disminuir la temperatura corporal ante el calor."
      },
      {
        "id": "C",
        "text": "El aprendizaje de un nuevo idioma."
      },
      {
        "id": "D",
        "text": "La pérdida de cabello por el envejecimiento."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La termorregulación es un mecanismo homeostático clásico para mantener la temperatura interna dentro de límites viables."
  },
  {
    "id": 1108,
    "subject": "Ciencias Naturales",
    "difficulty": "Difícil",
    "context": "Un resorte se estira una distancia x cuando se le cuelga una masa m.",
    "question": "Si se duplica la masa colgada y el resorte se mantiene dentro de su límite elástico, ¿qué sucede con el estiramiento?",
    "options": [
      {
        "id": "A",
        "text": "Se reduce a la mitad."
      },
      {
        "id": "B",
        "text": "Permanece igual."
      },
      {
        "id": "C",
        "text": "Se duplica."
      },
      {
        "id": "D",
        "text": "Aumenta cuatro veces."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Según la Ley de Hooke (F = kx), la fuerza elástica es directamente proporcional a la elongación; si la fuerza (peso de la masa) se duplica, el estiramiento también."
  },
  {
    "id": 1109,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "La lluvia ácida se forma cuando gases contaminantes reaccionan con el agua de la atmósfera.",
    "question": "¿Qué impacto directo tiene la lluvia ácida sobre los ecosistemas acuáticos?",
    "options": [
      {
        "id": "A",
        "text": "Aumenta la biodiversidad al proporcionar nuevos nutrientes."
      },
      {
        "id": "B",
        "text": "Disminuye el pH del agua, afectando la supervivencia de peces y anfibios."
      },
      {
        "id": "C",
        "text": "Aumenta la temperatura del agua provocando su evaporación."
      },
      {
        "id": "D",
        "text": "Limpia el agua de metales pesados volviéndola potable."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La acidificación del agua altera el equilibrio osmótico y reproductivo de las especies acuáticas."
  },
  {
    "id": 1110,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "En la célula, la respiración celular ocurre principalmente en un organelo específico.",
    "question": "¿En qué organelo se produce la mayor parte del ATP (energía) de la célula?",
    "options": [
      {
        "id": "A",
        "text": "Núcleo."
      },
      {
        "id": "B",
        "text": "Ribosomas."
      },
      {
        "id": "C",
        "text": "Mitocondrias."
      },
      {
        "id": "D",
        "text": "Aparato de Golgi."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Las mitocondrias son las centrales energéticas encargadas de la oxidación de nutrientes para obtener ATP."
  },
  {
    "id": 1111,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "Un estudiante mezcla 50 ml de agua con 10 g de azúcar y agita hasta que el azúcar no se ve.",
    "question": "¿Cómo se clasifica esta mezcla?",
    "options": [
      {
        "id": "A",
        "text": "Heterogénea, porque tiene dos componentes."
      },
      {
        "id": "B",
        "text": "Homogénea, porque presenta una sola fase uniforme."
      },
      {
        "id": "C",
        "text": "Compuesto, porque el azúcar reaccionó con el agua."
      },
      {
        "id": "D",
        "text": "Elemento, porque el azúcar es una sustancia pura."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Una solución es una mezcla homogénea donde no se pueden distinguir sus componentes a simple vista ni con microscopio convencional."
  },
  {
    "id": 1112,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "El sonido es una onda mecánica que requiere un medio para propagarse.",
    "question": "¿En cuál de los siguientes entornos el sonido NO puede viajar?",
    "options": [
      {
        "id": "A",
        "text": "Bajo el agua."
      },
      {
        "id": "B",
        "text": "A través de una pared de metal."
      },
      {
        "id": "C",
        "text": "En el vacío del espacio exterior."
      },
      {
        "id": "D",
        "text": "En el aire a gran altitud."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Al ser una onda mecánica, el sonido necesita de la vibración de partículas para transmitirse; el vacío carece de materia."
  },
  {
    "id": 1113,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "La meiosis es un tipo de división celular que reduce el número de cromosomas a la mitad.",
    "question": "¿Cuál es la importancia biológica de la meiosis?",
    "options": [
      {
        "id": "A",
        "text": "Permitir el crecimiento de los tejidos en organismos multicelulares."
      },
      {
        "id": "B",
        "text": "Producir gametos para la reproducción sexual y aumentar la variabilidad genética."
      },
      {
        "id": "C",
        "text": "Reparar células dañadas por enfermedades o accidentes."
      },
      {
        "id": "D",
        "text": "Generar copias exactas de organismos unicelulares."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La meiosis genera células haploides y permite el intercambio de segmentos de ADN (entrecruzamiento)."
  },
  {
    "id": 1114,
    "subject": "Ciencias Naturales",
    "difficulty": "Difícil",
    "context": "Un circuito tiene dos resistencias iguales conectadas en paralelo a una fuente de voltaje.",
    "question": "Si se agrega una tercera resistencia igual en paralelo a las otras dos, ¿qué sucede con la resistencia total del circuito?",
    "options": [
      {
        "id": "A",
        "text": "Aumenta."
      },
      {
        "id": "B",
        "text": "Se mantiene igual."
      },
      {
        "id": "C",
        "text": "Disminuye."
      },
      {
        "id": "D",
        "text": "Se vuelve infinita."
      }
    ],
    "correctAnswer": "C",
    "explanation": "En circuitos en paralelo, a mayor número de caminos para la corriente, menor es la resistencia equivalente total."
  },
  {
    "id": 1115,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "La energía cinética de un cuerpo depende de su masa y de su velocidad.",
    "question": "Si un carro duplica su velocidad, ¿qué sucede con su energía cinética?",
    "options": [
      {
        "id": "A",
        "text": "Se duplica."
      },
      {
        "id": "B",
        "text": "No cambia."
      },
      {
        "id": "C",
        "text": "Aumenta cuatro veces."
      },
      {
        "id": "D",
        "text": "Se reduce a la mitad."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La energía cinética es proporcional al cuadrado de la velocidad (Ec = 1/2 mv²)."
  },
  {
    "id": 1116,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "Las vacunas ayudan a prevenir enfermedades infectocontagiosas.",
    "question": "¿Cómo actúan las vacunas en el sistema inmunológico?",
    "options": [
      {
        "id": "A",
        "text": "Matan directamente a los virus que ya están en el cuerpo."
      },
      {
        "id": "B",
        "text": "Estimulan la producción de anticuerpos y células de memoria."
      },
      {
        "id": "C",
        "text": "Debilitan los huesos para que los gérmenes no puedan entrar."
      },
      {
        "id": "D",
        "text": "Reemplazan a los glóbulos blancos que están cansados."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Las vacunas presentan antígenos inofensivos para que el sistema inmune aprenda a reconocer y atacar al patógeno real en el futuro."
  },
  {
    "id": 1117,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "Un metal se calienta en un extremo y, al poco tiempo, el otro extremo también está caliente.",
    "question": "¿A través de qué mecanismo se transfirió el calor?",
    "options": [
      {
        "id": "A",
        "text": "Convección."
      },
      {
        "id": "B",
        "text": "Conducción."
      },
      {
        "id": "C",
        "text": "Radiación."
      },
      {
        "id": "D",
        "text": "Evaporación."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La conducción es la transferencia de calor a través del contacto directo entre partículas de un sólido."
  },
  {
    "id": 1118,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "En un experimento se observa que un bloque de hielo se derrite a 0°C a nivel del mar.",
    "question": "Durante el proceso de fusión (mientras el hielo se derrite), ¿qué sucede con la temperatura de la mezcla hielo-agua?",
    "options": [
      {
        "id": "A",
        "text": "Aumenta progresivamente hasta llegar a 100°C."
      },
      {
        "id": "B",
        "text": "Se mantiene constante en 0°C hasta que todo el hielo se derrita."
      },
      {
        "id": "C",
        "text": "Disminuye porque el hielo está muy frío."
      },
      {
        "id": "D",
        "text": "Depende de qué tan fuerte sea la llama que calienta el hielo."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Durante un cambio de estado, la energía se utiliza para romper enlaces moleculares y no para aumentar la energía cinética media (temperatura)."
  },
  {
    "id": 1119,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "Los isótopos de un elemento tienen propiedades físicas diferentes.",
    "question": "¿En qué se diferencian dos isótopos del mismo elemento químico?",
    "options": [
      {
        "id": "A",
        "text": "En el número de electrones."
      },
      {
        "id": "B",
        "text": "En el número de protones."
      },
      {
        "id": "C",
        "text": "En el número de neutrones."
      },
      {
        "id": "D",
        "text": "En la carga eléctrica total."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Los isótopos tienen el mismo número atómico (protones) pero diferente número de masa debido a la cantidad de neutrones."
  },
  {
    "id": 1120,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "La biodiversidad es fundamental para la estabilidad de los ecosistemas.",
    "question": "¿Qué consecuencia trae la pérdida de una especie clave en una red trófica?",
    "options": [
      {
        "id": "A",
        "text": "No tiene efecto, otras especies ocuparán su lugar de inmediato."
      },
      {
        "id": "B",
        "text": "Puede causar un desequilibrio que afecte a muchas otras poblaciones."
      },
      {
        "id": "C",
        "text": "Ayuda a que el ecosistema se vuelva más productivo."
      },
      {
        "id": "D",
        "text": "Provoca que todas las plantas mueran instantáneamente."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Las redes tróficas son sistemas interconectados; la remoción de un eslabón altera las poblaciones de sus presas y depredadores."
  },
  {
    "id": 1121,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "Un rayo de luz pasa del aire al vidrio y se desvía de su trayectoria original.",
    "question": "¿Cómo se llama este fenómeno óptico?",
    "options": [
      {
        "id": "A",
        "text": "Reflexión."
      },
      {
        "id": "B",
        "text": "Refracción."
      },
      {
        "id": "C",
        "text": "Difracción."
      },
      {
        "id": "D",
        "text": "Dispersión."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La refracción es el cambio de dirección y velocidad de una onda al pasar de un medio transparente a otro."
  },
  {
    "id": 1122,
    "subject": "Ciencias Naturales",
    "difficulty": "Media",
    "context": "El ADN es la molécula que porta la información genética.",
    "question": "¿Cuál es la estructura básica que forma la doble hélice del ADN?",
    "options": [
      {
        "id": "A",
        "text": "Aminoácidos."
      },
      {
        "id": "B",
        "text": "Nucleótidos."
      },
      {
        "id": "C",
        "text": "Lípidos."
      },
      {
        "id": "D",
        "text": "Monosacáridos."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cada nucleótido consta de un grupo fosfato, una desoxirribosa y una base nitrogenada."
  },
  {
    "id": 1123,
    "subject": "Ciencias Naturales",
    "difficulty": "Fácil",
    "context": "Un imán se parte a la mitad.",
    "question": "¿Qué sucede con los trozos resultantes?",
    "options": [
      {
        "id": "A",
        "text": "Un trozo se vuelve solo Polo Norte y el otro solo Polo Sur."
      },
      {
        "id": "B",
        "text": "Ambos trozos se convierten en nuevos imanes con sus propios dos polos."
      },
      {
        "id": "C",
        "text": "Pierden sus propiedades magnéticas y se vuelven hierro normal."
      },
      {
        "id": "D",
        "text": "Se repelen entre sí con una fuerza infinita."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los monopolos magnéticos no existen en la naturaleza macroscópica; al partir un imán se crean nuevos dipolos."
  },
  {
    "id": 1124,
    "subject": "Inglés",
    "difficulty": "Pre A1",
    "context": "Notice: 'Please, do not give food to the animals'.",
    "question": "Where can you see this notice?",
    "options": [
      {
        "id": "A",
        "text": "In a school."
      },
      {
        "id": "B",
        "text": "At a zoo."
      },
      {
        "id": "C",
        "text": "In a toy shop."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los zoológicos son los lugares donde típicamente se encuentran avisos prohibiendo alimentar a los animales para proteger su salud."
  },
  {
    "id": 1125,
    "subject": "Inglés",
    "difficulty": "Pre A1",
    "context": "Notice: 'Do not use the elevator between 10:00 p.m. and 6:00 a.m.'",
    "question": "Where can you see this notice?",
    "options": [
      {
        "id": "A",
        "text": "In a park."
      },
      {
        "id": "B",
        "text": "On a plane."
      },
      {
        "id": "C",
        "text": "In a hotel."
      },
      {
        "id": "D",
        "text": "In a building."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Este tipo de restricciones horarias para el uso de ascensores son comunes en edificios residenciales o comerciales por mantenimiento o seguridad."
  },
  {
    "id": 1126,
    "subject": "Inglés",
    "difficulty": "A1",
    "context": "Description: 'People usually put these on so that they can see better'.",
    "question": "Which word matches the description?",
    "options": [
      {
        "id": "A",
        "text": "Sunglasses."
      },
      {
        "id": "B",
        "text": "Gloves."
      },
      {
        "id": "C",
        "text": "Hats."
      },
      {
        "id": "D",
        "text": "Watch."
      },
      {
        "id": "E",
        "text": "Glasses."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Los lentes (glasses) son el objeto diseñado específicamente para corregir o mejorar la visión."
  },
  {
    "id": 1127,
    "subject": "Inglés",
    "difficulty": "Pre A1",
    "context": "Conversation: 'How often do you go to the cinema?'",
    "question": "Complete the conversation:",
    "options": [
      {
        "id": "A",
        "text": "Once a week."
      },
      {
        "id": "B",
        "text": "It's near."
      },
      {
        "id": "C",
        "text": "Yes, I do."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La pregunta pide frecuencia ('How often'), por lo que la respuesta debe indicar una periodicidad como 'una vez a la semana'."
  },
  {
    "id": 1128,
    "subject": "Inglés",
    "difficulty": "A2",
    "context": "Text about 'E-readers': 'E-readers are becoming very popular. They are light and you can carry (10) books in one small device'.",
    "question": "Choose the correct word for (10):",
    "options": [
      {
        "id": "A",
        "text": "much"
      },
      {
        "id": "B",
        "text": "any"
      },
      {
        "id": "C",
        "text": "many"
      },
      {
        "id": "D",
        "text": "none"
      }
    ],
    "correctAnswer": "C",
    "explanation": "'Books' es un sustantivo contable en plural, por lo que se debe usar 'many' para indicar una gran cantidad."
  },
  {
    "id": 1129,
    "subject": "Inglés",
    "difficulty": "A2",
    "context": "Reading about 'A special journey': A man travels across South America on a motorcycle. He describes the landscapes and the people he meets.",
    "question": "What is the main idea of the second paragraph?",
    "options": [
      {
        "id": "A",
        "text": "The difficulties of riding a motorcycle."
      },
      {
        "id": "B",
        "text": "The beauty of the places he visited."
      },
      {
        "id": "C",
        "text": "The types of food he ate."
      },
      {
        "id": "D",
        "text": "His plans for the next trip."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El párrafo se enfoca en las descripciones visuales y la apreciación estética de los lugares recorridos."
  },
  {
    "id": 1130,
    "subject": "Inglés",
    "difficulty": "B1",
    "context": "Text about 'The history of coffee': 'Coffee was first (24) in Ethiopia. Later, it was taken to the Arab world'.",
    "question": "Select the correct verb for (24):",
    "options": [
      {
        "id": "A",
        "text": "found"
      },
      {
        "id": "B",
        "text": "made"
      },
      {
        "id": "C",
        "text": "discovered"
      },
      {
        "id": "D",
        "text": "sold"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Históricamente, se habla del 'descubrimiento' del café en su estado natural en Etiopía."
  },
  {
    "id": 1131,
    "subject": "Inglés",
    "difficulty": "Pre A1",
    "context": "Notice: 'Do not take photos here'.",
    "question": "Where can you see this notice?",
    "options": [
      {
        "id": "A",
        "text": "In a museum."
      },
      {
        "id": "B",
        "text": "On a street."
      },
      {
        "id": "C",
        "text": "In a playground."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Muchos museos restringen el uso de cámaras para proteger las obras de arte de la luz del flash."
  },
  {
    "id": 1132,
    "subject": "Inglés",
    "difficulty": "A1",
    "context": "Description: 'You can buy bread and cakes in this place'.",
    "question": "Which word matches the description?",
    "options": [
      {
        "id": "A",
        "text": "Market."
      },
      {
        "id": "B",
        "text": "Bakery."
      },
      {
        "id": "C",
        "text": "Bank."
      },
      {
        "id": "D",
        "text": "Library."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Una 'bakery' (panadería) es el establecimiento especializado en productos de panificación y repostería."
  },
  {
    "id": 1133,
    "subject": "Inglés",
    "difficulty": "A1",
    "context": "Conversation: 'I'm sorry, I forgot your book'.",
    "question": "Complete the conversation:",
    "options": [
      {
        "id": "A",
        "text": "Don't worry."
      },
      {
        "id": "B",
        "text": "I agree."
      },
      {
        "id": "C",
        "text": "It's hers."
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Don't worry' es la respuesta convencional para aceptar una disculpa."
  },
  {
    "id": 1134,
    "subject": "Inglés",
    "difficulty": "A2",
    "context": "Text about 'Honey Bees': 'Bees are very important (15) they help plants grow'.",
    "question": "Select the correct connector for (15):",
    "options": [
      {
        "id": "A",
        "text": "because"
      },
      {
        "id": "B",
        "text": "but"
      },
      {
        "id": "C",
        "text": "so"
      },
      {
        "id": "D",
        "text": "while"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Se requiere una conjunción causal para explicar la razón de la importancia de las abejas."
  },
  {
    "id": 1135,
    "subject": "Inglés",
    "difficulty": "B1",
    "context": "Reading: 'The Future of Cities'. The author discusses how technology will change urban life, focusing on green spaces and transport.",
    "question": "What does the author think about self-driving cars?",
    "options": [
      {
        "id": "A",
        "text": "They will increase traffic jams."
      },
      {
        "id": "B",
        "text": "They will make cities safer and cleaner."
      },
      {
        "id": "C",
        "text": "They are too expensive for most people."
      },
      {
        "id": "D",
        "text": "They will replace public transport entirely."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El texto argumenta que la automatización reducirá los accidentes humanos y las emisiones."
  },
  {
    "id": 1136,
    "subject": "Inglés",
    "difficulty": "B1",
    "context": "Text: 'If I (40) more money, I would travel around the world'.",
    "question": "Choose the correct form for (40):",
    "options": [
      {
        "id": "A",
        "text": "have"
      },
      {
        "id": "B",
        "text": "had"
      },
      {
        "id": "C",
        "text": "will have"
      },
      {
        "id": "D",
        "text": "has"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Se utiliza el 'Second Conditional' (If + simple past) para hablar de situaciones hipotéticas en el presente."
  }
];
