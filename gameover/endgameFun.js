export function scoreGold(gold) {
    if (gold === 0) {
        return 'poor';   
    }
    else if (gold < 50) {
        return 'modest';   
    }
    return 'rich';
}
export function scoreHp(hp) {
    if (hp <= 0) {
        return 'dead';
    }
    if (hp < 50) {
        return 'frail';
    }
    return 'healthy';
}
export const goldMessages = {
    poor: 'the rest of the your days are spent struggling to get by',
    modest: 'the rest of your life is spent modestly but happily',
    rich: 'life is good as you have enough money to retire with and live lavishly',
};
export const hpMessages = {
    dead: 'this is the end of your story',
    frail: 'this was the last of your adventures as you live in poor health',
    healthy: 'in good health you can adventure as long(or short) as you want',
};