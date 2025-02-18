import { Card, Text, Flex, Divider } from '@mantine/core';
import { IconMapPinFilled } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks'; // Import for responsiveness
import dayjs from 'dayjs';

function ProgrammeCard({ programme, isVariantOne }: { programme: any; isVariantOne: boolean }) {
  const isMobile = useMediaQuery('(max-width: 768px)'); // Detects if screen width is ≤ 768px

  // Format times with dayjs
  const startTime = dayjs(programme.start_datetime).format('h:mm A');
  const endTime = dayjs(programme.end_datetime).format('h:mm A');
  const dateFormatted = dayjs(programme.start_datetime).format('dddd, MMMM D');

  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder={!isVariantOne}
      style={{ borderColor: '#2162AE' }}
      mb="md"
      bg={isVariantOne ? '#F5F9FE' : 'white'}
    >
      <Flex 
        direction={isMobile ? 'column' : 'row'} // Stack on small screens
        justify="space-between" 
        align={isMobile ? 'start' : 'center'}
        gap="md"
      >
        
        {/* Date & Time Section */}
        <Flex direction="column" align="start">
          <Flex gap="xs">
            <Text size={isMobile ? 'xs' : 'sm'}>{dateFormatted}</Text>
            <Divider orientation="vertical" color="black" />
            <Text size={isMobile ? 'xs' : 'sm'}>
              {startTime} - {endTime}
            </Text>
          </Flex>

          {/* Programme Name */}
          <Text
            c="#2162AE"
            size={isMobile ? 'md' : 'lg'}
            fw={700}
            style={{ fontFamily: 'Amiri, Times New Roman' }}
          >
            {programme.name}
          </Text>
        </Flex>

        {/* Venue Section */}
        <Flex align="center" gap="xs" mt={isMobile ? 'xs' : 0}>
          <IconMapPinFilled size={16} color="#2162AE" />
          <Text 
            style={{ fontFamily: 'Roboto' }} 
            size={isMobile ? 'xs' : 'sm'}
          >
            {programme.venue}
          </Text>
        </Flex>

      </Flex>
    </Card>
  );
}

export default ProgrammeCard;
