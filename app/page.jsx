
'use client';
import { Card } from '../components/Card';

const projects = [
  { title: "Interior 01", image: "/images/01.jpg", description: "Modern living space with natural light." },
  { title: "Interior 02", image: "/images/02.jpg", description: "Elegant and cozy room design." },
  { title: "Red Theme Room", image: "/images/červený.jpg", description: "Warm red tones in interior styling." },
  { title: "Modern Apartment", image: "/images/final_4k.jpg", description: "Spacious modern apartment visualization." },
  { title: "Bathroom Design", image: "/images/Koupelna.jpg", description: "Minimalist and elegant bathroom." },
  { title: "Lobby Concept", image: "/images/lobby_final.jpg", description: "Hotel lobby with stylish atmosphere." },
  { title: "Bedroom", image: "/images/Ložnice.jpg", description: "Cozy and calm bedroom scene." },
  { title: "Blue Toned Interior", image: "/images/modrý.jpg", description: "Cool blue color palette with modern design." },
  { title: "Living Room 1", image: "/images/OP_01.jpg", description: "Functional and aesthetic living room." },
  { title: "Living Room 2", image: "/images/OP_02.jpg", description: "Second angle of the living room." }
];

export default function Home() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Anastasiia Spichak – 3D Artist</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I am a 34-year-old 3D artist with 3 years of experience in interior and architectural visualization.<br />
          This is not just a job for me — it’s my passion. I approach each project with care, attention to detail, and full commitment.<br />
          I work with 3ds Max and Corona Renderer, creating warm, modern, and cozy visual stories.<br />
          You can always count on me to deliver high-quality results on time.
        </p>
        <p className="mt-4 font-medium">📱 WhatsApp: +420 722 451 039</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <Card key={idx} title={project.title} image={project.image} description={project.description} />
        ))}
      </div>
    </div>
  );
}
