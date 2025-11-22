// Notices and Announcements Data

export interface NoticeFile {
  name: string;
  url: string;
  size?: string;
}

export interface Notice {
  id: number;
  title: string;
  date: string;
  description?: string;
  files: NoticeFile[];
}

export const noticesData: Notice[] = [
  {
    id: 1,
    title: 'Board Meeting Intimation - Q4 Results FY 2024-25',
    date: '2025-05-15',
    description: 'Notice of Board Meeting to consider and approve the financial results for Q4 and FY 2024-25',
    files: [
      {
        name: 'Board Meeting Notice.pdf',
        url: '#',
        size: '245 KB'
      },
      {
        name: 'Agenda.pdf',
        url: '#',
        size: '180 KB'
      }
    ]
  },
  {
    id: 2,
    title: 'Annual General Meeting Notice',
    date: '2025-04-20',
    description: 'Notice of 25th Annual General Meeting scheduled on June 30, 2025',
    files: [
      {
        name: 'AGM Notice 2025.pdf',
        url: '#',
        size: '1.2 MB'
      }
    ]
  },
  {
    id: 3,
    title: 'Disclosure under Regulation 30 - Material Events',
    date: '2025-03-10',
    description: 'Disclosure of material events and information under SEBI regulations',
    files: [
      {
        name: 'Material Event Disclosure.pdf',
        url: '#',
        size: '320 KB'
      }
    ]
  },
  {
    id: 4,
    title: 'Appointment of Independent Director',
    date: '2025-02-28',
    description: 'Announcement regarding appointment of new Independent Director',
    files: [
      {
        name: 'Director Appointment.pdf',
        url: '#',
        size: '156 KB'
      },
      {
        name: 'Director Profile.pdf',
        url: '#',
        size: '89 KB'
      }
    ]
  },
  {
    id: 5,
    title: 'Dividend Declaration - FY 2023-24',
    date: '2025-01-15',
    description: 'Declaration of final dividend for Financial Year 2023-24',
    files: [
      {
        name: 'Dividend Notice.pdf',
        url: '#',
        size: '198 KB'
      }
    ]
  }
];
