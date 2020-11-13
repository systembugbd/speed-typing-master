/*
 * Unicode Inscript Parser for writing in webpages
 *This script transliterate the user input and display unicode bangla characters accoring to Inscript keyboard layout 
  
 This scirpt is based on phpexpert Hasin Hayder's phonetic parser script
 Name: Web based parser for Inscript layout
 Author: Sabuj Kundu aka manchumahara
 Email:manchumahara@gmail.com 
 Webpage:http://blog.manchumahara.com	 
 License:LGPL	 
 Yet to do: Key stroke with altGr and Shift altGr key parsing,is it possible with java script ? 
 [Special thanks to Omi Azad and Hasin Hayder for inspiration ]
 For any problem/suggestion plz inform me	  
*/

var activeta; //active text area
var inscript=new Array();
var inscriptaltgr=new Array();
var inscriptshiftaltgr=new Array();
var carry2="";
// Set of Characters
//  First line
//special char
inscript['`']='\u200C'; //ZWNJ   
inscript['~']='\u200D'; //ZWJ 
//normal mode
inscript['0']='\u09e6';//'০'; 
inscript['1']='\u09e7';//'১';
inscript['2']='\u09e8';//'২';
inscript['3']='\u09e9';//'৩';
inscript['4']='\u09ea';//'৪';
inscript['5']='\u09eb';//'৫';
inscript['6']='\u09ec';//'৬';
inscript['7']='\u09ed';//'৭';
inscript['8']='\u09ee';//'৮';
inscript['9']='\u09ef';//'৯';
inscript['-']='-';//   -
inscript['=']='\u09C3';// ঋ কার
//shift mode
inscript['!']="!";
inscript['@']='@';
inscript['#']='#';
inscript['$']='\u09F2';// bengali rupe mark
inscript['%']='"';  //
inscript['^']='\'';//
inscript['&']='&'; 
inscript['*']='*';
inscript['(']='(';
inscript[')']=')';
inscript['_']='\u0983';//ঃ 
inscript['+']='\u098B'; //ঋ

//2nd line	
//normal mode
inscript['q']='\u09CC'; //ঔ-কার	
inscript['w']='\u09C8';  //ঐ-কার
inscript['e']='\u09BE'; //আ-কার
inscript['r']='\u09C0';  //ঈ-কার
inscript['t']='\u09C2'; // ঊ-কার
inscript['y']='\u09AC'; //ব
inscript['u']='\u09B9'; // হ
inscript['i']='\u0997'; //গ
inscript['o']='\u09A6';//দ
inscript['p']='\u099C'; //জ
inscript['[']='\u09A1';// ড
inscript[']']='\u09BC';// nukta
//inscript['\\']='\u09DC';// ড়

//shipt mode							
inscript['Q']='\u0994';//ঔ
inscript['W']='\u0990';  // ঐ
inscript['E']='\u0986'; // আ
inscript['R']='\u0988'; //ঈ
inscript['T']='\u098A'; //ঊ
inscript['Y']='\u09AD'; //ভ
inscript['U']='\u0999';//ঙ
inscript['I']='\u0998';//ঘ
inscript['O']='\u09A7';//ধ
inscript['P']='\u099D';//ঝ
inscript['{']='\u09A2';//ঢ
inscript['}']='\u099E';//ঞ
//inscript['|']='\u09DD';//ঢ়	
	
//3rd line
//normal mode
inscript['a']='\u09CB'; //ও-কার
inscript['s']='\u09C7'; //এ-কার
//inscript['d']='\u09CD'; // hasanta 
inscript['f']='\u09BF'; // ই-কার
inscript['g']='\u09C1'; //উ-কার
inscript['h']='\u09AA'; //প
inscript['j']='\u09B0';  //র	
inscript['k']='\u0995'; // ক
inscript['l']='\u09A4'; // ত
inscript[';']='\u099A'; // চ
inscript['\'']='\u099F'; //ট

//shift mode	
inscript['A']='\u0993'; // ও
inscript['S']='\u098F'; //এ
inscript['D']='\u0985'; //অ 
inscript['F']='\u0987'; //ই
inscript['G']='\u0989'; //উ
inscript['H']='\u09AB'; //ফ
inscript['J']='\u09CE'; //ৎ
inscript['K']='\u0996'; // খ
inscript['L']='\u09A5'; // থ
inscript[':']='\u099B'; // ছ
inscript['"']='\u09A0'; // ঠ	
//4th line
//normal mode
inscript['z']='\u09DC';// ড়
inscript['x']='\u09CD'+'\u09B0'; //র-ফলা
inscript['c']='\u0982'; //ং
inscript['v']='\u09AE'; //ম 
inscript['b']='\u09A8'; // ন
inscript['n']='\u09F1'; // ৱ //bengali letter va with lower diagonal (assamese)
inscript['m']='\u09B2'; //ল
inscript[',']='\u09B8'; // স
inscript['.']=','; // ,
inscript['/']='.'; //
inscript['\\']='\u09AF'; //	য
//shift mode		
inscript['Z']='\u09DD'; //ঢ়
inscript['X']='\u09B0'+'\u09CD'; //রেফ
inscript['C']='\u0981'; // ঁ
inscript['V']='\u09A3'; // ণ
inscript['B']='\u0965'; // double dari
inscript['N']='\u09F0'; // ৰ bengali letter RA with middle diagonal
inscript['M']='\u09CD'+'\u09AF'; //য-ফলা 
inscript['<']='\u09B6'; //  শ
inscript['>']='\u09B7'; // ষ
inscript['?']='\u0964';  // dari
inscript['|']='\u09DF'; //য়	
//altGr mode
//2nd line
inscriptaltgr['1']='\u09F4';//bengali currency numerator one
inscriptaltgr['2']='\u09F5';//bengali currency numerator two
inscriptaltgr['3']='\u09F6';//bengali currency numerator three
inscriptaltgr['4']='\u09F3';//benglai rupee sign
inscriptaltgr['5']='\u09F7';//bengali currency numerator four
inscriptaltgr['6']='\u09FA';//benglai isshar
inscriptaltgr['7']='\u09F8';//bengali currency numerator one less than denominator
inscriptaltgr['8']='\u09E1';//bengali letter sign vocalic LL
inscriptaltgr['9']='';//check
inscriptaltgr['0']='\u09C4';//bengali vowel sign vocalic RR
inscriptaltgr['-']='';//blank
inscriptaltgr['=']='=';//	
var carry = '';  //This variable stores each keystrokes
var old_len =0; //This stores length parsed bangla charcter
var ctrlPressed=false;
var first_letter = false;

isIE=document.all? 1:0;
var switched=false;

function checkKeyDown(ev)
{
	//just track the control key
	var e = (window.event) ? event.keyCode : ev.which;
	//check ctrl key  down
	if (e=='17')
	{
		ctrlPressed = true;
	}
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
function parseInscript(evnt)
{
	// main Inscript parser
	var t = document.getElementById(activeta); // the active text area
	var e = (window.event) ? event.keyCode : evnt.which; // get the keycode
	//alert('Keycode='+e);
	if (e=='113')      //pressing ctrl+ q to switch to Inscript layout
	{
		//switch the keyboard mode
		if(ctrlPressed){
			switched = !switched;			
			return true;
		}
	}
	if (switched) return true;	
	if(ctrlPressed)
	{
		// user is pressing control, so leave the parsing
		e=0; 
	}

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
	
	bangla = parseInscriptCarry(carry); // get the combined equivalent
	tempBangla = parseInscriptCarry(char_e); // get the single equivalent
	
	if (tempBangla == ".." || bangla == "..") //that means it has next sibling
	{
		return false;
	}
	if (char_e=="d")
	{
		insertAtCursor("\u09CD");old_len = 1;
		carry2=carry;
		carry="d";				
		return false;
	
	}
	else if(old_len==0) //first character
	{
		// this is first time someone press a character
		insertJointAtCursor(bangla,1);
		old_len=1;
		return false;
		
	}
	else if(char_e=='\\' && carry2=="jd")//force Za-phola after Ra
	{		
		insertJointAtCursor('\u200C'+'\u09CD'+'\u09AF',1);
		old_len=1;	
		return false;
		
	}
	else if (carry == "jM") //solve ra-japhola issue
	{
		// 
		insertJointAtCursor(inscript['j']+'\u200C'+inscript['M'],old_len);
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
		
		insertJointAtCursor(bangla, old_len);
		old_len = bangla.length;
		return false;
	}
}
function parseInscriptCarry(code)
    {
	//this function just returns a bangla equivalent for a given keystroke
	//or a conjunction
	//just read the array - if found then return the bangla eq.
	//otherwise return a null value
        if (!inscript[code])  //Oh my god :-( no bangla equivalent for this keystroke

        {
			return ''; //return a null value
        }
        else
        {
            return (inscript[code]);  //voila - we've found bangla equivalent
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

function insertJointAtCursor(myValue, len) {
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

function makeInscriptEditor(textAreaId)
{	
	//alert('Inscript Keyboard Active');
	activeTextAreaInstance = document.getElementById(textAreaId);
	activeTextAreaInstance.onkeypress = parseInscript; 
	activeTextAreaInstance.onkeydown = checkKeyDown; 
	activeTextAreaInstance.onkeyup = checkKeyUp;
	activeTextAreaInstance.onfocus = function(){activeta=textAreaId;};
}