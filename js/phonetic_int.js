/**
 * Unicode Phonetic Parser for writing in webpages
 * This script transliterate the user input and display unicode bangla characters
 * 
 * @name Ekushey Unicode Parser
 * @version 1.0 [Date 30th July, 2006]
 * @author Hasin Hayder. Visit My Homepage at http://hasin.wordpress.com
 * @license LGPL
 */
 
/**
 * This script is released under Lesser GNU Public License [LGPL] 
 * which implies that you are free to use this script in your 
 * web applications without any problem. No warranty ensured. If you like 
 * this script, Please acknowledge by keeping a link to my website 
 * http://hasin.wordpress.com in the page where you use this script. 
 */ 
/**
 * Last Modification:01/11/2008 by Sabuj Kundu(http://manchu.wordpress.com)
 */
 /**
  * Added Intellisense (27 Jan, 2008 by Hasin Hayder)
  */
  /**
  *Little modification by Sabuj Kundu to solve the dhirgho i kar and dhirgho u kar :P
  */
  
/* added shift intelligency by Hasin Hayder, 14th March 2008 */
/* added  accent key ( ` ) as joiner.   (By Sabuj Kundu, 17th March 2008) */
/*Fixed oi kar   (By Sabuj Kundu, 24th March 2008)*/
// Set of Characters


var activeta; //active text area
var phonetici=new Array();
var shift=false; //for intelligent shift
// phonetici bangla equivalents
//Bengali: {U+0980..U+09FF} 
phonetici['k'] = '\u0995'; // ko
//digits
phonetici['0']='\u09e6';//'০'; 
phonetici['1']='\u09e7';//'১';
phonetici['2']='\u09e8';//'২';
phonetici['3']='\u09e9';//'৩';
phonetici['4']='\u09ea';//'৪';
phonetici['5']='\u09eb';//'৫';
phonetici['6']='\u09ec';//'৬';
phonetici['7']='\u09ed';//'৭';
phonetici['8']='\u09ee';//'৮';
phonetici['9']='\u09ef';//'৯';

phonetici['i']='\u09BF'; // hrossho i kar
phonetici['I']='\u0987'; // hrossho i
phonetici['ii']='\u09C0'; // dirgho i kar
phonetici['II']='\u0988'; // dirgho i
phonetici['e']='\u09C7'; // e kar
phonetici['E'] = '\u098F'; // E
phonetici['U'] = '\u0989'; // hrossho u
phonetici['u'] = '\u09C1'; // hrossho u kar
phonetici['uu'] = '\u09C2'; // dirgho u kar
phonetici['UU'] = '\u098A'; // dirgho u
phonetici['r']='\u09B0'; // ro
phonetici['WR']='\u098B'; // wri
phonetici['a']='\u09BE'; // a kar
phonetici['A']='\u0986'; // shore a
phonetici['ao']='\u0985'; // shore o
phonetici['s']='\u09B8'; // dontyo so
phonetici['t']='\u099f'; // to
phonetici['K'] = '\u0996'; // Kho

phonetici['kh'] = '\u0996'; // kho

phonetici['n']='\u09A8'; // dontyo no
phonetici['N']='\u09A3'; // murdhonyo no
phonetici['T']='\u09A4'; // tto
phonetici['Th']='\u09A5'; // ttho

phonetici['d']='\u09A1'; // ddo
phonetici['dh']='\u09A2'; // ddho

phonetici['b']='\u09AC'; // bo
phonetici['bh']='\u09AD'; // bho
phonetici['v']='\u09AD'; // bho
//phonetici['rh']='o';	 // doye bindu ro
phonetici['R']='\u09DC';	 // doye bindu ro
phonetici['Rh']='\u09DD';	 // dhoye bindu ro
phonetici['g']='\u0997';	// go
phonetici['G']='\u0998';	// gho

phonetici['gh']='\u0998'; // gho

phonetici['h']='\u09B9';	// ho
phonetici['NG']='\u099E';	// yo
phonetici['j']='\u099C';	// borgio jo
phonetici['J']='\u099D'; // jho
phonetici['jh']='\u099D'; // jho
phonetici['c']='\u099A'; //  cho
phonetici['ch']='\u099B'; // cho
phonetici['C']='\u099B'; // ccho
phonetici['th']='\u09A0'; // tho
phonetici['p']='\u09AA'; // po
phonetici['f']='\u09AB'; // fo
phonetici['ph']='\u09AB'; // fo
phonetici['D']='\u09A6'; // do
phonetici['Dh']='\u09A7'; // dho

phonetici['z']='\u09AF';// ontoshyo zo
phonetici['y']='\u09DF';	// ontostho yo
phonetici['Ng']='\u0999';	// Uma
phonetici['ng']='\u0982';	// uniswor
phonetici['l']='\u09B2';	// lo
phonetici['m']='\u09AE';	// mo
phonetici['sh']='\u09B6';	// talobyo sho
phonetici['S']='\u09B7'; // mordhonyo sho
phonetici['O']= '\u0993';//'\u09CB'; // o
phonetici['ou']='\u099C'; // ou kar
phonetici['OU']='\u0994'; // OU
phonetici['Ou']='\u0994'; // OU
phonetici['Oi']='\u0990'; // OU
phonetici['OI']='\u0990'; // OU
phonetici['tt']='\u09CE'; // tto
phonetici['H']='\u0983'; // bisworgo
phonetici["."] ="\u0964"; // dari
phonetici[".."] = "."; // fullstop
phonetici['HH'] = '\u09CD' + '\u200c'; // hosonto
phonetici['NN'] = '\u0981'; // chondrobindu
phonetici['Y'] ='\u09CD'+'\u09AF'; // jo fola
phonetici['w'] ='\u09CD'+ '\u09AC'; // wri kar
phonetici['W'] ='\u09C3';// wri kar
phonetici['wr'] ='\u09C3'; // wri kar
phonetici['x'] ="\u0995"  + '\u09CD'+ '\u09B8';
phonetici['rY'] = phonetici['r']+ '\u200D'+ '\u09CD'+'\u09AF';
phonetici['L'] = phonetici['l'];
phonetici['Z'] = phonetici['z'];
phonetici['P'] = phonetici['p'];
phonetici['V'] = phonetici['v'];
phonetici['B'] = phonetici['b'];
phonetici['M'] = phonetici['m'];
phonetici['V'] = phonetici['v'];
phonetici['X'] = phonetici['x'];
phonetici['V'] = phonetici['v'];
phonetici['F'] = phonetici['f'];
phonetici['vowels']='aIiUuoiiouueEiEu'; //dont change this pattern
//End Set


var carry = '';  //This variable stores each keystrokes
var old_len =0; //This stores length parsed bangla charcter
var ctrlPressed=false;
var len_to_process_oi_kar=0;
var first_letter = false;
var carry2="";
isIE=document.all? 1:0;
var switched=false;

function checkKeyDown(ev)
{
	//just track the control key
	var e = (window.event) ? event.keyCode : ev.which;
	if (e=='17')
	{
		ctrlPressed = true;
	}
	else if(e==16)
	shift=true;
}

function checkKeyUp(ev)
{
	//just track the control key
	var e = (window.event) ? event.keyCode : ev.which;
	if (e=='17')
	{
		ctrlPressed = false;
		//alert(ctrlPressed);
	}

}



function parsePhonetici(evnt)
{
	// main phonetici parser
	var t = document.getElementById(activeta); // the active text area
	var e = (window.event) ? event.keyCode : evnt.which; // get the keycode

	if (e=='113')
	{
		//switch the keyboard mode
		if(ctrlPressed){
			switched = !switched;
			//alert("H"+switched);
			return true;
		}
	}

	if (switched) return true;
	
	if(ctrlPressed)
	{
		// user is pressing control, so leave the parsing
		e=0; 
	}

	if (shift)
	{
		var char_e = String.fromCharCode(e).toUpperCase(); // get the character equivalent to this keycode
		shift=false;
	}
	else
	var char_e = String.fromCharCode(e); // get the character equivalent to this keycode
	
	if(e==8 || e==32)
	{
		// if space is pressed we have to clear the carry. otherwise there will be some malformed conjunctions
		carry = " ";	
		old_len = 1;
		return;
	}

	lastcarry = carry;
	carry += "" + char_e;	 //append the current character pressed to the carry
	
	//the intellisense
	if ((phonetici['vowels'].indexOf(lastcarry)!=-1 && phonetici['vowels'].indexOf(char_e)!=-1) || (lastcarry==" " && phonetici['vowels'].indexOf(char_e)!=-1) )
	{
		//let's check for dhirgho i kar and dhirgho u kar :P		
		if(carry=='ii' || carry=='uu'){carry = lastcarry+char_e;}
		else
		{
			char_e = char_e.toUpperCase();
			carry = lastcarry+char_e;		
		}				
	}
	//intellisense ended
	
	bangla = parsePhoneticiCarry(carry); // get the combined equivalent
	tempBangla = parsePhoneticiCarry(char_e); // get the single equivalent

	if (tempBangla == ".." || bangla == "..") //that means it has next sibling
	{
		return false;
	}
	//alert(carry);
	if (char_e=="+" || char_e=="="||char_e=="`")
	{
		if(carry=="++" || carry=="=="||carry=="``")
		{
			// check if it is a plus/equal/accent  key/sign
			insertConjunction(char_e,old_len);
			old_len=1;
			return false;
		}	
		//otherwise this is a simple joiner
		insertAtCursor("\u09CD");old_len = 1;
		carry2=carry;
		carry=char_e;
		return false;
	}
	
	
	else if(old_len==0) //first character
	{
		// this is first time someone press a character
		insertConjunction(bangla,1);
		old_len=1;
		return false;
		
	}
/*	else if((char_e=='z' || char_e=='Z')&& carry2=="r+")//force Za-phola after Ra
	{
		//alert('yes');
		insertConjunction('\u200D'+'\u09CD'+phonetici['z'],1);
		old_len=1;	
		return false;
	} */
	
	else if(carry=="Ao")
	{
		// its a shore o
		insertConjunction(parsePhoneticiCarry("ao"),old_len);
		old_len=1;
		return false;
	}
	else if (carry == "ii")
	{
		// process dirgho i kar
		//alert('dirgho i kar');
		insertConjunction(phonetici['ii'],1);
		old_len = 1;
		return false;
	}
	
	else if (carry == "oI")
	{
		//oi kar
		insertConjunction('\u09C8',old_len); //same treatment like ou kar (By manchu)
		old_len = 1; 
		return false;
	}		

	else if (char_e == "o")
	{
		old_len = 1;
		insertAtCursor('\u09CB');
		carry = "o";
		return false;
	}
	
	
	else if (carry == "oU")
	{
		// ou kar
		insertConjunction("\u09CC",old_len);
		old_len = 1;
		return false;
	}	
	
	else if((bangla == "" && tempBangla !="")) //that means it has no joint equivalent
	{
		
		// there is no joint equivalent - so show the single equivalent. 
		bangla = tempBangla;
		if (bangla=="")
		{
			// there is no available equivalent - leave as is
			carry ="";
			return;
		}
		
		else
		{
			// found one equivalent
			carry = char_e;
			insertAtCursor(bangla);
			old_len = bangla.length;
			return false;
		}
	}
	else if(bangla!="")//joint equivalent found 
	{
		// we have found some joint equivalent process it
		
		insertConjunction(bangla, old_len);
		old_len = bangla.length;
		return false;
	}
}

    function parsePhoneticiCarry(code)
    {
	//this function just returns a bangla equivalent for a given keystroke
	//or a conjunction
	//just read the array - if found then return the bangla eq.
	//otherwise return a null value
        if (!phonetici[code])  //Oh my god :-( no bangla equivalent for this keystroke

        {
			return ''; //return a null value
        }
        else
        {
            return ( phonetici[code]);  //voila - we've found bangla equivalent
        }

    }


function insertAtCursor(myValue) {
	/**
	 * this function inserts a character at the current cursor position in a text area
	 * many thanks to alex king and phpMyAdmin for this cool function
	 * 
	 * This function is originally found in phpMyAdmin package and modified by Hasin Hayder to meet the requirement
	 */
	var myField = document.getElementById(activeta);
	if (document.selection) {		
		myField.focus();
		sel = document.selection.createRange();
		sel.text = myValue;
		sel.collapse(true);
		sel.select();
	}
	//MOZILLA/NETSCAPE support
	else if (myField.selectionStart || myField.selectionStart == 0) {
		
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		var scrollTop = myField.scrollTop;
		startPos = (startPos == -1 ? myField.value.length : startPos );
		myField.value = myField.value.substring(0, startPos)
		+ myValue
		+ myField.value.substring(endPos, myField.value.length);
		myField.focus();
		myField.selectionStart = startPos + myValue.length;
		myField.selectionEnd = startPos + myValue.length;
		myField.scrollTop = scrollTop;
	} else {
		var scrollTop = myField.scrollTop;
		myField.value += myValue;
		myField.focus();
		myField.scrollTop = scrollTop;
	}
}

function insertConjunction(myValue, len) {
	/**
	 * this function inserts a conjunction and removes previous single character at the current cursor position in a text area
	 * 
	 * This function is derived from the original one found in phpMyAdmin package and modified by Hasin to meet our need
	 */
	//alert(len);
	var myField = document.getElementById(activeta);
	if (document.selection) {
		myField.focus();
		sel = document.selection.createRange();
		if (myField.value.length >= len){  // here is that first conjunction bug in IE, if you use the > operator
			sel.moveStart('character', -1*(len));   
			//sel.moveEnd('character',-1*(len-1));
		}
		sel.text = myValue;
		sel.collapse(true);
		sel.select();
	}
	//MOZILLA/NETSCAPE support
	else if (myField.selectionStart || myField.selectionStart == 0) {
		myField.focus();
		var startPos = myField.selectionStart-len;
		var endPos = myField.selectionEnd;
		var scrollTop = myField.scrollTop;
		startPos = (startPos == -1 ? myField.value.length : startPos );
		myField.value = myField.value.substring(0, startPos)
		+ myValue
		+ myField.value.substring(endPos, myField.value.length);
		myField.focus();
		myField.selectionStart = startPos + myValue.length;
		myField.selectionEnd = startPos + myValue.length;
		myField.scrollTop = scrollTop;
	} else {
		var scrollTop = myField.scrollTop;
		myField.value += myValue;
		myField.focus();
		myField.scrollTop = scrollTop;
	}
	//document.getElementById("len").innerHTML = len;
}

function makePhoneticiEditor(textAreaId)
{
	//alert('Phonetic Int. Keyboard Active');	
	activeTextAreaInstance = document.getElementById(textAreaId);
	activeTextAreaInstance.onkeypress = parsePhonetici; 
	activeTextAreaInstance.onkeydown = checkKeyDown; 
	activeTextAreaInstance.onkeyup = checkKeyUp;
	activeTextAreaInstance.onfocus = function(){activeta=textAreaId;};
}
function makeVirtualEditor(textAreaId)
{
	activeTextAreaInstance = document.getElementById(textAreaId);
	activeTextAreaInstance.onfocus = function(){activeta=textAreaId;};
}