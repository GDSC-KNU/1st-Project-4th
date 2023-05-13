import { rest } from "msw";

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
      "title": "Dummy Title 1",
      "id": 2,
      "description": "Hello, I have a question about programming",
      "created_date": "2023-04-20",
      "modified_date": "2023-04-21",
      "view_count": 8,
      "user": {
        "id": "id-2",
        "level": "2",
        "problem_count": 5
      },
      "comment_count": 2,
      "status": "answered"
    },
    {
      "title": "Dummy Title 2",
      "id": 3,
      "description": "Need help with a coding challenge",
      "created_date": "2023-03-15",
      "modified_date": "2023-03-16",
      "view_count": 5,
      "user": {
        "id": "id-3",
        "level": "3",
        "problem_count": 15
      },
      "comment_count": 4,
      "status": "answered"
    },
    {
      "title": "Dummy Title 3",
      "id": 4,
      "description": "Looking for suggestions on optimizing an algorithm",
      "created_date": "2023-02-10",
      "modified_date": "2023-02-11",
      "view_count": 10,
      "user": {
        "id": "id-4",
        "level": "2",
        "problem_count": 8
      },
      "comment_count": 1,
      "status": "unanswered"
    },
    {
      "title": "Dummy Title 4",
      "id": 5,
      "description": "Seeking guidance on data structures",
      "created_date": "2023-01-05",
      "modified_date": "2023-01-06",
      "view_count": 15,
      "user": {
        "id": "id-5",
        "level": "4",
        "problem_count": 20
      },
      "comment_count": 3,
      "status": "unanswered"
    },
    {
      "title": "Dummy Title 5",
      "id": 6,
      "description": "Having issues with recursion, need advice",
      "created_date": "2022-12-01",
      "modified_date": "2022-12-02",
      "view_count": 7,
      "user": {
        "id": "id-6",
        "level": "2",
        "problem_count": 12
      },
      "comment_count": 0,
      "status": null
    }
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

  rest.get("https://msw.com/api/serviceUser", async (req, res, ctx) => {
      return res(
          ctx.json(serviceUser)
        );
    }),

    rest.get("https://msw.com/api/problem", async (req, res, ctx) => {
      return res(
          ctx.json(problem)
        );
    }),
    
  //board
  rest.get("https://msw.com/api/board", async (req, res, ctx) => {
    return res(
      ctx.json(posts_response)
    );
  }),

  rest.post("https://msw.com/api/board", (req, res, ctx) => {
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
  rest.get("https://msw.com/api/board/:id", async (req, res, ctx) => {
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
  rest.get("https://msw.com/api/comment/:id", async (req, res, ctx) => {
    const { id } = req.params
    
    return res(
      ctx.json(comments)
    );
  }),

  rest.post("https://msw.com/api/comment", (req, res, ctx) => {
    let {comment} = req.body
    let new_comment = { id: comments.length + 1, content : comment, user : { id: comments.length + 1, name : "익명"}}
    comments.push(new_comment)
    return res(ctx.json(new_comment));
  }),

  // user
  rest.get("https://msw.com/api/user/:id", async (req, res, ctx) => {
    const { id } = req.params;
    
    return res(
      ctx.json(user)
    )
  }),

  rest.get("https://msw.com/api/users", async (req, res, ctx) => {
    
    return res(
      ctx.json(users)
    )
  }),

  // Login
  rest.post("https://msw.com/api/auth/login", async (req, res, ctx) => {
    return res(
      ctx.json(user)
    )
  })

];