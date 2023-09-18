
// позитивный кейс верный логин/верный пароль

describe('Автотесты формы авторизации', function () {
   it('верный логин и верный пароль', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru');  // поиск инпута и ввод логина 
      cy.get('#loginButton').should('be.disabled');  // проверяем, что кнопка задизейблена
      cy.get('#pass').type('iLoveqastudio1');  //  поиск инпута и ввод пароля
      cy.get('#loginButton').should('be.enabled');  // проверяем, что кнопка доступна для нажатия
      cy.get('#loginButton').click();  //  клик по кнопке Войти
      cy.contains('Авторизация прошла успешно').should('be.visible');  // проверка текста ссобщения успешной авторизации
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })




// проверка логики восстановления пароля
   it('проверка логики восстановления пароля', function () {
      cy.visit('https://login.qa.studio/'); // зашли на сайт
      cy.get('#loginButton').should('be.disabled');  // проверяем, что кнопка задизейблена
      cy.get('#forgotEmailButton').click()  // нажали кнопку Забыли пароль
      cy.get('#mailForgot').type('qastudio@4ever.yes'); // найти поле ввода и ввести емаил
      cy.get('#restoreEmailButton').click()  // нажать на кнопку
      cy.contains('Успешно отправили пароль на e-mail').should('be.visible');  // Проверка текста успешной отправки пароля на емаил
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')  // проверка наличия крестика в окне сообщения




// негативный кейс верный логин/не верный пароль
    }) 
   it('негативный кейс верный логин/не верный пароль', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru');  // поиск инпута и ввод логина 
      cy.get('#loginButton').should('be.disabled');  // проверяем, что кнопка задизейблена
      cy.get('#pass').type('неправильный_пароль');  //  поиск инпута и ввод пароля
      cy.get('#loginButton').should('be.enabled');  // прповеряем, что кнопка доступна для нажатия
      cy.get('#loginButton').click();  //  клик по кнопке Войти
      cy.contains('Такого логина или пароля нет').should('be.visible');  // проверка текста сообщения для неверного пароля
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')  // проверка наличия крестика в окне сообщения
    }) 



// негативный кейс не верный логин/верный пароль   
   it('негативный кейс не верный логин/верный пароль', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('odin_iz_semi_milliardov');  // поиск инпута и ввод логина 
      cy.get('#loginButton').should('be.disabled');  // проверяем, что кнопка задизейблена
      cy.get('#pass').type('iLoveqastudio1');  //  поиск инпута и ввод пароля
      cy.get('#loginButton').should('be.enabled');  // прповеряем, что кнопка доступна для нажатия
      cy.get('#loginButton').click();  //  клик по кнопке Войти
      cy.contains('Нужно исправить проблему валидации').should('be.visible');  // проверка текста сообщения для неверного логина
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')  // проверка наличия крестика в окне сообщения
    })



// негативный кейс валидации (логин без'@')
   it('негативный кейс валидации (логин без/@/)', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('germandolnikov.ru');  // поиск инпута и ввод логина 
      cy.get('#loginButton').should('be.disabled');  // проверяем, что кнопка задизейблена
      cy.get('#pass').type('iLoveqastudio1');  //  поиск инпута и ввод пароля
      cy.get('#loginButton').should('be.enabled');  // прповеряем, что кнопка доступна для нажатия
      cy.get('#loginButton').click();  //  клик по кнопке Войти
      cy.contains('Нужно исправить проблему валидации').should('be.visible');  // проверка текста сообщения для неверного логина
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')  // проверка наличия крестика в окне сообщения
    })



// тест кейс на приведение к строчным буквам
   it('тест кейс на приведение к строчным буквам', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('GerMan@Dolnikov.ru');  // поиск инпута и ввод логина 
      cy.get('#loginButton').should('be.disabled');  // проверяем, что кнопка задизейблена
      cy.get('#pass').type('iLoveqastudio1');  //  поиск инпута и ввод пароля
      cy.get('#loginButton').should('be.enabled');  // прповеряем, что кнопка доступна для нажатия
      cy.get('#loginButton').click();  //  клик по кнопке Войти
      cy.contains('Авторизация прошла успешно').should('be.visible');  // проверка текста ссобщения успешной авторизации
      cy.get('#exitMessageButton > .exitIcon').should('be.visible')  // проверка наличия крестика в окне сообщения
    })

 
})



