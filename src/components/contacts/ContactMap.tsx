"use client";

export function ContactMap() {
    return (
        <div className="w-full h-full min-h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative">
            {/* Яндекс Карта с координатами Анкара 1/5 */}
            <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=74.643179%2C42.855277&mode=search&text=Анкара%201%2F5%20Бишкек&z=17" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    );
}