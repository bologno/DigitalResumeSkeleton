import avatar from './images/avatar.png';

const ResumeData = {
  myName: 'Alexis Soko',

  avatar: avatar,

  tabLabels: ['Skills','Experience','Education'],

  profileSummary: `Automation/Network engineer with a passion for efficiency.`,

  buttonList: [
    {
      label: 'Github',
      link: 'https://github.com/bologno',
    },
    {
      label: 'Linkedin',
      link: 'https://www.linkedin.com/in/alexis-soko-bb597168/'
    },
    {
      label: 'Chuider',
      link: 'https://twitter.com/bigbangbologno'
    }
  ],

  skillsList: [
    'Coding tools: Python, Bash, COBOL, Go, React ',
    'Python API frameworks (PyQt5, Flask)',
    'Test Plan & Test Case creation for QA design',
    'Pytest framework for testing automation ',
    'Unit & Integration Testing for QA implementation',
    'Fast delivery through Agile methodology',
    'SW versioning on GIT',
    'TCP/IP configuration and monitoring (SSH, Wireshark, Packet Tracer).',
    'Sys admin monitoring (Linux, CLI, TCP/IP',
    'Visualization (KVM, VMWare)',
    'Machine Learning fundamentals (Tensor Flow)',
  ],

  experienceList: [
    {
      company: 'Hewllet Packard Enterprise',
      projects: [
        {
          id: 1,
          value: `New debt level alarm module`
        },
        {
          id: 2,
          value: `Customer contact automation`
        },
        {
          id: 3,
          value: `Night process refactor project`
        }
      ]
    },
    {
      company: 'Nexius',
      projects: [
        {
          id: 1,
          value: `Mobile infrastructure virtualizacion and testing`
        },
        {
          id: 2,
          value: `Network health status dashboard`
        },
      ] // end projects array
    }, // end project object
    {
      company: 'Time Warner Cable',
      projects: [
        {
          id: 1,
          value: `Installed new switch/firewall to improve company connection security and efficiency`
        },
        {
          id: 2,
          value: `Internal process optimized with Excel macros/functions. Office Package reports creation`
        }
      ] // end projects array
    }

  ], // end experienceList array

  educationList: [
    'CCNA 1 | CISCO Academy | UTN Cordoba | 2011',
    'Information Systems Analyst | Universidad Nacional de Cordoba | 2012',

  ] // end educationList array
} // end ResumeData

export default ResumeData;
