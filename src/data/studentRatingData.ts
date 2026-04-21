export interface RatingFile {
    title: string;
    pdfUrl: string;
}

export interface RatingData {
    [year: string]: {
        [semester: string]: RatingFile[];
    };
}

export const studentRatingData: RatingData = {
    "2023-2024": {
        "Осенняя сессия": [
            {
                title: 'Рейтинг 1 курс',
                pdfUrl: 'https://inai.kg/uploads/filemanager/1%20%D0%BA%D1%83%D1%80%D1%81%20%D1%80%D0%B5%D0%B9%D1%82%D0%B8%D0%BD%D0%B3%202023_2024.pdf'
            },
            {
                title: 'Рейтинг 2 курс',
                pdfUrl: 'https://inai.kg/uploads/filemanager/2%20%D0%BA%D1%83%D1%80%D1%81%20%D1%80%D0%B5%D0%B9%D1%82%D0%B8%D0%BD%D0%B3%202023_2024%20.pdf'
            },
            {
                title: 'Рейтинг 3-4 курс',
                pdfUrl: 'https://inai.kg/uploads/filemanager/3-4%20%D0%BA%D1%83%D1%80%D1%81%D0%B0%202023_2024.pdf'
            }
        ],
        "Весенняя сессия": []
    },
    "2024-2025": {
        "Осенняя сессия": [],
        "Весенняя сессия": []
    }
};