import { Title, Box, Text } from '@mantine/core';

export function MonKrTab({ data, title }: { data: any[], title: string }) {
  return (
    <Box>
      <Title order={2} size="20px" c="#1A235E" mb={24} tt="uppercase">
        {title}
      </Title>
      
      {/* Уровень 1 */}
      <ol style={{ paddingLeft: '20px', margin: 0, color: '#333', fontSize: '15px', lineHeight: '1.6' }}>
        {data.map((section, index) => {
          const isLink = !section.items || section.items.length === 0;

          return (
            <li key={index} style={{ marginBottom: '16px' }}>
              <Text 
                span 
                fw={isLink ? 400 : 600} 
                style={{ 
                  textDecoration: isLink ? 'underline' : 'none',
                  cursor: isLink ? 'pointer' : 'default'
                }}
                className={isLink ? "hover:text-[#1A235E] transition-colors" : ""}
              >
                {section.title}
              </Text>
              
              {/* Уровень 2 */}
              {section.items && section.items.length > 0 && (
                <ol style={{ paddingLeft: '24px', marginTop: '8px', color: '#555' }}>
                  {section.items.map((item: any, subIndex: number) => {
                    
                    // Если это конечный документ (строка)
                    if (typeof item === 'string') {
                      return (
                        <li key={subIndex} style={{ marginBottom: '8px' }}>
                          <Text span style={{ textDecoration: 'underline' }} className="hover:text-[#1A235E] cursor-pointer transition-colors">
                            {item}
                          </Text>
                        </li>
                      );
                    }

                    // Если это подкатегория (Уровень 3: АУП, ППС)
                    return (
                      <li key={subIndex} style={{ marginBottom: '12px' }}>
                        <Text span fw={500}>{item.title}</Text>
                        <ol style={{ paddingLeft: '24px', marginTop: '8px', color: '#666' }}>
                          {item.items.map((subItem: string, deepIndex: number) => (
                            <li key={deepIndex} style={{ marginBottom: '8px' }}>
                              <Text span style={{ textDecoration: 'underline' }} className="hover:text-[#1A235E] cursor-pointer transition-colors">
                                {subItem}
                              </Text>
                            </li>
                          ))}
                        </ol>
                      </li>
                    );
                  })}
                </ol>
              )}
            </li>
          );
        })}
      </ol>
    </Box>
  );
}