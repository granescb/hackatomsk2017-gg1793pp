hackatomsk2017-gg1793pp </br>
Тема P2P_Игры_с_оплатой_в_криптовалюте</br>
# Игра "Рулетка" </br>
<p>Описание</p>
Несколько игроков объядиняются в одной комнате(может быть несколько румов с разными условиями), </br>
В течении времени X игроки делают взносы в виде биткоинов(покупают билеты - фантики), </br>
Больше купленых билетов, шанс выйгрыша выше. </br>
Выйгрывает тот игрок, на чей билет указал рандом. </br></p>
 Дизайн </br>
Ссылка - https://www.figma.com/file/FvBeJMAhGHQ5Xd4MAmWKMmGt/Untitled </br></p>
<p> Random <br>
Ссылка - https://api.random.org/json-rpc/1/ </br>

<h3>Запуск</h3>
Для запуска требуется перейти в папку <strong>client</strong> и папку <strong>server</strong> и установить npm модули(трубемая варсия node-7.8.0). Далее, для запуска фронта необходимо в папке <strong>client</strong> выполнить команду <strong>npm run browser:dev</strong>. После запуска фронт будет доступен по адресу http://localhost:8080. Для запуска бекенда требуется установленная база MongoDB( инструкция по установке https://www.digitalocean.com/community/tutorials/mongodb-ubuntu-16-04-ru). Запуск бекенда осуществляется командой <strong>node app.js</strong>.

Стек технологий 
 Клиент: 
  1) React + Redux + immutable js
  2) сборщик webpack 2
  3) stylus
  4) bem-cm
  5) es-6
  6) react router для SPA

 Сервер: 
  1) Node.js 
  2) BD - MongoDB + Mongoose
  3) Express js
  4) Для генерации случайно величины используется онлайн сервис Random.org

