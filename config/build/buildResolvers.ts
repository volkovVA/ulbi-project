import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true, // Настройка абс.путей: абсолютные пути в приоритете
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'], // Настройка абс.путей: для каждого модуля главным файлом будет index
        alias: {} // Настройка абс.путей: alias указывает как будет выглядеть импорт. Может начинаться с @ или без знака
    }
}
