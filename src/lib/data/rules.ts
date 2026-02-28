export interface Rule {
    number: number;
    title: string;
    contentEN: string;
    contentPL: string;
    image1Url: string;
    image1Description: string;
    image2Url: string;
    image2Description: string;
}

const rule1: Rule = {
    number: 1,
    title: 'rule1',
    contentEN: '',
    contentPL: '',
    image1Url: '',
    image1Description: '',
    image2Url: '',
    image2Description: '',
};

const rule2: Rule = {
    number: 2,
    title: 'rule2',
    contentEN: '',
    contentPL: '',
    image1Url: '',
    image1Description: '',
    image2Url: '',
    image2Description: '',
};

const rule3: Rule = {
    number: 3,
    title: 'User Control and Freedom',
    contentEN: 'Users often perform actions by mistake. They need a clearly marked "emergency exit" to leave the unwanted action without having to go through an extended process.',
    contentPL: 'Użytkownicy często wykonują czynności przez pomyłkę. Potrzebują wyraźnie oznaczonego „wyjścia awaryjnego”, aby opuścić niepożądaną czynność bez konieczności przechodzenia przez długotrwały proces.',
    image1Url: '/images/rule3-image1.jpg',
    image1Description: 'Image 1 for rule 3',
    image2Url: '/images/rule3-image2.jpg',
    image2Description: 'Image 2 for rule 3',
};

const rule4: Rule = {
    number: 4,
    title: 'rule4',
    contentEN: '',
    contentPL: '',
    image1Url: '',
    image1Description: '',
    image2Url: '',
    image2Description: '',
};

const rule5: Rule = {
    number: 5,
    title: 'rule5',
    contentEN: '',
    contentPL: '',
    image1Url: '',
    image1Description: '',
    image2Url: '',
    image2Description: '',
};

const rule6: Rule = {
    number: 6,
    title: 'rule6',
    contentEN: '',
    contentPL: '',
    image1Url: '',
    image1Description: '',
    image2Url: '',
    image2Description: '',
};

const rule7: Rule = {
    number: 7,
    title: 'rule7',
    contentEN: '',
    contentPL: '',
    image1Url: '',
    image1Description: '',
    image2Url: '',
    image2Description: '',
};

const rule8: Rule = {
    number: 8,
    title: 'rule8',
    contentEN: '',
    contentPL: '',
    image1Url: '',
    image1Description: '',
    image2Url: '',
    image2Description: '',
};

const rule9: Rule = {
    number: 9,
    title: 'rule9',
    contentEN: '',
    contentPL: '',
    image1Url: '',
    image1Description: '',
    image2Url: '',
    image2Description: '',
};

const rule10: Rule = {
    number: 10,
    title: 'rule10',
    contentEN: '',
    contentPL: '',
    image1Url: '',
    image1Description: '',
    image2Url: '',
    image2Description: '',
};

const rulesMap: Record<number, Rule> = {
    1: rule1,
    2: rule2,
    3: rule3,
    4: rule4,
    5: rule5,
    6: rule6,
    7: rule7,
    8: rule8,
    9: rule9,
    10: rule10,
};

export function getRule(num: number): Rule | null {
    if (num < 1 || num > 10) {
        return null;
    }
    return rulesMap[num] || null;
}