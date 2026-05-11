"use client";

import { Container, Title, Text, Button, Group } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { IconSchool, IconArrowUpRight } from '@tabler/icons-react';

export function AboutSection() {
  return (
      <section className="py-24 bg-white overflow-hidden">
        <Container size="lg">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">

            <div className="relative w-full md:w-1/2 h-[450px] md:h-[550px]">
              <div className="absolute top-0 left-0 w-[75%] aspect-square overflow-hidden">
                <Image
                    src="/images/photo_1.png"
                    alt="VR Training at INAI"
                    fill
                    className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[65%] aspect-[4/5] overflow-hidden">
                <Image
                    src="/images/photo_2.png"
                    alt="Students at INAI booth"
                    fill
                    className="object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col">

              <Group gap={10} mb={20}>
                <IconSchool size={28} className="text-[#1A235E]" stroke={1.5} />
                <Text className="text-[#1A235E] font-bold text-sm tracking-wide">
                  О нашем институте
                </Text>
              </Group>

              <Title
                  order={2}
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  className="text-[32px] md:text-[42px] text-[#1A235E] uppercase tracking-wider mb-16">
                Знакомство с нашим <br /> Институтом
              </Title>

              <div className="relative pl-8 mb-10">
                <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-[#1A235E] rounded-full" />
                <Text className="text-gray-500 text-[16px] md:text-[18px] leading-[1.6]">
                  Кыргызско-Германский институт прикладной информатики (КГИПИ) — единственный вуз в образовательном секторе Кыргызстана, специализирующийся в области компьютерных наук.
                </Text>
              </div>

              <div className="mb-10">
                <Text className="text-[#141A51] font-bold text-2xl mb-1">
                  Строим доверие
                </Text>
                <Text className="text-gray-500 text-lg">
                  Мы стремимся к созданию доверия
                </Text>
              </div>

              <Button
                  component={Link}
                  href="/about"
                  size="lg"
                  color="#141A51"
                  radius="5px"
                  className="self-end px-12 h-14 shadow-lg transition-transform hover:-translate-y-1"
                  rightSection={<IconArrowUpRight size={22} />}
              >
                Больше о нас
              </Button>

            </div>
          </div>
        </Container>
      </section>
  );
}
