const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Болонин",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Алексей",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    patronymicMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Алексеевич",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитович",
            "id_7": "Михаилович",
            "id_8": "Данилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Елена",
            "id_3": "Светлана",
            "id_4": "Мария",
            "id_5": "Анастасия",
            "id_6": "Елизовета",
            "id_7": "Галина",
            "id_8": "Полина",
            "id_9": "Ксения",
            "id_10": "Ева"
        }
    }`,
    patronymicFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Алексеевна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитична",
            "id_7": "Михайловна",
            "id_8": "Даниловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Программист",
            "id_2": "Повар",
            "id_3": "Слесарь",
            "id_4": "Строитель",
            "id_5": "Менеджер",
            "id_6": "Администратор",
            "id_7": "Тренер",
            "id_8": "Учитель",
            "id_9": "Продавец",
            "id_10": "Модель"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Программист",
            "id_2": "Повар",
            "id_3": "Официантка",
            "id_4": "Модель",
            "id_5": "Воспитательница",
            "id_6": "Администратор",
            "id_7": "Тренер",
            "id_8": "Учительница",
            "id_9": "Продавщица",
            "id_10": "Директриса"
        }
    }`,
    monthsJSON: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function(){
        const random = Math.floor(Math.random() * 2);
        return (random === 1) ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomFirstName: function(gender) {
        if(gender === this.GENDER_MALE){
            return this.randomValue(this.firstNameMaleJson);
        } else{
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

     randomSurname: function(gender) {
        if(gender === this.GENDER_MALE){
            return this.randomValue(this.surnameJson);
        } else{
            return this.randomValue(this.surnameJson) + 'а';
        }
    }, 

    randomPatronymic: function(gender) {
        if(gender === this.GENDER_MALE){
            return this.randomValue(this.patronymicMaleJson);
        } else{
            return this.randomValue(this.patronymicFemaleJson);
        }
    },

    randomProfession: function(gender){
        if(gender === this.GENDER_MALE){
            return this.randomValue(this.professionMaleJson);
        } else{
            return this.randomValue(this.professionFemaleJson);
        }
    },

    randomMonths: function(){
        return this.randomValue(this.monthsJSON);
    },

    randomDays: function(months){
        if(months === 'Февраля'){
            return this.randomIntNumber(28, 1);
        }else if(months === 'Апреля' || 'Июня' || 'Сентября' || 'Ноября'){
            return this.randomIntNumber(30, 1);
        }else{
            return this.randomIntNumber(31, 1);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surName = this.randomSurname(this.person.gender);
        this.person.patronymic = this.randomPatronymic(this.person.gender);
        this.person.birthday = this.randomDays(this.randomMonths) + ' ' + this.randomMonths() + ' ' + this.randomIntNumber(2024, 1950);
        this.person.profession = this.randomProfession(this.person.gender);
        return this.person;
    }
};