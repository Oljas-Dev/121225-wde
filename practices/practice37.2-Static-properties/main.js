// Для чего нужны статические свойства

class AppConfig {
    // Статические свойства для хранения версии приложения
    static version = '2.4.0';
    static theme = 'dark';

    static displayInfo() {
        // ! в статических методах ключевое слово this ссылается 
        // не на созданный экземпляр (объект), а на сам класс 
        console.log(`Version: ${this.version}, Theme: ${this.theme}`);
    }
}

console.log(AppConfig.version);
console.log(AppConfig.theme);
AppConfig.displayInfo();


const appConfig = new AppConfig();
console.log(appConfig);


// Наследование статических свойств и методов

/**
 * В JS статические свойства и методы копируются в дочерний класс при наследовании (расширении)
 */

class BaseApi {
    static baseUrl = 'https://api.example.com';
}

class UserApi extends BaseApi {
    static baseUrl = 'https://local.dev';

    static getUserUrl(id) {
        // Мы можем обратиться к baseUrl через ключевое слово super или имя родителя
        console.log(this.baseUrl);
        console.log(super.baseUrl);
        return `${super.baseUrl}/users/${id}`;
    }
}

console.log(UserApi.baseUrl);
console.log(UserApi.getUserUrl(1));


const objGlobal = {
    a: 1,
    b: 2
}


function checkObject(obj) {
    const newObj = {...obj};
    newObj.c = 3;
    return newObj;
}

const resultCheckObject = checkObject(objGlobal);
console.log(objGlobal === resultCheckObject);
console.log(resultCheckObject);
console.log(objGlobal);


