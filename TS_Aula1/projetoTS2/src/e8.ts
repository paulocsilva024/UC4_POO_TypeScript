console.log(`
    Exercício 8 foi inciar o projeto do zero

    Comnados feitos:

    - Criada a pasta: projetoTS2
    - Nela, instaladas bibliotecas Typescript
        npm install -g typescript
        npm install -D typescript
    - Gerado o arquivo de configuração (tsconfig.json)
        npx tsc --init
    - Então editado...
        CompilerOptions, habilitando...
        "rootDir": "./src",
        "outDir": "./dist",

        E acrescentando outros dois comandos:
        "include":["./src/**/*.ts"],
        "exclude":["./node_modules", "./dist"]
    `)