import { onLoad } from './onload.js'
import { setStyle } from './setStyle.js'
import {tabFirst} from './tab1.js'
import {tabSecond} from './tab2.js'
import {tabThird} from './tab3.js'

onLoad();
setStyle();


    let changeTabs = (elem) => {
	
     let content = document.getElementById('content');
let card = document.getElementById('central');
let tab = elem.target.className;

        if (tab == 'tab1') { tabFirst(tab, content, card)}
        if (tab == 'tab2') { tabSecond(tab, content, card)}
        if (tab == 'tab3') { tabThird(tab, content,card)}
       

	  };
    

let buttons = document.querySelectorAll('button');
buttons.forEach((elem) => elem.addEventListener('click', changeTabs ));