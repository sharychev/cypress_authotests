describe('Автотесты формы авторизации', function () {
   it('верный логин и верный пароль', function () {
      cy.visit('https://pokemonbattle.me/login'); // заходим на сайт битвы покемонов
      cy.get(':nth-child(1) > .auth__input').type('Введи_емаил'); // ввожу валидный емаил
      cy.get('#password').type('Введи_Пароль');  // ввожу валидный пароль
      cy.get('.auth__input-icon').should('be.visible'); //проверяю появление кнопки открытия пароля
      cy.get('.auth__input-icon').click(); // проверяю кликабельность кнопки открытия пароля
      cy.get('.auth__button').click();  //нажимаю на кнопку Войти

// переход в магазин, выбор аватара
      cy.contains('Покемоны').should('be.visible') // проверяю название страницы
      cy.get('.header__btns > [href="/shop"]').click(); // перехожу в магазин с аватарами
      cy.contains('Магазин').should('be.visible') // проверяю название страницы
      cy.scrollTo(0, 200);  // проскроллил страницу для доступности всех аватаров
      cy.get(':nth-child(03) > .shop__button').click(); // нажимаю кнопку Купить

// форма оплаты
      cy.contains('Пикачунькофф').should('be.visible'); // Проверка названия
      // cy.get('.pay-btn').should('be.disabled'); // кнопка "Оплатить" задизейблена
      cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');  // ввожу номер карты
      // cy.get('.pay-btn').should('be.disabled'); // кнопка "Оплатить" задизейблена
      cy.get(':nth-child(1) > .pay_base-input-v2').type('1224'); // ввожу срок действия карты
      // cy.get('.pay-btn').should('be.disabled'); // кнопка "Оплатить" задизейблена
      cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввожу код CVC
      // cy.get('.pay-btn').should('be.disabled'); // кнопка "Оплатить" задизейблена
      cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Lord Volandemort'); // ввожу имя держателя карты
      cy.get('.pay-btn').should('be.enabled'); // кнопка "Оплатить" кликабельна
      cy.get('.pay-btn').click(); //нажимаю на кнопку "Оплатить"

// подтверждение оплаты
      cy.contains('Подтверждение покупки').should('be.visible'); // Проверка названия
      cy.get('#cardnumber').type('56456'); // ввожу код из пуша
      cy.get('.payment__submit-button').click(); // нажимаю на кнопку "Отправить"
      cy.contains('Покупка прошла успешно').should('be.visible');   
      cy.get('.payment__adv').click(); // вернуться на страницу магазина

// переход в лк
      cy.wait(3000); // ожидание перед нажатием кнопки ЛК
      cy.get('.header__container > .header__id').click(); // перейти в профиль
      cy.get('.title-single__subtitle').contains('Тренер').should('be.visible')









    })
 
})