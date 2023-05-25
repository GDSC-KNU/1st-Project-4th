import { rest } from "msw";
import { URL } from '@/constants/url';
import { VITE_HOME_URL } from "@/constants/apiUrl";

const post = {
  title: 'title1',
  id: 1,
  description: '안녕하세요, 알고리즘 질문드립니다',
  created_date: '2012-10-12',
  modified_date: '2012-10-12',
  view_count: '12',
  user: { id: 'id- 1', level: '1', problem_count: '10' },
  comment_count: 3,
  status: null
}

const user = {
  "success": true,
  "code": 0,
  "msg": "성공하였습니다.",
  "data": {
      "mail": "hys3396@gmail.com",
      "level": "PLATINUM",
      "problem_count": 0,
      "problem_current": 0
  }
}

const users = {
  "success": true,
  "code": 0,
  "msg": "성공하였습니다.",
  "data": [{
    "id": 1,
    "mail": "hys3396@gmail.com",
    "level": "PLATINUM",
    "problem_count": 0,
    "problem_current": 0
},{
  "id": 2,
  "mail": "hys3396@gmail.com",
  "level": "PLATINUM",
  "problem_count": 0,
  "problem_current": 0
},{
  "id": 3,
  "mail": "hys3396@gmail.com",
  "level": "PLATINUM",
  "problem_count": 0,
  "problem_current": 0
}]
}

const posts_response = {
  "success": true,
  "code": 0,
  "msg": "성공하였습니다.",
  "list" : [
    {
      "title": "heemin babo",
      "description": "hello",
      "view_count": 0,
      "userResponse": {
          "mail": "blue",
          "level": "DIAMOND",
          "problem_count": 0,
          "problem_current": 0
      },
      "created_date": "2023-05-23",
      "modified_date": null,
      "status": "DISCUSS"
  },
  {
      "title": "heemin babo",
      "description": "hello",
      "view_count": 0,
      "userResponse": {
          "mail": "blue",
          "level": "DIAMOND",
          "problem_count": 0,
          "problem_current": 0
      },
      "created_date": "2023-05-23",
      "modified_date": null,
      "status": "DISCUSS"
  },
  {
      "title": "heemin babo",
      "description": "hello",
      "view_count": 0,
      "userResponse": {
          "mail": "blue",
          "level": "DIAMOND",
          "problem_count": 0,
          "problem_current": 0
      },
      "created_date": "2023-05-23",
      "modified_date": null,
      "status": "DISCUSS"
  },
  {
      "title": "heemin babo",
      "description": "hello",
      "view_count": 0,
      "userResponse": {
          "mail": "blue",
          "level": "DIAMOND",
          "problem_count": 0,
          "problem_current": 0
      },
      "created_date": "2023-05-23",
      "modified_date": null,
      "status": "DISCUSS"
  },
  {
      "title": "heemin babo",
      "description": "hello",
      "view_count": 0,
      "userResponse": {
          "mail": "blue",
          "level": "DIAMOND",
          "problem_count": 0,
          "problem_current": 0
      },
      "created_date": "2023-05-23",
      "modified_date": null,
      "status": "QUESTION"
  },
  {
    "title": "heemin babo",
    "description": "hello",
    "view_count": 0,
    "userResponse": {
        "mail": "blue",
        "level": "DIAMOND",
        "problem_count": 0,
        "problem_current": 0
    },
    "created_date": "2023-05-23",
    "modified_date": null,
    "status": "QUESTION"
},
{
  "title": "heemin babo",
  "description": "hello",
  "view_count": 0,
  "userResponse": {
      "mail": "blue",
      "level": "DIAMOND",
      "problem_count": 0,
      "problem_current": 0
  },
  "created_date": "2023-05-23",
  "modified_date": null,
  "status": "QUESTION"
},  {
  "title": "heemin babo",
  "description": "hello",
  "view_count": 0,
  "userResponse": {
      "mail": "blue",
      "level": "DIAMOND",
      "problem_count": 0,
      "problem_current": 0
  },
  "created_date": "2023-05-23",
  "modified_date": null,
  "status": "QUESTION"
}
  
//   {
//     "title": "heemin babo",
//       "id": 6,
//     "description": "hello",
//     "view_count": 0,
//     "userResponse": {
//         "id": "id-6",
//         "name": "name1",
//         "mail": "blue",
//         "level": "DIAMOND",
//         "problem_count": 0,
//         "problem_current": 0
//     },
//     "created_date": "2023-05-23",
//     "modified_date": null,
//     "status": "QUESTION",
//     "comment_count": 0,
// }
    // {
    //   "title": "Dummy Title 5",
    //   "id": 6,
    //   "description": "Having issues with recursion, need advice",
    //   "created_date": "2022-12-01",
    //   "modified_date": "2022-12-02",
    //   "view_count": 7,
    //   "user": {
    //     "id": "id-6",
    //     "level": "2",
    //     "problem_count": 12
    //   },
    //   "comment_count": 0,
    //   "status": "QUESTION"
    // }
  ]
}


const serviceUser = [  {
  serviceUser_id : 1,
  name: "John Smith",
  launchdate: "2023-02-01",
  },
  {
  serviceUser_id : 2,
  name: "Hyun",
  launchdate: "2010-05-02",
  },
  {
  serviceUser_id : 3,
  name: "John Sff",
  launchdate: "2021-01-12",
  }]

  const problem = [{
      problem_id : 1,
      name: "피보나치 함수",
      url: 'https://www.acmicpc.net/problem/1003',
      created_date: '2022-10-12'
  },
  {
    problem_id : 2,
    name: "습격자 초라기",
    url: 'https://www.acmicpc.net/problem/1006',
    created_date: '2022-11-12'
  },
  {
    problem_id : 3,
    name: "작업 공",
    url: "https://www.acmicpc.net/problem/2221",
    created_date: '2022-12-12'
  },
  {
    problem_id : 4,
    name: "작업 ",
    url: "https://www.acmicpc.net/problem/2220",
    created_date: '2023-01-12'
  },
  {
    problem_id : 5,
    name: "작업 공정22",
    url: "https://www.acmicpc.net/problem/2221",
    created_date: '2023-01-15'
  },
  {
    problem_id : 6,
    name: "현",
    url: "https://www.acmicpc.net/problem/22",
    created_date: '2022-06-29'
  },
  {
    problem_id : 7,
    name: "작업234",
    url: "https://www.acmicpc.net/problem/89",
    created_date: '2022-08-29'
  },
  {
    problem_id : 8,
    name: "작업 677",
    url: "https://www.acmicpc.net/problem/223",
    created_date: '2022-09-29'
  },
  {
    problem_id : 9,
    name: "작업 78",
    url: "https://www.acmicpc.net/problem/1330",
    created_date: '2023-03-01'
  },
  {
    problem_id : 10,
    name: "작업 7878",
    url: "https://www.acmicpc.net/problem/1676",
    created_date: '2023-03-07'
  }
]

const comments = [
  { id: 1, content : "알고리즘 질문드립니다.", 
  user : { id: 1 , name : "익명"}, 
  created_date : "2022-12-12" }, 
  { id: 2, content : "댓글내용2 입니다", 
  user : { id: 2 , name : "익명"}, 
  created_date : "2022-12-12" }, 
  { id: 3, content : "댓글내용3 입니다",
   user : {  id: 3 , name : "익명"}, 
   created_date : "2022-12-12" }
  ]

export const handlers = [

  rest.get(`${VITE_HOME_URL}/api/serviceUser`, async (req, res, ctx) => {
      return res(
          ctx.json(serviceUser)
        );
    }),

    rest.get(`${VITE_HOME_URL}/api/problem`, async (req, res, ctx) => {
      return res(
          ctx.json(problem)
        );
    }),
    
  //board
  rest.get(`${VITE_HOME_URL}/api/boards?category=all?page=1`, async (req, res, ctx) => {
    return res(
      ctx.json(posts_response)
    );
  }),

  rest.get(`${VITE_HOME_URL}/api/boards?category=discuss?page=1`, async (req, res, ctx) => {
    return res(
      ctx.json(posts_response)
    );
  }),

  rest.get(`${VITE_HOME_URL}/api/boards?category=question?page=1`, async (req, res, ctx) => {
    return res(
      ctx.json(posts_response)
    );
  }),

  rest.post(`${VITE_HOME_URL}/api/board`, (req, res, ctx) => {
    const {title, hashtag, description} = req.body
    // posts_response.push(req.body);
    posts_response.list.push({
      title,
      id: posts_response.list.length +2,
      description,
      created_date: '2012-10-12',
      modified_date: '2012-10-12',
      view_count: '12',
      user: { id: 'id- 1', level: '1', problem_count: '10' },
      comment_count: 3,
      status: null
    })
    // console.log(posts_response)
 
    return res(ctx.json(posts_response));
  }),

  //borad/[id]
  rest.get(`${VITE_HOME_URL}/api/board/:id`, async (req, res, ctx) => {
    const { id } = req.params

    return res(
      ctx.json(
        {
          "success": true,
          "code": 0,
          "msg": "성공하였습니다.",
          "data": {
            ...post,
            commentList: comments,
          }
        }
      )
    );
  }),

  // comment
  rest.get(`${VITE_HOME_URL}/api/comment/:id`, async (req, res, ctx) => {
    const { id } = req.params
    
    return res(
      ctx.json(comments)
    );
  }),

  rest.post(`${VITE_HOME_URL}/api/comment`, (req, res, ctx) => {
    let {comment} = req.body
    let new_comment = { id: comments.length + 1, content : comment, user : { id: comments.length + 1, name : "익명"}}
    comments.push(new_comment)
    return res(ctx.json(new_comment));
  }),

  // user
  rest.get(`${VITE_HOME_URL}/api/user`, async (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.json(user)
    )
  }),

  rest.get(`${VITE_HOME_URL}/api/users`, async (req, res, ctx) => {
    
    return res(
      ctx.json(users)
    )
  }),

  // Login
  rest.post(`${VITE_HOME_URL}/api/auth/login`, async (req, res, ctx) => {
    return res(
      ctx.json(user)
    )
  })

];