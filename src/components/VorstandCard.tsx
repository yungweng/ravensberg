import Image from "next/image";
import type { VorstandMember } from "@/data/vorstand";

interface VorstandCardProps {
  member: VorstandMember;
}

export function VorstandCard({ member }: VorstandCardProps) {
  return (
    <div className="rounded-lg overflow-hidden bg-muted h-full">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl text-foreground mb-1">
          {member.name}
        </h3>
        <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
        <p className="text-muted-fg text-sm leading-relaxed">
          {member.description}
        </p>
      </div>
    </div>
  );
}
