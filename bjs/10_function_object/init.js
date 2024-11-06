document.getElementById('btn1').addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthday;
    document.getElementById('patronymic').innerText = initPerson.patronymic;
    document.getElementById('profession').innerText = initPerson.profession;
})

document.getElementById('btn2').addEventListener('click', () => {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('patronymic').innerText = '';
    document.getElementById('profession').innerText = '';
})