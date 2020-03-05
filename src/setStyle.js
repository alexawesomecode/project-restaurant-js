
let setStyle = () => {

let stylings = document.createElement('style');
document.querySelector('head').appendChild(stylings);

document.querySelector('style').innerHTML =   `

 .central p {

	 font-size: 24px;
	 padding: 40px;
	 letter-spacing: 1px;
     }
     
     span {
	 display:block;
	 color: white;
	 font-size: 2rem;
	 font-weight: bold;
	 font-family: monospace;
	 line-height: 29px;
     }
     .logo {
	 width: 20%;
	 background: black;
	 padding: 3%;
	 margin: 2%;
	 text-align:center;
     }

     button:hover {

	 background:black !important;
	 color: orange !important;}

 .move {

animation: shake 0.5s;
}
    @keyframes shake {
	      0% { transform: translate(1px, 1px) rotate(0deg); }
	      10% { transform: translate(-1px, -2px) rotate(-1deg); }
	      20% { transform: translate(-3px, 0px) rotate(1deg); }
	      30% { transform: translate(3px, 2px) rotate(0deg); }
	      40% { transform: translate(1px, -1px) rotate(1deg); }
	      50% { transform: translate(-1px, 2px) rotate(-1deg); }
	      60% { transform: translate(-3px, 1px) rotate(0deg); }
	      70% { transform: translate(3px, 1px) rotate(-1deg); }
	      80% { transform: translate(-1px, -1px) rotate(1deg); }
	      90% { transform: translate(1px, 2px) rotate(0deg); }
	      100% { transform: translate(1px, -2px) rotate(-1deg); }
    }   `;
};

export { setStyle };
