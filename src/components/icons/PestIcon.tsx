import { Bug, House, Rat, Shield, type LucideIcon } from 'lucide-react';

const lucideIcons: Record<string, LucideIcon> = {
  'termite-control': House,
  'rodent-control': Rat,
  'pest-control': House,
  'commercial-services': Shield,
};

const customIcons: Record<string, string> = {
  ants: '/images/generated/pests/ants.webp',
  cockroaches: '/images/generated/pests/cockroaches.webp',
  termites: '/images/generated/pests/termites.webp',
  rodents: '/images/generated/pests/rodents.webp',
  spiders: '/images/generated/pests/spiders.webp',
  mosquitoes: '/images/generated/pests/mosquitoes.webp',
  wasps: '/images/generated/pests/wasps.webp',
  'bed-bugs': '/images/generated/pests/bed-bugs.webp',
};

type Props = {
  name: string;
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
};

export default function PestIcon({ name, size = 28, className, style }: Props) {
  if (customIcons[name]) {
    return (
      <img
        src={customIcons[name]}
        alt=""
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
        style={style || { objectFit: 'contain', mixBlendMode: 'multiply' }}
      />
    );
  }

  const Icon = lucideIcons[name] ?? Bug;
  return <Icon size={size as number} className={className} aria-hidden="true" strokeWidth={2.4} style={style} />;
}
