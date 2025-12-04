import { resolvedConfig } from '../extension';

const DEFAULT_EMOJIS = [
    '🚀',
    '🛸',
    '🛰️',
    '👑',
    '🔭',
    '✨',
    '🍀',
    '🍻',
    '🍿',
    '🍉',
    '🔥',
    '🥑',
    '🎡',
    '🍙',
    '📦',
    '📫',
    '🍟',
    '🍭',
    '🍩',
    '🌿'
];

export function getRandomEmoji() {
    if (resolvedConfig.get('emoji')) {
        const emojis = (resolvedConfig.get('logEmojis') as string[]) || DEFAULT_EMOJIS;

        if (emojis.length === 0) {
            return '';
        }

        return emojis[Math.floor(Math.random() * emojis.length)];
    }

    return '';
}
