import { Box, Text, Image, Flex, Divider, Anchor, Stack } from '@mantine/core';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

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
    { icon: FaXTwitter, label: 'X', link: '#' },
    { icon: FaLinkedin, label: 'LinkedIn', link: '#' },
    { icon: FaYoutube, label: 'YouTube', link: '#' },
  ];

export const Footer = () => {
  return (
    <footer style={{ width: '100%', backgroundColor: '#fff', borderTop: '1px solid #ccc' }}>
      <Box size="lg" p={{ base: '1.5rem', md: '5rem' }}>
        <Flex direction={{base: 'column', lg: 'row'}} gap="xl" align="start" justify={{base: 'start', lg: 'space-between'}}>

        <Image src={'/dulit-fest-logo.svg'} w={'40%'} alt="Festival Logo" />
        <Flex w={'60%'} direction={{base: 'column', lg: 'row'}} justify={{base: 'start', lg: 'space-between'}} gap={'md'}>
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
        <Flex gap="md" direction={{base: 'column-reverse', lg: 'row'}} justify={{base: 'start', lg: "space-between"}}>
          <Text size="lg" c="black">
            © 2025 Delhi University Literature Festival. All rights reserved.
          </Text>
          <Flex direction={{base: 'column', lg: 'row'}} gap="lg">
            <Anchor td={'underline'} href="#" size="lg" c="black">Privacy Policy</Anchor>
            <Anchor td={'underline'} href="#" size="lg" c="black">Terms of Service</Anchor>
            <Anchor td={'underline'} href="#" size="lg" c="black">Cookie Settings</Anchor>
          </Flex>
        </Flex>
      </Box>
    </footer>
  );
};
