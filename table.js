let name = document.getElementById("name");
let age = document.getElementById("age");
let addPerson = document.getElementById("addBtn");
let tBody = document.getElementById("tBody");
let err = document.getElementById("error");
let pagination = document.getElementById("pagination");
let i = 1;
let arr = [];


addPerson.addEventListener("click", () => {
    borderColor(name);
    borderColor(age);
    if (name.value !== "" && age.value !== "") {
        let row = tBody.insertRow(-1);
        let column = row.insertCell(0);
        let column2 = row.insertCell(1);
        let column3 = row.insertCell(2);
        let column4 = row.insertCell(3);

        
        row.classList.add("row");

        column.innerHTML = i + randomId(7); // առաջին սյուն
        column2.innerHTML = name.value; // երկրորդ սյուն
        column3.innerHTML = age.value; // երրորդ սյուն
       

        let obj = {
            Id : column.innerHTML,
            Name: column2.innerHTML,
            Age : column3.innerHTML
        }

       arr.push(obj)
       
        // let btn = document.createElement("button");
        // btn.innerHTML = i
        // btn.classList.add("but2");
        // pagination.appendChild(btn)





        console.log(obj);
        let icone = document.createElement("i");
        icone.classList.add("fa");
        icone.classList.add("fa-close");
        let del = column4.appendChild(icone);

        del.addEventListener("click", () => {
            del.closest(".row").remove()
        });

    }

    // տեղեկացնում ենք user֊ին եթե input֊ներից մեկը դատարկ է
    if (name.value === "" || age.value === "") {
        err.innerHTML = "! Please fill in all inputs";
        err.style.color = "red";
    } else {
        err.innerHTML = ""
    }

    if(name.value !== "" && age.value !== ""){
        name.value = ""; // դատարկում ենք առաջին input֊ի արժեքը 
        age.value = ""; // դատարկում ենք երկրորդ input֊ի արժեքը
     
    }
   
    i += 1
});

eventListener(name)
eventListener(age)
console.log(arr);





function borderColor(val) {
    if (val.value !== "") {
        val.style.border = "2px solid green"
    } else {
        val.style.border = "2px solid red"
    }
}



////////ավելացնում ենք css֊ի style »»» outline-color//////////

function eventListener(val){
    return   val.addEventListener("keyup", () => {
        if(val.value !== ""){
        borderColor(val);
            val.style.outlineColor = "green"
        } else {
            val.style.outlineColor = "red"
        };
    });
}
;






//  ստեղծում ենք id
function randomId(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}