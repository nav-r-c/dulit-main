import { Box, Text, Image, Group, Flex, Divider, Anchor, Stack } from '@mantine/core';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const quickLinks = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About Us', link: '#' },
      { label: 'Contact Us', link: '#' },
      { label: 'Events', link: '#' },
    ],
  },
];

const connectWithUs = [
  {
    title: 'Connect With Us',
    links: [
      { label: 'Media', link: '#' },
      { label: 'Partners', link: '#' },
      { label: 'Sponsors', link: '#' },
    ],
  },
];

const socialLinks = [
    { icon: FaFacebook, label: 'Facebook', link: '#' },
    { icon: FaInstagram, label: 'Instagram', link: '#' },
    { icon: FaTwitter, label: 'X', link: '#' },
    { icon: FaLinkedin, label: 'LinkedIn', link: '#' },
    { icon: FaYoutube, label: 'YouTube', link: '#' },
  ];

export const Footer = () => {
  return (
    <footer style={{ width: '100%', backgroundColor: '#fff' }}>
      <Box size="lg" p={{ base: '2rem', md: '5rem' }}>
        <Flex gap="xl" align="start" justify={'space-between'}>
          {/* Logo Section */}
          <Image src={'/dulit-fest-logo.svg'} width={120} alt="Festival Logo" />
            
        <Flex w={'50%'}>
          {/* Links Section */}
          <Stack>
            {/* Quick Links & Connect Sections */}
            {quickLinks.map((group) => (
              <Flex direction={'column'} key={group.title} align="start">
                <Text fw={700} mb={8} size={'lg'}>{group.title}</Text>
                {group.links.map((link) => (
                  <Text key={link.label} component="a" href={link.link} size="lg" c="dimmed">
                    {link.label}
                  </Text>
                ))}
              </Flex>
            ))}

          </Stack>

          <Stack gap="lg" align="start">
          {connectWithUs.map((group) => (
              <Flex direction={'column'} key={group.title} align="start">
                <Text fw={700} mb={8} size={'lg'}>{group.title}</Text>
                {group.links.map((link) => (
                  <Text key={link.label} component="a" href={link.link} size="lg" c="dimmed">
                    {link.label}
                  </Text>
                ))}
              </Flex>
            ))}
          </Stack>

          {/* Social Media Links */}
          <Stack gap="md" align="start">
            <Text fw={700} mb={8} size="lg">Follow Us</Text>
            {socialLinks.map((social) => (
              <Flex key={social.label} align="start" gap="md">
                <social.icon size={30} />
                <Anchor href={social.link} size="lg" c="dimmed">
                  {social.label}
                </Anchor>
              </Flex>
            ))}
          </Stack>
          </Flex>
        </Flex>


        <Divider my="lg" color='black' />

        {/* Bottom Section */}
        <Stack spacing="md" align="center">
          <Text size="sm" c="dimmed" align="center">
            © 2025 Delhi University Literature Festival. All rights reserved.
          </Text>
          <Group gap="lg">
            <Anchor href="#" size="sm" c="black">Privacy Policy</Anchor>
            <Anchor href="#" size="sm" c="black">Terms of Service</Anchor>
            <Anchor href="#" size="sm" c="black">Cookie Settings</Anchor>
          </Group>
        </Stack>
      </Box>
    </footer>
  );
};
