## Beschreibung

Nest Coding Challenge. Api, welche Inhalte einer JSON-Datei über eine API bereitstellt

## Abhängigkeiten

- Node.js v22.11.0 oder vergleichbar
- Yarn

## Setup

```bash
$ yarn install
```

## Einstellungen

Der Port der Anwendung und der Pfad der Datei können in der _env.ts_-Datei in dem src-Ordner angepasst werden. Standardmäßig läuft die Anwendung auf Port 3333 und die zu lesende JSON-Datei befindet sich im Root-Verzeichnis

## Starten der Anwendung

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Ausführen der Tests

```bash
# unit tests
$ yarn run test

# test coverage
$ yarn run test:cov
```

## Routen

| Route         | Beschreibung                             |
| ------------- | ---------------------------------------- |
| /v1/users     | Gibt eine Liste aller Benutzer zurück    |
| /v1/users/:id | Gibt einen Benutzer aus der Liste zurück |
|               |                                          |
