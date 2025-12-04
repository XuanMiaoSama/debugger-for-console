import { resolvedConfig } from '../extension';

const DEFAULT_COLORS = [
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#ff5722',
    '#795548',
    '#9e9e9e',
    '#607d8b'
];

export function getRandomColor() {
    const enable = resolvedConfig.get('randomColor');

    if (!enable) {
        return '';
    }

    const colors = (resolvedConfig.get('logColors') as string[]) || DEFAULT_COLORS;

    if (colors.length === 0) {
        return '';
    }

    return colors[Math.floor(Math.random() * colors.length)];
}
