import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiGnometerminal,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiVite,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiNpm,
} from 'react-icons/si';

export const stack = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'PowerShell', icon: SiGnometerminal },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Vite', icon: SiVite },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'npm', icon: SiNpm },
    ],
  },
  {
    category: 'Cloud & Infra',
    items: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Linux', icon: SiLinux },
    ],
  },
];
