declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

// Можно вместо global.d.ts, установить пакет react-scripts и
// добавить файл react-app-env.d.ts с содержимым /// <reference types="react-scripts" />