var name = document.querySelector("#name");
var surname = document.querySelector("#surname");
var age = document.querySelector("#age");
var gender = document.querySelector("#sexuality");
var email = document.querySelector("#email");
var submit = document.querySelector("#submit");
var body = document.querySelector("body");
submit.addEventListener("click", function () {
    if (name.value.trim() == "" && surname.value.trim() == "" && age.value.trim() == "" && gender.value.trim() == "" && email.value.trim() == "") {
        window.alert(" Try again");
    }
    else {
        body.innerHTML += `<tr>
            <td>{name.value}</td>
            <td>{surname.value}</td>
            <td>{age.value}</td>
            <td>{gender.value}</td>
            <td>{email.value}</td>
        </tr>`
    name.value = "tural";
    surname.value = "jafar";
    age.value = "22";
    gender.value = "male";
    email.value="tural@bk.ru";
}
})