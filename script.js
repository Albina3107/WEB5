function fieldsCheck(){
    let name = document.getElementById("name");
    if (name.value === null || !name.value.match("[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+\\s+[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]\.[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]\.")) {
        name.style.background = "red";
        document.getElementById("info").style.display = "none";
        document.querySelector("form").style.width = "100%";
    } else {
        let new_name = document.getElementById("new_name");
        new_name.innerText = name.value;
        document.getElementById("info").style.display = "block";
        document.querySelector("form").style.width = "50%";
    }

    let variant = document.getElementById("variant");
    if (variant.value === null || !variant.value.match("^\\d+$")) {
        variant.style.background = "red";
        document.getElementById("info").style.display = "none";
        document.querySelector("form").style.width = "100%";
    } else {
        let new_var = document.getElementById("new_var");
        new_var.innerText = variant.value;
        document.getElementById("info").style.display = "block";
        document.querySelector("form").style.width = "50%";
    }

    let phone = document.getElementById("phone");
    if (phone.value === null || !phone.value.match("((\\(\\d{3}\\) ?)|(\\d{3}-))?\\-\\d{3}-\\d{2}-\\d{2}")) {
        phone.style.background = "red";
        document.getElementById("info").style.display = "none";
        document.querySelector("form").style.width = "100%";
    } else {
        let new_phone = document.getElementById("new_phone");
        new_phone.innerText = phone.value;
        document.getElementById("info").style.display = "block";
        document.querySelector("form").style.width = "50%";
    }

    let faculty = document.getElementById("faculty");
    if (faculty.value === null || !faculty.value.match("[A-Za-zА-Яа-яЁё]")) {
        faculty.style.background = "red";
        document.getElementById("info").style.display = "none";
        document.querySelector("form").style.width = "100%";
    } else {
        let new_faculty = document.getElementById("new_faculty");
        new_faculty.innerText = faculty.value;
        document.getElementById("info").style.display = "block";
        document.querySelector("form").style.width = "50%";
    }

    let email = document.getElementById("email");
    if (email.value === null || !email.value.match("^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$")) {
        email.style.background = "red";
        document.getElementById("info").style.display = "none";
        document.querySelector("form").style.width = "100%";
    } else {
        let new_email = document.getElementById("new_email");
        new_email.innerText = email.value;
        document.getElementById("info").style.display = "block";
        document.querySelector("form").style.width = "50%";
    }
}

function changeTdColor() {
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    document.getElementById("task1").style.backgroundColor = '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function clickChangeColor() {
    document.getElementById("palette").style.display = "block";
    document.querySelector('jsuites-color').addEventListener('onchange', function(a,b,c) {
        document.getElementById("task1").style.backgroundColor = this.value;
    });
}

function changeTrColor() {
    let current_color = document.getElementById("task1").style.backgroundColor;
    document.getElementById("task2").style.backgroundColor = current_color;
    document.getElementById("task3").style.backgroundColor = current_color;
    document.getElementById("task4").style.backgroundColor = current_color;
}

