import {
  Briefcase,
  Code2,
  Compass,
  Cpu,
  Globe,
  Layers,
  Smartphone,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';
import type { ServiceIconName } from '../data/services';

type IconName = ServiceIconName | 'Cpu' | 'Zap' | 'Users' | 'Compass';

interface ServiceIconProps {
  name: IconName;
  className?: string;
}

export function ServiceIcon({ name, className = 'w-5 h-5' }: ServiceIconProps) {
  switch (name) {
    case 'Globe':
      return <Globe className={className} aria-hidden="true" />;
    case 'Smartphone':
      return <Smartphone className={className} aria-hidden="true" />;
    case 'Code2':
      return <Code2 className={className} aria-hidden="true" />;
    case 'Layers':
      return <Layers className={className} aria-hidden="true" />;
    case 'Sparkles':
      return <Sparkles className={className} aria-hidden="true" />;
    case 'Briefcase':
      return <Briefcase className={className} aria-hidden="true" />;
    case 'Cpu':
      return <Cpu className={className} aria-hidden="true" />;
    case 'Zap':
      return <Zap className={className} aria-hidden="true" />;
    case 'Users':
      return <Users className={className} aria-hidden="true" />;
    case 'Compass':
      return <Compass className={className} aria-hidden="true" />;
    default:
      return <Globe className={className} aria-hidden="true" />;
  }
}
