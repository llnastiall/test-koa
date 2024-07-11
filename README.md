# test-koa
Цей мікросервіс обробляє статистику для лістингів, таких як кількість відкриттів лістингу та кількість переглядів номера телефону власника.

## Вимоги

- Docker
- Docker Compose

## Запуск

1. Клонуйте репозиторій:
   ```bash
   git clone <https://github.com/llnastiall/test-koa.git>
2. Запустіть Docker Compose:
    ```bash
   docker-compose up --build
Це запустить як мікросервіс, так і базу даних PostgreSQL.

## Використання
### Оновлення статистики
Щоб оновити статистику для конкретного autoId, використовуйте наступний ендпоінт:

- URL: /statistics/:autoId
- Метод: POST
- Тіло запиту: JSON, що містить listingViews і ownerPhoneViews
Приклад запиту 
   ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"listingViews": 1, "ownerPhoneViews": 0}' http://localhost:3000/statistics/12345

### Оновлення статистики
Щоб отримати статистику для конкретного autoId, використовуйте наступний ендпоінт:

- URL: /statistics/:autoId
- Метод: GET
- Приклад запиту
   ```bash
  curl http://localhost:3000/statistics/12345
## Структура проекту
- src/: Вихідний код мікросервісу
  - entities/: Визначення сутностей для TypeORM
  - migration/: Міграції бази даних
  - index.ts: Точка входу для додатку
- Dockerfile: Інструкції для створення Docker-образу
- docker-compose.yml: Конфігурація для Docker Compose
- package.json та tsconfig.json: Файл конфігурації npm з інформацією про залежності та скрипти
## Налаштування оточення
  Потрібно створити файл .env який буде містити конфігурацію для підключення до бази даних. При запуску за допомоги докеру хост потрібно вказувати db.
  ```bash
    PORT=
    DB_PORT=
    DB_HOST=
    DB_USERNAME=
    DB_PASSWORD=
    DB_NAME=
```