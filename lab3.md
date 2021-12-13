# Лабораторная работа №3
> Цель работы: Поиск и устранение XSS уязвимостей.

> Те кто делает лабораторную на своём языке программирования, должны сначала восстановить в точности этот пример

## Задание 1
В папке ``lab3`` находится ``nodejs`` уязвимое приложение. Необходимо развернуть его, найти источники XSS и исправить. Модифицированное приложение загрузить в свой репозиторий GitHub.  

Для выполнения лабораторной потребуется проделать следующие шаги (если вы их проделали для лабораторной 2, то повторять не нужно):  
1. Установить PostgreSQL сервер любой версии  
2. Создать БД ``lib``    
3. Применить к ней скрипты из папки ``db`` (либо создать объекты и вставить данные в таблицы руками). Скрипты выполнять в порядке указанном в имени файла.  
3.1 Восстановить данные из файла ``data.sql``  
4. Установить ``nodejs`` версии 14.  
5. Перейти в папку ``lab3`` и выполнить в ней команду ``npm install``.  
6. Запустить сайт через Visual Studio Code или через команду ``npm start``.  
7. Войти на сайт и увидеть список книг и авторов  
8. На странице со списком книг найти  
8.1 Reflected XSS в поиске книг  
8.2 Persisted (Stored) XSS при создании книги и отображении списка книг  
8.3 Потенциальную уязвимость через Cookie Injection   
8.4 Некорректное создание сессионной cookie, которое приводит к захвату сессии (Session hijacking)  
9. Написать отчёт с описанием найденных уязвимости и примерами их эксплуатации  
10. Исправить уязвимость  
10.1 В отчёте привести пример того, что уязвимости больше не эксплуатируются  
11. Сохранить отчёт в свой репозиторий  

Полезные ссылки
1. lecture 5 (cross site scripting).pptx lecture 6 (cross site scripting cont.).pptx
2. https://owasp.org/www-community/Types_of_Cross-Site_Scripting
3. https://www.ptsecurity.com/ww-en/analytics/knowledge-base/what-is-a-cross-site-scripting-xss-attack/
4. https://habr.com/ru/post/511318/
5. https://pugjs.org/api/getting-started.html
6. https://pugjs.org/language/code.html
7. https://developer.mozilla.org/ru/docs/Web/HTTP/Cookies
8. https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#session_hijacking
9. https://owasp.org/www-community/attacks/Session_hijacking_attack
10. https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
