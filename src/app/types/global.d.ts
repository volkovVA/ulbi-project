declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
  }

// Можно вместо global.d.ts, установить пакет react-scripts и
// добавить файл react-app-env.d.ts с содержимым /// <reference types="react-scripts" />