import {atom} from 'recoil'



export const table_record = atom({
    key: 'record',
    default: [
        {
          id: '1',
          uid: 'Brown',
          value: 32,
          type: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          id: '2',
          uid: 'Tyler',
          value: 32,
          type: 'LA No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          id: '3',
          uid: 'B',
          value: 32,
          type: 'New York No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ]
})

