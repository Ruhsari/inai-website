"use client";

import { useState } from 'react';
import { Container, Title, Text, Group } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';

import { leadershipData, teachersData, projectBureauData, staffData } from '../../../data/organigramData';
import { LeadershipTab } from '../../../components/organigram/LeadershipTab';
import { TeachersTab } from '../../../components/organigram/TeachersTab';
import { ProjectBureauTab } from '../../../components/organigram/ProjectBureauTab';
import { StaffTab } from '../../../components/organigram/StaffTab';

const menuTabs = [
  'Руководство',
  'Профессионально-преподавательский состав',
  'Проектное бюро',
  'Сотрудники'
];

export default function OrganigramPage() {
  const [activeTab, setActiveTab] = useState('Руководство');

  return (
    <div className="bg-white py-16 md:py-24 min-h-screen w-full">
      <Container size="lg" className="w-full max-w-[1200px] mx-auto">
        
        <Group gap={8} mb={24}>
          <IconSchool size={20} className="text-[#1A235E]" stroke={1.5} />
          <Text className="text-gray-500 font-medium text-sm tracking-wide">
            Органиграмма / {activeTab}
          </Text>
        </Group>

        <Title 
          order={1} 
         style={{ fontFamily: "'Times New Roman', Times, serif" }}
        className="text-[32px] md:text-[42px] text-[#1A235E] uppercase tracking-wider mb-16">
          Органиграмма
        </Title>

        {/* ЖЕСТКАЯ СЕТКА GRID НА 12 КОЛОНОК */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 w-full items-start">
          
          {/* ЛЕВАЯ ЧАСТЬ (МЕНЮ): Занимает 4 колонки на планшете, 3 на ПК */}
          <div className="md:col-span-4 lg:col-span-3 w-full border-l-[3px] border-gray-100">
            <div className="flex flex-col w-full">
              {menuTabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full flex text-left py-4 pl-6 -ml-[3px] border-l-[3px] outline-none bg-transparent transition-colors ${
                      isActive 
                        ? 'border-[#1A235E] text-[#1A235E] font-bold text-[15px]' 
                        : 'border-transparent text-gray-500 hover:text-[#1A235E] text-[15px]'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ (КОНТЕНТ): Занимает 8 колонок на планшете, 9 на ПК */}
          <div className="md:col-span-8 lg:col-span-9 w-full min-w-0 overflow-hidden">
            {activeTab === 'Руководство' && <LeadershipTab data={leadershipData} />}
            {activeTab === 'Профессионально-преподавательский состав' && <TeachersTab data={teachersData} />}
            {activeTab === 'Проектное бюро' && <ProjectBureauTab data={projectBureauData} />}
            {activeTab === 'Сотрудники' && <StaffTab data={staffData} />}
          </div>

        </div>
      </Container>
    </div>
  );
}