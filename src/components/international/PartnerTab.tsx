import Image from 'next/image';

export function PartnerTab() {
    return (
        <div className="flex flex-col">
            {/* 1. ПОДЗАГОЛОВОК (как в дизайне) */}
            <h2 className="text-[24px] font-bold text-[#1A235E] mb-8">
                Ассоциированный партнер
            </h2>

            {/* 2. ЛОГОТИП */}
            <div className="mb-10">
                <Image
                    src="/images/inter-1.png"
                    alt="Westsächsische Hochschule Zwickau Logo"
                    width={450}
                    height={150}
                    style={{ height: 'auto' }}
                    priority
                />
            </div>

            {/* 3. ТЕКСТОВАЯ ЧАСТЬ */}
            <div className="flex flex-col gap-6 text-[#333] text-[16px] leading-relaxed max-w-[850px]">
                <p>
                    Ассоциированным партнером института является Западно-Саксонский университет прикладных наук
                    (Westsächsische Hochschule Zwickau, WHZ).
                </p>

                <p>
                    <strong>WHZ</strong> — региональный университет прикладных наук с их образовательным и научным профилем,
                    ориентированным в области технологии, экономики и качества жизни.
                </p>

                <div className="mt-2">
                    <p className="font-bold mb-4 text-[#1A235E]">Ассоциированный партнер:</p>
                    <ul className="list-none p-0 space-y-3">
                        <li className="flex gap-2"><span>-</span> оказывает поддержку деятельности Института;</li>
                        <li className="flex gap-2"><span>-</span> способствует реализации целей и задач Института;</li>
                        <li className="flex gap-2"><span>-</span> участвует в разработке академических программ, а также в исследованиях, в организации учебного процесса;</li>
                        <li className="flex gap-2"><span>-</span> проводит обучение и повышение квалификации преподавательского состава и других работников Института;</li>
                        <li className="flex gap-2"><span>-</span> участвует в организации программ международного академического обмена.</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <a
                        href="#"
                        className="text-[#1A235E] font-semibold hover:underline decoration-2 underline-offset-4"
                    >
                        Договор WHZ
                    </a>
                </div>
            </div>
        </div>
    );
}