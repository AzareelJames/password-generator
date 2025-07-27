document.title = `Password Generator`

const up = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const lo = `abcdefghijklmnopqrstuvwxyz`;
const nm = `1234567890`;
const sm = `!@#$%&<>+=`;

const length = prompt(`Enter length`);
const up_allowed = confirm(`Uppercase allowed?`);
const lo_allowed = confirm(`Lowercase allowed?`);
const nm_allowed = confirm(`Numbers allowed?`);
const sm_allowed = confirm(`Symbols allowed?`);

if (length != Number(length)){
    throw TypeError(`Invalid Length Input`)
}
function generate(len){
    let output = ``;
    for (let i = 0; i<Number(len); i++){
        if (up_allowed){
            output += up[Math.floor(Math.random() * up.length)];
        }
        if (lo_allowed){
            output += lo[Math.floor(Math.random() * lo.length)];
        }
        if (nm_allowed){
            output += nm[Math.floor(Math.random() * nm.length)];
        }
        if (sm_allowed){
            output += sm[Math.floor(Math.random() * sm.length)];
        }
        }
        let remove;
        while (output.length >= Number(len)+1){
            remove = output[Math.floor(Math.random() * output.length)];
            output = output.replace(remove, ``);
        }
        
        return output;
}


var password = generate(length);

alert(password);