
grammar Lenguaje;

programa: instrucciones;

instrucciones: instruccion+;

// Definición de una instrucción
instruccion: ifStatement
           | assignmentStatement
           | consoleStatement
           ;

ifStatement: IF PARENTESIS_ABRE expression PARENTESIS_CIERRA block (ELSE block)?;

block: LLAVE_ABRE instrucciones LLAVE_CIERRA;

assignmentStatement: identifier IGUAL expression PUNTO_Y_COMA;

consoleStatement: CONSOLE PUNTO LOG PARENTESIS_ABRE expression PARENTESIS_CIERRA PUNTO_Y_COMA;

expression: term (OPERADOR term)* | CADENA;

term: identifier
    | number
    | PARENTESIS_ABRE expression PARENTESIS_CIERRA
    ;

identifier: LETTER (LETTER | DIGIT | '_')*;
number: DIGIT+;
CADENA: '"' (~["\r\n])* '"'; 

// Definición de tokens
IF: 'if';
ELSE: 'else';
CONSOLE: 'console';
LOG: 'log';
PARENTESIS_ABRE: '(';
PARENTESIS_CIERRA: ')';
LLAVE_ABRE: '{';
LLAVE_CIERRA: '}';
IGUAL: '=';
PUNTO: '.';
PUNTO_Y_COMA: ';';
OPERADOR: '+' | '-' | '>' | '<' | '==' | '!=';

// Definición de caracteres
LETTER: [a-zA-Z];
DIGIT: [0-9];

// Ignorar espacios en blanco
WS: [ \t\r\n]+ -> skip;
