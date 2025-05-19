// Generated from Lenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LenguajeListener from './LenguajeListener.js';
import LenguajeVisitor from './LenguajeVisitor.js';

const serializedATN = [4,1,17,92,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,1,4,1,26,8,1,
11,1,12,1,27,1,2,1,2,1,2,3,2,33,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,42,8,
3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
7,1,7,1,7,5,7,64,8,7,10,7,12,7,67,9,7,1,7,3,7,70,8,7,1,8,1,8,1,8,1,8,1,8,
1,8,3,8,78,8,8,1,9,1,9,5,9,82,8,9,10,9,12,9,85,9,9,1,10,4,10,88,8,10,11,
10,12,10,89,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,1,2,0,1,1,15,16,90,
0,22,1,0,0,0,2,25,1,0,0,0,4,32,1,0,0,0,6,34,1,0,0,0,8,43,1,0,0,0,10,47,1,
0,0,0,12,52,1,0,0,0,14,69,1,0,0,0,16,77,1,0,0,0,18,79,1,0,0,0,20,87,1,0,
0,0,22,23,3,2,1,0,23,1,1,0,0,0,24,26,3,4,2,0,25,24,1,0,0,0,26,27,1,0,0,0,
27,25,1,0,0,0,27,28,1,0,0,0,28,3,1,0,0,0,29,33,3,6,3,0,30,33,3,10,5,0,31,
33,3,12,6,0,32,29,1,0,0,0,32,30,1,0,0,0,32,31,1,0,0,0,33,5,1,0,0,0,34,35,
5,3,0,0,35,36,5,7,0,0,36,37,3,14,7,0,37,38,5,8,0,0,38,41,3,8,4,0,39,40,5,
4,0,0,40,42,3,8,4,0,41,39,1,0,0,0,41,42,1,0,0,0,42,7,1,0,0,0,43,44,5,9,0,
0,44,45,3,2,1,0,45,46,5,10,0,0,46,9,1,0,0,0,47,48,3,18,9,0,48,49,5,11,0,
0,49,50,3,14,7,0,50,51,5,13,0,0,51,11,1,0,0,0,52,53,5,5,0,0,53,54,5,12,0,
0,54,55,5,6,0,0,55,56,5,7,0,0,56,57,3,14,7,0,57,58,5,8,0,0,58,59,5,13,0,
0,59,13,1,0,0,0,60,65,3,16,8,0,61,62,5,14,0,0,62,64,3,16,8,0,63,61,1,0,0,
0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,70,1,0,0,0,67,65,1,0,0,0,
68,70,5,2,0,0,69,60,1,0,0,0,69,68,1,0,0,0,70,15,1,0,0,0,71,78,3,18,9,0,72,
78,3,20,10,0,73,74,5,7,0,0,74,75,3,14,7,0,75,76,5,8,0,0,76,78,1,0,0,0,77,
71,1,0,0,0,77,72,1,0,0,0,77,73,1,0,0,0,78,17,1,0,0,0,79,83,5,15,0,0,80,82,
7,0,0,0,81,80,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,19,1,
0,0,0,85,83,1,0,0,0,86,88,5,16,0,0,87,86,1,0,0,0,88,89,1,0,0,0,89,87,1,0,
0,0,89,90,1,0,0,0,90,21,1,0,0,0,8,27,32,41,65,69,77,83,89];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LenguajeParser extends antlr4.Parser {

    static grammarFileName = "Lenguaje.g4";
    static literalNames = [ null, "'_'", null, "'if'", "'else'", "'console'", 
                            "'log'", "'('", "')'", "'{'", "'}'", "'='", 
                            "'.'", "';'" ];
    static symbolicNames = [ null, null, "CADENA", "IF", "ELSE", "CONSOLE", 
                             "LOG", "PARENTESIS_ABRE", "PARENTESIS_CIERRA", 
                             "LLAVE_ABRE", "LLAVE_CIERRA", "IGUAL", "PUNTO", 
                             "PUNTO_Y_COMA", "OPERADOR", "LETTER", "DIGIT", 
                             "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "ifStatement", 
                         "block", "assignmentStatement", "consoleStatement", 
                         "expression", "term", "identifier", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LenguajeParser.ruleNames;
        this.literalNames = LenguajeParser.literalNames;
        this.symbolicNames = LenguajeParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LenguajeParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.instrucciones();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LenguajeParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.instruccion();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 32808) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LenguajeParser.RULE_instruccion);
	    try {
	        this.state = 32;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 29;
	            this.ifStatement();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 30;
	            this.assignmentStatement();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 31;
	            this.consoleStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LenguajeParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(LenguajeParser.IF);
	        this.state = 35;
	        this.match(LenguajeParser.PARENTESIS_ABRE);
	        this.state = 36;
	        this.expression();
	        this.state = 37;
	        this.match(LenguajeParser.PARENTESIS_CIERRA);
	        this.state = 38;
	        this.block();
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 39;
	            this.match(LenguajeParser.ELSE);
	            this.state = 40;
	            this.block();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LenguajeParser.RULE_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(LenguajeParser.LLAVE_ABRE);
	        this.state = 44;
	        this.instrucciones();
	        this.state = 45;
	        this.match(LenguajeParser.LLAVE_CIERRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LenguajeParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.identifier();
	        this.state = 48;
	        this.match(LenguajeParser.IGUAL);
	        this.state = 49;
	        this.expression();
	        this.state = 50;
	        this.match(LenguajeParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LenguajeParser.RULE_consoleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(LenguajeParser.CONSOLE);
	        this.state = 53;
	        this.match(LenguajeParser.PUNTO);
	        this.state = 54;
	        this.match(LenguajeParser.LOG);
	        this.state = 55;
	        this.match(LenguajeParser.PARENTESIS_ABRE);
	        this.state = 56;
	        this.expression();
	        this.state = 57;
	        this.match(LenguajeParser.PARENTESIS_CIERRA);
	        this.state = 58;
	        this.match(LenguajeParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LenguajeParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	        case 15:
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.term();
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===14) {
	                this.state = 61;
	                this.match(LenguajeParser.OPERADOR);
	                this.state = 62;
	                this.term();
	                this.state = 67;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 68;
	            this.match(LenguajeParser.CADENA);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LenguajeParser.RULE_term);
	    try {
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
	            this.identifier();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 72;
	            this.number();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 73;
	            this.match(LenguajeParser.PARENTESIS_ABRE);
	            this.state = 74;
	            this.expression();
	            this.state = 75;
	            this.match(LenguajeParser.PARENTESIS_CIERRA);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LenguajeParser.RULE_identifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(LenguajeParser.LETTER);
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 98306) !== 0)) {
	            this.state = 80;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 98306) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LenguajeParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 86;
	            this.match(LenguajeParser.DIGIT);
	            this.state = 89; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===16);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LenguajeParser.EOF = antlr4.Token.EOF;
LenguajeParser.T__0 = 1;
LenguajeParser.CADENA = 2;
LenguajeParser.IF = 3;
LenguajeParser.ELSE = 4;
LenguajeParser.CONSOLE = 5;
LenguajeParser.LOG = 6;
LenguajeParser.PARENTESIS_ABRE = 7;
LenguajeParser.PARENTESIS_CIERRA = 8;
LenguajeParser.LLAVE_ABRE = 9;
LenguajeParser.LLAVE_CIERRA = 10;
LenguajeParser.IGUAL = 11;
LenguajeParser.PUNTO = 12;
LenguajeParser.PUNTO_Y_COMA = 13;
LenguajeParser.OPERADOR = 14;
LenguajeParser.LETTER = 15;
LenguajeParser.DIGIT = 16;
LenguajeParser.WS = 17;

LenguajeParser.RULE_programa = 0;
LenguajeParser.RULE_instrucciones = 1;
LenguajeParser.RULE_instruccion = 2;
LenguajeParser.RULE_ifStatement = 3;
LenguajeParser.RULE_block = 4;
LenguajeParser.RULE_assignmentStatement = 5;
LenguajeParser.RULE_consoleStatement = 6;
LenguajeParser.RULE_expression = 7;
LenguajeParser.RULE_term = 8;
LenguajeParser.RULE_identifier = 9;
LenguajeParser.RULE_number = 10;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_instruccion;
    }

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_ifStatement;
    }

	IF() {
	    return this.getToken(LenguajeParser.IF, 0);
	};

	PARENTESIS_ABRE() {
	    return this.getToken(LenguajeParser.PARENTESIS_ABRE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PARENTESIS_CIERRA() {
	    return this.getToken(LenguajeParser.PARENTESIS_CIERRA, 0);
	};

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(LenguajeParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_block;
    }

	LLAVE_ABRE() {
	    return this.getToken(LenguajeParser.LLAVE_ABRE, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	LLAVE_CIERRA() {
	    return this.getToken(LenguajeParser.LLAVE_CIERRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_assignmentStatement;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	IGUAL() {
	    return this.getToken(LenguajeParser.IGUAL, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(LenguajeParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_consoleStatement;
    }

	CONSOLE() {
	    return this.getToken(LenguajeParser.CONSOLE, 0);
	};

	PUNTO() {
	    return this.getToken(LenguajeParser.PUNTO, 0);
	};

	LOG() {
	    return this.getToken(LenguajeParser.LOG, 0);
	};

	PARENTESIS_ABRE() {
	    return this.getToken(LenguajeParser.PARENTESIS_ABRE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PARENTESIS_CIERRA() {
	    return this.getToken(LenguajeParser.PARENTESIS_CIERRA, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(LenguajeParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterConsoleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitConsoleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitConsoleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	OPERADOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LenguajeParser.OPERADOR);
	    } else {
	        return this.getToken(LenguajeParser.OPERADOR, i);
	    }
	};


	CADENA() {
	    return this.getToken(LenguajeParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_term;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	PARENTESIS_ABRE() {
	    return this.getToken(LenguajeParser.PARENTESIS_ABRE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PARENTESIS_CIERRA() {
	    return this.getToken(LenguajeParser.PARENTESIS_CIERRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_identifier;
    }

	LETTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LenguajeParser.LETTER);
	    } else {
	        return this.getToken(LenguajeParser.LETTER, i);
	    }
	};


	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LenguajeParser.DIGIT);
	    } else {
	        return this.getToken(LenguajeParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_number;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LenguajeParser.DIGIT);
	    } else {
	        return this.getToken(LenguajeParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LenguajeParser.ProgramaContext = ProgramaContext; 
LenguajeParser.InstruccionesContext = InstruccionesContext; 
LenguajeParser.InstruccionContext = InstruccionContext; 
LenguajeParser.IfStatementContext = IfStatementContext; 
LenguajeParser.BlockContext = BlockContext; 
LenguajeParser.AssignmentStatementContext = AssignmentStatementContext; 
LenguajeParser.ConsoleStatementContext = ConsoleStatementContext; 
LenguajeParser.ExpressionContext = ExpressionContext; 
LenguajeParser.TermContext = TermContext; 
LenguajeParser.IdentifierContext = IdentifierContext; 
LenguajeParser.NumberContext = NumberContext; 
