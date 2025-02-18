import { Card, Text, Image, Stack } from "@mantine/core";

interface SpeakerCardProps {
  name: string;
  imageUrl: string; // Speaker's image
  maskUrl: string; // The mask shaping the image
  bgUrl: string; // The background image
}

export default function SpeakerCard({ name, imageUrl, maskUrl, bgUrl }: SpeakerCardProps) {
  return (
    <Card style={{ textAlign: "center", position: "relative", width: 250, height: 400, overflow: "hidden", margin:'auto' }}>
      
      {/* Background */}
      <Image
        src={bgUrl}
        alt="Background"
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }}
      />

      {/* Masked Speaker Image */}
      <div

      >
        <Image
          src={imageUrl}
          alt={name}
          style={{
            objectFit: "cover",
            transform: "translateY(-8%)", // Moves image up slightly for better centering
            width: "96%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maskImage: `url(${maskUrl})`,
            WebkitMaskImage: `url(${maskUrl})`,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        />
      </div>

      {/* Speaker Name */}
      <Stack align="center" gap={4} style={{ position: "absolute", bottom: 10, width: "100%", zIndex: 2 }}>
        <Text size="xl" fw={500} style={{ fontFamily: "Lora, serif", color: "#000" }}>
          {name}
        </Text>
      </Stack>
    </Card>
  );
}
