import {
  SiAngular,
  SiCss,
  SiDotnet,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiGnometerminal,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiTypescript,
} from 'react-icons/si';

import {
  TbBrandCSharp,
  TbBrandMysql,
  TbDatabase,
  TbSql,
} from 'react-icons/tb';

export const stack = [
  {
    category: 'Languages',
    items: [
      { name: 'C#', icon: TbBrandCSharp },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'SQL', icon: TbSql },
      { name: 'PowerShell', icon: SiGnometerminal },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: '.NET Core', icon: SiDotnet },
      { name: 'Entity Framework', icon: TbDatabase },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'Angular', icon: SiAngular },
      { name: 'React', icon: SiReact },
      { name: 'SCSS', icon: SiSass },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
    ],
  },
  {
    category: 'Data',
    items: [
      { name: 'SQL Server', icon: TbDatabase },
      { name: 'MySQL', icon: TbBrandMysql },
    ],
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Docker', icon: SiDocker },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Git', icon: SiGit },
      { name: 'Linux', icon: SiLinux },
    ],
  },
];
