const fs = require('fs');

const raw = JSON.parse(fs.readFileSync('./scratch_raw.json', 'utf8'));

// Include 4 mock questions for the other subjects to allow global testing
const otherSubjects = [
  {
    id: 1001,
    subject: "Lectura Crítica",
    difficulty: "Medio",
    context: "«La libertad no es hacer lo que uno quiere, sino querer lo que uno hace.» - Jean-Paul Sartre",
    question: "Según la frase de Sartre, ¿cómo se entiende la libertad?",
    options: [
      { id: "A", text: "Como la capacidad de evadir cualquier responsabilidad." },
      { id: "B", text: "Como la ausencia total de reglas en la sociedad." },
      { id: "C", text: "Como la aceptación consciente de nuestras propias acciones." },
      { id: "D", text: "Como el poder de imponer nuestra voluntad sobre los demás." }
    ],
    correctAnswer: "C",
    explanation: "Sartre asocia la libertad con la asunción consciente de nuestros actos, no con el capricho o la falta de reglas."
  },
  {
    id: 1002,
    subject: "Ciencias Naturales",
    difficulty: "Fácil",
    context: "La fotosíntesis es un proceso anabólico realizado por organismos autótrofos.",
    question: "¿Cuál de las siguientes sustancias NO es un producto de la fotosíntesis?",
    options: [
      { id: "A", text: "Glucosa" },
      { id: "B", text: "Oxígeno" },
      { id: "C", text: "Agua" },
      { id: "D", text: "Dióxido de Carbono" }
    ],
    correctAnswer: "D",
    explanation: "El Dióxido de Carbono (CO2) es un reactivo necesario para la fotosíntesis, no un producto."
  },
  {
    id: 1003,
    subject: "Sociales y Ciudadanas",
    difficulty: "Medio",
    context: "El mecanismo de participación ciudadana mediante el cual se convoca al pueblo para que apruebe o rechace un proyecto de norma jurídica se denomina...",
    question: "¿Qué mecanismo corresponde a la definición anterior?",
    options: [
      { id: "A", text: "Referendo" },
      { id: "B", text: "Plebiscito" },
      { id: "C", text: "Consulta popular" },
      { id: "D", text: "Cabildo abierto" }
    ],
    correctAnswer: "A",
    explanation: "El referendo es la convocatoria al pueblo para que apruebe o rechace un proyecto de norma jurídica."
  },
  {
    id: 1004,
    subject: "Inglés",
    difficulty: "Fácil",
    context: "Read the conversation: \nPaul: I am going to the supermarket. Do we need anything?\nMary: Yes, we run out of milk.",
    question: "What is Mary implying?",
    options: [
      { id: "A", text: "They have enough milk." },
      { id: "B", text: "Paul should buy milk." },
      { id: "C", text: "She will go buy milk later." },
      { id: "D", text: "She doesn't want milk." }
    ],
    correctAnswer: "B",
    explanation: "By saying they 'ran out' of milk, she implies they need more, so he should buy it."
  }
];

const cleanText = (str) => {
  if (!str) return '';
  return str.replace(/\[cite:\s*[\d,\s]+\]/g, '').trim();
};

const parsedQuestions = raw.map((q, i) => {
  return {
    id: i + 1,
    subject: cleanText(q.materia),
    difficulty: cleanText(q.dificultad),
    context: cleanText(q.contexto),
    question: cleanText(q.pregunta),
    options: [
      { id: "A", text: cleanText(q.opciones.A) },
      { id: "B", text: cleanText(q.opciones.B) },
      { id: "C", text: cleanText(q.opciones.C) },
      { id: "D", text: cleanText(q.opciones.D) }
    ],
    correctAnswer: cleanText(q.correcta),
    explanation: cleanText(q.explicacion)
  };
});

const allQuestions = [...otherSubjects, ...parsedQuestions];

const fileContent = `export const mockQuestions = ${JSON.stringify(allQuestions, null, 2)};\n`;

fs.writeFileSync('./lib/mock-data.js', fileContent);
console.log('Done!');
