export interface ScholarshipDetail {
    title: string;
    requirements: string[];
    selectionConditions: string[];
    duration: string;
    benefits: string[];
}

export const daadScholarshipData: ScholarshipDetail = {
    title: 'ДААД СТИПЕНДИИ ДЛЯ ПРОДОЛЖЕНИЯ ОБУЧЕНИЯ В WHZ',
    requirements: [
        'Студенты бакалавриата (6 семестр)',
        'Студенты магистратуры (2 семестр)'
    ],
    selectionConditions: [
        'Отличная успеваемость',
        'Разработка и презентация программы для отборочной комиссии',
        'Мотивационное письмо',
        'Немецкий язык уровня: В2'
    ],
    duration: 'с 1 сентября каждого года и до 31 августа следующего года',
    benefits: [
        '861€ в месяц для студентов бакалавриата',
        '861€ в месяц для студентов магистратуры',
        '725€ для транспортных расходов'
    ]
};