import { EmployeeDb } from '../../fake-db/employee';

export interface DirectoryState {
  directoryData: EmployeeDb[];
}

const initialState: DirectoryState = {
  directoryData: [
    {
      'name': 'Alice Freeman',
      'avatar': './assets/img/avatars/8.jpg',
      'profession': 'Advocate',
      'city': 'London, U.K',
      'email': 'demo@demo.com',
      'phone': '+91-903-521-5963',
      'address': 'St. Peter Hall, London, U.K'
    },
    {
      'name': 'Alice Freeman',
      'avatar': './assets/img/avatars/8.jpg',
      'profession': 'Advocate',
      'city': 'London, U.K',
      'email': 'demo@demo.com',
      'phone': '+91-903-521-5963',
      'address': 'St. Peter Hall, London, U.K'
    },
    {
      'name': 'Alice Freeman',
      'avatar': './assets/img/avatars/8.jpg',
      'profession': 'Advocate',
      'city': 'London, U.K',
      'email': 'demo@demo.com',
      'phone': '+91-903-521-5963',
      'address': 'St. Peter Hall, London, U.K'
    },
    {
      'name': 'Alice Freeman',
      'avatar': './assets/img/avatars/8.jpg',
      'profession': 'Advocate',
      'city': 'London, U.K',
      'email': 'demo@demo.com',
      'phone': '+91-903-521-5963',
      'address': 'St. Peter Hall, London, U.K'
    }
  ]
};

export function DirectoryReducer(state: DirectoryState = initialState, action: any): DirectoryState {
  switch (action.type) {
    case 'GET_EMPLOYEE_DIRECTORY': {
      return state;
    }
    default: {
      return state;
    }
  }
  return state;
}
