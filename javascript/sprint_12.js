"use strict";
// Task 01
// Создайте класс Goods, который имеет свойство title - string и _weight (private), number. Напишите конструктор, для задания данных свойств. Уточнения для всех задач далее. Если не упоминается про модификатор доступа то считаем что public. Также в конструкторе всегда порядок элементов делается такой, как они описаны в задаче.
class Goods {
    title;
    _weight;
    constructor(title, _weight) {
        this._weight = _weight;
        this.title = title;
    }
    get weight() {
        return this._weight;
    }
}
// проверяем
const g1 = new Goods('cucumber', 500);
console.log(g1);
// console.log(g1._weight); // выдает ошибку - поскольку private
// Task 02
// Допишем геттер в класс Goods. Допишите в предыдущий класс метод геттер для получения свойства _weight из объекта. Название свойства weight.
// проверяем
const g2 = new Goods('tomato', 1500);
console.log(g2.weight); // должно работать
// Task 03
// В коде Goods есть проблема. Например можно установить отрицательный вес: new Goods ('tomato', -140). С первой стороны бред, с другой стороны применение такого товара в общей системе учета - создаст проблемы при комплектации машин. Давайте исправим данную ситуацию. Для начала создадим класс Goods_03, в котором будут два свойства: свойство title - string и _weight (private), number равное нулю. В конструкторе будем задавать только title, а для свойства _weight создадим сеттер weight, который принимает число, и если оно больше нуля то присваивает _weight, если меньше - то присваивает _weigth нуль. 
class Goods_03 {
    title;
    _weight = 0;
    constructor(title) {
        this.title = title;
    }
    set weight(value) {
        this._weight = value > 0 ? value : 0;
    }
    get weight() {
        return this._weight;
    }
}
// Для проверки кода снимите комментарий ниже
const g3 = new Goods_03('tomato');
g3.weight = 200;
console.log(g3.weight);
g3.weight = -9;
console.log(g3.weight);
// Task 04
// Согласитесь, применять отдельно конструктор, и отдельно сеттер для одного свойства - просто не удобно. Изучите класс Goods_04 и его работу. В данном случае мы имеем дело с методом weigth, который проверяет и устанавливает свойство _weight. Причем метод задействуем в конструкторе. Идеальным кажется вариант, совместить метод и сеттер, чтобы не дублировать код. Пропишите вместо public weight (n : number) { код таким образом: public set weight (n : number) {, а в конструкторе измените строку this.weight(w); на строку this.weight = w; Проверьте работу класса.
// тут пишем класс
class Goods_04 {
    title;
    _weigth = 0;
    constructor(t, w) {
        this.title = t;
        this.weight = w;
    }
    set weight(n) {
        if (n >= 0)
            this._weigth = n;
        else
            this._weigth = 0;
    }
}
// Для проверки кода снимите комментарий ниже
const g4 = new Goods_04('tomato', -150);
console.log(g4);
// Task 05
// Многие программисты критикую идеологию применения сеттера в конструкторе. Давайте напишем код по другому. Изучите, как работает класс Goods_05.
// тут пишем класс
class Goods_05 {
    title;
    _weigth = 0;
    constructor(t, w) {
        this.title = t;
        this.w(w);
    }
    w(n) {
        if (n >= 0)
            this._weigth = n;
        else
            this._weigth = 0;
        return this._weigth;
    }
    set weight(n) {
        this.w(n);
    }
}
// Для проверки кода снимите комментарий ниже
const g51 = new Goods_05('tomato', -600);
console.log(g51);
const g52 = new Goods_05('tomato', 700);
console.log(g52);
g52.weight = 888;
console.log(g52);
g52.weight = -888;
console.log(g52);
// Task 06
// Создайте класс User, со свойствами _name, _lastName. Оба свойства string, private, равны пустой строке. Создайте сеттеры name, lastName. Оба сеттера должны перед присвоением значений очищать от пробелов по краям и переводить значения в нижний регистр. реализуйте конструктор, который применяет данные сеттеры для установки значений. Напишите геттеры name, lastName, которые возвращают значения _name, _lastName.
class User {
    _name = '';
    _lastName = '';
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    set name(value) {
        this._name = value.trim().toLowerCase();
    }
    set lastName(value) {
        this._lastName = value.trim().toLowerCase();
    }
    get name() {
        return this._name;
    }
    get lastName() {
        return this._lastName;
    }
}
// Для проверки кода снимите комментарий ниже
const u = new User(' ОлЕг ', ' НатягниКовдру   ');
console.log(u);
console.log(u.name);
u.lastName = '     нЕпийвода ';
console.log(u);
console.log(u.lastName);
// Task 7. 
// Напишите класс User_07, который содержит два свойства: _age, число private равное по умолчанию 0 и _adult private, по умолчанию false. Напишите сеттер age, который устанавливает число age, если переданный аргумент больше нуля и меньше 130. В противном случае ставит 0. Также в сеттере реализуйте установку _adult в зависимости от возраста. Если возраст (_age) больше 16 mо _adult true. Во всех остальных случаях - false. Напишите геттеры age, adult. Реализуйте установку age через конструктор с помощью сеттера.   
class User_07 {
    _age = 0;
    _adult = false;
    constructor(age) {
        this.age = age;
    }
    set age(value) {
        if (value > 0 && value < 130) {
            this._age = value;
        }
        else {
            this._age = 0;
        }
    }
}
// Для проверки кода снимите комментарий ниже
// const u7 = new User_07(55);
// console.log(u7);
// u7.age = 12;
// console.log(u7);
// console.log(u7.age);
// console.log(u7.adult);
// Task 08
// Создайте класс Test содержащий private свойство _n равное нулю. Создайте сеттер n который задает данное свойство и геттер, для получения данного свойства. 
class Test {
    _n = 0;
    set n(value) {
        this._n = value;
    }
    get n() {
        return this._n;
    }
}
// Для проверки кода снимите комментарий ниже
const t8 = new Test;
t8.n = 99;
console.log(t8);
console.log(t8.n);
// Task 09
// Создайте класс Test_09 наследник класса Test. Запустите проверки.
class Test_09 extends Test {
}
// Для проверки кода снимите комментарий ниже
const t9 = new Test_09();
t9.n = 199; // сеттер работает в классе наследнике
console.log(t9);
console.log(t9.n); // геттер работает в классе наследнике
// Task 10
// Создадим класc Test_10, наследник класса Test. Перезапишем метод сеттер n следующим образом - если число меньше нуля - то ставим _n равное 0. Если больше то присваиваем значение. Поскольку _n свойство приватное, то напрямую изменить его в сеттере класса наследника будет нельзя. Примените обращение к сеттеру родителя через super. 
class Test_10 extends Test {
    set n(value) {
        this._n = value < 0 ? 0 : value;
    }
    get n() {
        return this._n;
    }
}
// Для проверки кода снимите комментарий ниже
const t10 = new Test_10();
t10.n = 89;
console.log(t10);
console.log(t10.n); // проверим сработал ли геттер из класса родителя
t10.n = -55;
console.log(t10);
console.log(t10.n); // проверим сработал ли геттер из класса родителя
// Task 11
// Видно, что когда мы переписали сеттер, то геттер не сработал. Хотя свойство сеттер - изменил. Т.е. если мы наследуемся от класса с гетером и сеттером, и переписываем сеттер, нужно переписать и геттер. Давайте в класс Test_10 допишем сеттер для _n. Если все сделать корректно, то console.log(t10.n); в проверке выше будет возвращать значение _n.
// Task 12
// Давайте попробуем сделать обратную операцию. Создайте класс Test_11, который наследуется от Test. Напишите в классе новый геттер, который возвращает _n. И запустите проверку. Цель - проверить будет ли работать сеттер, когда мы написали новый геттер в классе наследнике.
class Test_11 extends Test {
    get n() {
        return this._n;
    }
}
// const t11 = new Test_11();
// t11.n = 555; // даже не дойдя до проверки мы получаем ошибку в консоли. Дальше проверка невозможна. Верните комментарий и переходим к следующему заданию.
// console.log(t11);
// console.log(t11.n); // проверим сработал ли геттер из класса родителя
// Task 13
// Итак, при перезаписи геттера или сеттера - не важно, нужно перезаписывать и сеттер, геттер. Допишите руками в Test_11 сеттер, который изменяет _n следующим образом - если число меньше нуля - то ставим _n равное 0. Если больше то присваиваем значение. Если все сделано корректно, то проверки к заданию 12 заработают. А мы сделаем вывод - записали новый сеттер? Переписывайте геттер и наоборот, в классах наследниках.
// Task 14
// Создайте класс SignupForm с полями _email, _password, _passwordRepeat все поля protected. Создайте геттеры для свойств _email, _password. Создайте метод prepareString, private, метод получает строку как аргумент и возращает строку с удаленными пробелами по краям и приведенную к нижнему регистру. С помощью данного метода задайте в конструкторе свойства _email, _password, _passwordRepeat. 
// тут пишем класс
// Для проверки кода снимите комментарий ниже
// const sf = new SignupForm(' hello@maiL.ua ', '12345Bb', '12345Bb');
// console.log(sf);
// console.log(sf.email);
// Task 15
// В классе SignupForm мы допустили ошибку - делать toLowerCase паролю не самая лучшая идея. Давайте сделаем класс SignupForm_15, который наследуется от SignupForm и исправим конструктор, и изменим конструктор - в нем мы будем для email применять prepareString, а для password и passwordRepeat будем делать только операцию trim. 
// тут пишем класс
// Для проверки кода снимите комментарий ниже
// const sf15 = new SignupForm_15(' hello@maiL.ua ', '12345Bb', '12345Bb');
// console.log(sf15);
// console.log(sf15.email);
//# sourceMappingURL=sprint_12.js.map