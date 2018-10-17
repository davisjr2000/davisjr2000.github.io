var person = prompt("Please enter your name", "");

if (person == null || person == "") {
    txt = "User cancelled the prompt.";
    alert(txt)

} else {
    txt = "Hello " + person + "! Don't judge my page, I'm a back-end guy :c";
    alert(txt)
}

