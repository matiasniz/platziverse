# platziverse-db

## Usage

```js
const setupDatabase = requiere('plativerse-db')

setupDatabase(config).then(db => {
    const { Agent, Metric } = db
}).catch(err => console.error(err))
```