/* Lista de temas organizados por secciones
const topics = [
  { title: "Alphabet and Personal Information. Listen and Repeat" },
  { title: "Personal Information" },
  { title: "Let’s check some common questions" },
  { title: "Reading Time" },
  { title: "Practice these conversations" },
  { title: "PRACTICE THE – ED – SOUND" },
  { title: "Present Progressive - Explanation" },
  { title: "Present Progressive - Affirmative Structure" },
  { title: "Time Expressions" },
  { title: "Reading Time" },
  { title: "TIME TO PRACTICE (What are you doing?)" },
  { title: "Present Progressive - Negative Structure" },
  { title: "Contractions" },
  { title: "Complete the following sentences using the negative form" },
  { title: "Present Progressive - Question Structure" },
  { title: "Change sentences into question form" },
  { title: "COMPLETE THE QUESTIONS" },
  { title: "READ AND ANSWER WITH SHORT AND LONG ANSWERS" },
  { title: "Present Progressive - WH-Question Structure" },
  { title: "Make questions from words" },
  { title: "LOOK AT THE PICTURES. MAKE QUESTIONS AND ANSWER THEM" },
  { title: "Cardinal Numbers" },
  { title: "BASIC MATH" },
  { title: "Ordinal Numbers" },
  { title: "This, That, These, Those - Explanation" },
  { title: "Possessive Adjectives - Explanation" },
  { title: "POSSESSIVE ADJECTIVES" },
  { title: "Write in English" },
  { title: "Reading time" },
  { title: "Describing People and things. (be) - Explanation" },
  { title: "Vocabulario: Ropa y accesorios" },
  { title: "Vocabulario: Estilos de cabello y personalidad" },
  { title: "Describing People and things. (have/has) - Explanation" },
  { title: "Object Pronouns - Explanation" },
  { title: "IMPERATIVE FORM USING THE OBJECT PRONOUNS" },
  { title: "Possessive Pronouns - Explanation" },
  { title: "CHOOSE THE RIGHT POSSESSIVE PRONOUNS" },
  { title: "THE USE OF WHOSE ????" },
  { title: "READ AND WRITE IN ENGLISH" },
  { title: "Past Progressive - Affirmative Structure" },
  { title: "TIME EXPRESSIONS" },
  { title: "COMPLETE THE SENTENCES" },
  { title: "Reading time" },
  { title: "Past Progressive - Negative Structure" },
  { title: "Read and write in English" },
  { title: "TIME TO PRACTICE" },
  { title: "Past Progressive - Question Structure" },
  { title: "Write questions and answer them" },
  { title: "LOOK AT THE PICTURE AND ANSWER" },
  { title: "Past Progressive - WH-Question Structure" },
  { title: "Telling the time" },
  { title: "As, as. Tan......como" },
  { title: "Comparativo de Igualdad" },
  { title: "Comparative Form - Explanation" },
  { title: "Superlative Form - Explanation" },
  { title: "Simple Future Will - Affirmative Structure" },
  { title: "Simple Future will / won’t - Negative Structure" },
  { title: "Simple Future Will - Question Structure" },
  { title: "Simple Future Will - WH-Question Structure" },
  { title: "Idiomatic Future (Going to) - Affirmative Structure" },
  { title: "Idiomatic Future (Going to) - Negative Structure" },
  { title: "Idiomatic Future (Going to) - Question Structure" },
  { title: "Idiomatic Future (Going to) - WH-Question Structure" },
  { title: "Simple Present - Affirmative Structure" },
  { title: "Simple Present - Negative Structure" },
  { title: "FREQUENCY ADVERBS" },
  { title: "Still, anymore" },
  { title: "Simple Present - WH-Question Structure" },
  { title: "Simple Present - WH-Question Structure (detailed)" },
  { title: "Simple Past - Affirmative Structure" },
  { title: "Simple Past - Negative Structure" },
  { title: "Simple Past - Question Structure" },
  { title: "Simple Past - WH-Question Structure" },
  { title: "Simple Present Perfect - Affirmative Structure" },
  { title: "Simple Present Perfect - Negative Structure" },
  { title: "Already / Yet" },
  { title: "Simple Present Perfect - Question Structure" },
  { title: "Simple Present Perfect - WH-Question Structure" },
  { title: "Present Perfect Progressive - Affirmative Structure" },
  { title: "Present Perfect Progressive - Negative Structure" },
  { title: "Present Perfect Progressive - Question Structure" },
  { title: "Time Expressions Review" },
  { title: "Present Perfect Progressive - WH-Question Structure" },
  { title: "Reflexive Pronouns - Explanation" },
  { title: "Future Perfect - Explanation" },
  { title: "Past Perfect - Explanation" },
  { title: "Matrice de Tiempos Verbales" },
  { title: "Get - Explanation" },
  { title: "TIEMPOS APRENDIDOS - USANDO “GET” AFIRMATIVO" },
  { title: "TIEMPOS APRENDIDOS - USANDO “GET” NEGATIVO" },
  { title: "TIEMPOS APRENDIDOS - USANDO “GET” QUESTION" },
  { title: "TIEMPOS APRENDIDOS - USANDO “GET” WH-QUESTION" },
  { title: "OTROS USOS DE “GET”" },
  { title: "MODALS" },
  { title: "Progressive of Modals - Explanation" },
  { title: "Polite request - Explanation" },
  { title: "Tag Question - Explanation" },
  { title: "Do vs Make - Explanation" },
  { title: "There Be (estructuras afirmativas/negativas)" },
  { title: "As- Like" },
  { title: "Until / Just" },
  { title: "Very, So, Quite, Too (Adverbs of Degree)" },
  { title: "Use of: me too / so / too" },
  { title: "Use of: me either / me neither / either / neither" },
  { title: "Adjective Clauses (Relative Clauses) - Explanation" },
  { title: "Noun Clauses - Explanation" },
  { title: "Adverb Clauses - Explanation" },
  { title: "Indefinite Pronouns" },
  { title: "Zero Conditional - Explanation" },
  { title: "First Conditional - Explanation" },
  { title: "Second Conditional - Explanation" },
  { title: "Third Conditional - Explanation" },
  { title: "Subjunctive - EXPLANATION" },
  { title: "Reported Speech - EXPLANATION" },
  { title: "Passive Voice - EXPLANATION" },
  { title: "Cause and Effect Connectors" },
  { title: "Contrast Connectors" },
  { title: "Purpose Connectors" },
  { title: "Different Functions for TO and FOR" },
  { title: "Condition Connectors" },
  { title: "Coordinating Conjunctions" },
  { title: "Infinitive and Gerunds - Explanation" },
  { title: "Verbos comúnmente seguidos de un Gerundio" },
  { title: "Verbos comúnmente seguidos de un infinitivo" },
  { title: "Verbos + pro (noun) + infinitivo" },
  { title: "Go + Gerundio" },
  { title: "Verbs and Vocabulary" }
];
*/const mainContent = document.getElementById('topic-content');
const topicTitle = document.getElementById('topic-title');
const sidebar = document.getElementById('sidebar');
const openSidebarBtn = document.getElementById('open-sidebar');
const closeSidebarBtn = document.getElementById('close-sidebar');
const body = document.body;

openSidebarBtn.addEventListener('click', () => {
  sidebar.style.transform = 'translateX(0)';
  body.classList.add('sidebar-visible');
});

closeSidebarBtn.addEventListener('click', () => {
  sidebar.style.transform = 'translateX(-100%)';
  body.classList.remove('sidebar-visible');
});

// Manejo de botones para cargar temas sin usar onclick inline
document.querySelectorAll('nav[role="navigation"] button').forEach(button => {
  button.addEventListener('click', () => {
    const htmlFile = button.getAttribute('data-html');
    const cssFile = button.getAttribute('data-css');
    const jsFile = button.getAttribute('data-js');
    loadContent(htmlFile, cssFile, jsFile);
  });
});

async function loadContent(htmlFile, cssFile, jsFile) {
  try {
    // 1. Cargar HTML
    const response = await fetch(htmlFile);
    if (!response.ok) throw new Error('Error al cargar el contenido HTML');
    let htmlText = await response.text();
    htmlText = extractBodyContent(htmlText);

    // 2. Insertar contenido
    mainContent.innerHTML = htmlText;

    // 3. Extraer y mostrar título
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlText;
    const h1 = tempDiv.querySelector('h1');
    topicTitle.textContent = h1 ? h1.textContent : 'Tema';

    // 4. Cargar CSS
    loadCSS(cssFile);

    // 5. Cargar y ejecutar JS (esperar a que cargue)
    await loadJS(jsFile);

    // 6. Cerrar sidebar
    sidebar.style.transform = 'translateX(-100%)';
    body.classList.remove('sidebar-visible');
  } catch (error) {
    mainContent.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

function extractBodyContent(html) {
  const bodyStart = html.indexOf('<body>');
  const bodyEnd = html.indexOf('</body>');
  if (bodyStart !== -1 && bodyEnd !== -1) {
    return html.substring(bodyStart + 6, bodyEnd).trim();
  }
  return html;
}

function loadCSS(cssFile) {
  // Elimina el CSS anterior si existe
  const oldLink = document.getElementById('dynamic-theme-css');
  if (oldLink) oldLink.remove();

  if (!cssFile) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = cssFile + '?t=' + new Date().getTime(); // Cache bust
  link.id = 'dynamic-theme-css';
  document.head.appendChild(link);
}

function loadJS(jsFile) {
  return new Promise((resolve, reject) => {
    // Elimina el script anterior si existe
    const oldScript = document.getElementById('dynamic-theme-js');
    if (oldScript) {
      oldScript.remove();
    }

    if (!jsFile) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = jsFile + '?t=' + new Date().getTime(); // Cache bust
    script.id = 'dynamic-theme-js';
    script.defer = true;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Error al cargar el script ${jsFile}`));

    document.body.appendChild(script);
  });
}
