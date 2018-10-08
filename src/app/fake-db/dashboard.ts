export class ProjectsDashboardDb {
  public static widgets = {
    'widget1': {
      'title': 'Employee Profile',
      'data': {
        'name': 'Alice Freeman',
        'avatar': './assets/img/avatars/8.jpg',
        'profession': 'Advocate',
        'city': 'London, U.K',
        'email': 'demo@demo.com',
        'phone': '+91-903-521-5963',
        'address': 'St. Peter Hall, London, U.K'
      }
    },
    'widget2': {
      'title': 'Human Resources',
      'data': [
        { 'label': 'mobilization', 'present': '51', 'total': '103' },
        { 'label': 'Application', 'present': '32', 'total': '99' },
        { 'label': 'Interview', 'present': '24', 'total': '75' },
      ]
    },
    'widget3': {
      'title': 'Company News',
      'data': [
        { 'name': 'All the Members inviting on weekly meeting', 'posted-on': '23-July-2018' },
        { 'name': 'All the Members inviting on weekly meeting', 'posted-on': '23-July-2018' },
        { 'name': 'All the Members inviting on weekly meeting', 'posted-on': '23-July-2018' },
        { 'name': 'All the Members inviting on weekly meeting', 'posted-on': '23-July-2018' },
      ],
    },
    'widget4': {
      'title': 'Upcoming Events',
      'data': [
        { 'name': 'All the Members inviting on weekly meeting', 'posted-on': '23-July-2018' },
        { 'name': 'All the Members inviting on weekly meeting', 'posted-on': '23-July-2018' },
        { 'name': 'All the Members inviting on weekly meeting', 'posted-on': '23-July-2018' },
        { 'name': 'All the Members inviting on weekly meeting', 'posted-on': '23-July-2018' }, ],
    },
    'widget5': {
      'title': 'Social/Culture Feed',
      'data': [
        { 'name': '@CKR LAW', 'message': 'Hey did you just send the files to me?', 'posted-on': '8 min ago' },
      ],
    }
  };
}
