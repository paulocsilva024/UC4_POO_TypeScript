## RELEMBRANDO O JAVASCRIPT

- const frutas = ['Pitaya', 'Kiwi', 'Amora']

### Exemplo de for padrão
```js
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}
```

### Exemplo de for...of
```js
for (const fruta of frutas){
    console.log(fruta)
}
```

### Exemplo de for...in
```js
for (const fruta in frutas){
    console.log(fruta + " = " + frutas[fruta])
}
```