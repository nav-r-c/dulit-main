import { useState } from 'react';
import { Button, Group, Stack, Loader, Box, Text, Flex, SegmentedControl } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { useMediaQuery } from '@mantine/hooks'; // Import for responsiveness
import ProgrammeCard from './programmeCard';
import { getProgrammes } from '../../apiClient'; // API import

function ProgrammePage() {
  const [dayFilter, setDayFilter] = useState('1');
  const [venueFilter, setVenueFilter] = useState('');
  
  const isMobile = useMediaQuery('(max-width: 768px)'); // Breakpoint for mobile

  // Fetching programmes using TanStack Query
  const { data: programmes = [], isPending } = useQuery({
    queryKey: ['programmes'],
    queryFn: getProgrammes,
  });

  // Extract unique day numbers and venues
  const uniqueDays = [...new Set(programmes.map((p: any) => p.day_number))];
  const uniqueVenues = [...new Set(programmes.map((p: any) => p.venue))];

  // Filter logic
  const filteredProgrammes = programmes.filter((p: any) => {
    const dayMatch = dayFilter ? p.day_number === Number(dayFilter) : true;
    const venueMatch = venueFilter ? p.venue === venueFilter : true;
    return dayMatch && venueMatch;
  });

  return (
    <Box w={isMobile ? '100%' : '90%'} size="sm" py="xl" px={isMobile ? 'sm' : 'lg'} m="auto">
      
      {/* Filters */}
      <Flex w="100%" justify="space-between" align="center" direction={isMobile ? 'column' : 'row'} wrap="wrap">
        
        {/* Day Filter Buttons */}
        <Group mb="md" grow={!isMobile}>
          {uniqueDays.map((day) => (
            <Button
              key={`day-${day}`}
              variant={dayFilter === (day as number).toString() ? 'filled' : 'outline'}
              color="orange"
              size={isMobile ? 'md' : 'xl'} // Adjust button size for smaller screens
              onClick={() => setDayFilter((day as number).toString())}
              style={{ fontFamily: 'Cinzel, Times New Roman' }}
            >
              Day {day as string}
            </Button>
          ))}
        </Group>

        {/* Venue Filter Buttons */}
        <Group mb="md" grow={!isMobile}>
          <SegmentedControl
            orientation={isMobile ? 'vertical' : 'horizontal'}
            value={venueFilter}
            onChange={setVenueFilter}
            data={[
              { label: 'Show All', value: '' },
              ...uniqueVenues.map((venue) => ({ label: venue, value: venue }) as any)
            ]}
            color="orange"
            size={isMobile ? 'md' : 'xl'} // Adjust size for mobile
            radius="md"
            fullWidth
            styles={{
              root: { fontFamily: 'Cinzel, Times New Roman' },
            }}
          />
        </Group>

      </Flex>

      {/* Selected Day Display */}
      <Text
        my="lg"
        component="h2"
        style={{
          backgroundColor: '#2162AE',
          color: 'white',
          fontSize: isMobile ? '2rem' : '3rem', // Adjust heading size on mobile
          fontWeight: 'bold',
          fontFamily: 'Cinzel, Times New Roman',
          textAlign: 'center',
          padding: '10px 20px',
          borderRadius: '4px',
          display: 'inline-block',
          width: '100%',
        }}
      >
        Day {dayFilter}
      </Text>

      {/* Loading State */}
      {isPending ? (
        <Flex justify="center">
          <Loader size="lg" />
        </Flex>
      ) : (
        <Stack gap={isMobile ? 'md' : 'xl'}> 
          {filteredProgrammes.map((programme: any, index: number) => (
            <ProgrammeCard
              key={programme._id}
              programme={programme}
              isVariantOne={index % 2 === 0}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default ProgrammePage;
