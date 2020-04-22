'use strict';

module.exports = class DosageCalculator {

    // The method calculates a recommended dosage by formula Dr. Zaytseva
    useZaytseva (weight: number, birthDay: number): number {
        return  Math.round((weight * 0.02) * birthDay);
    }

    // The method calculates a recommended dosage by formula Dr. Finkelstein
    useFinkelstein (weight: number, birthDay: number): number | string {
        if (weight < 3200) {
            return Math.round(birthDay * 70);
        }
        if (weight >= 3200) {
            return Math.round(birthDay * 80);
        }
        return 'К сожалению, мы не можем Вам ничего порекомендовать.';
    }

    // The method calculates a recommended dosage by formula Dr. Geibner and Dr. Cherni
    useGeibnerCherni (weight: number, birthDay: number): number {
        if (birthDay <= 60) {
            return Math.round(weight * 0.2);
        }
        else if (birthDay > 60 && birthDay <= 120) {
            return Math.round(weight * 0.165);
        }
        else if (birthDay > 120 && birthDay <= 180) {
            return Math.round(weight * 0.14);
        }
        else {
            return 1000;
        }
    }

    // The method calculates a recommended dosage by formula Dr. Maslov
    useMaslov (weight: number, birthDay: number): number | string {
        if (birthDay <= 90) {
            return Math.round(weight * 0.12);
        }
        if (birthDay > 90 && birthDay <= 180) {
            return Math.round(weight * 0.115);
        }
        if (birthDay > 180 && birthDay <= 270) {
            return Math.round(weight * 0.11);
        }
        if (birthDay > 270 && birthDay <= 366) {
            return Math.round(weight * 0.1);
        }
        else if (birthDay > 366) {
            return 'К сожалению, мы не можем Вам ничего порекомендовать.';
        }
        return 'К сожалению, мы не можем Вам ничего порекомендовать.';
    }

    // The method calculates a recommended dosage by special, calorage formula
    useCalorage (weight: number, birthDay: number): number | string {
        const formulaName = 'По калоражу: ';
        if (birthDay === 1) return Math.round(Math.round(weight / 1000) * 27.5);
        if (birthDay === 2) return Math.round(Math.round(weight / 1000) * 40);
        if (birthDay === 3) return Math.round(Math.round(weight / 1000) * 50);
        if (birthDay === 4) return Math.round(Math.round(weight / 1000) * 60);
        if (birthDay === 5) return Math.round(Math.round(weight / 1000) * 70);
        if (birthDay === 6) return Math.round(Math.round(weight / 1000) * 80);
        if (birthDay === 10) return Math.round(Math.round(weight / 1000) * 105);
        return 'К сожалению, мы не можем Вам ничего порекомендовать.';
    }

    // The method calculates a recommended, one time dosage by special formula
    useOneTime (weight: number, birthDay: number): number {
        return Math.round(3 * weight * birthDay);
    }

    // The method returns an error and rejection about following work
    throwRejection (): string {
        return 'К сожалению, мы не можем Вам ничего порекомендовать.';
    }
};