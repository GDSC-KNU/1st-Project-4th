import { rest } from "msw";

const posts = [  {
  title: 'title1',
  post_id: 1,
  content: '안녕하세요, 알고리즘 질문드립니다',
  created_date: '2012-10-12',
  modified_date: '2012-10-12',
  view_count: '12',
  user: { id: 'id- 1', level: '1', problem_count: '10' },
  comment: [{ id: 1 }, { id: 1 }, { id: 1 }],
},
{
  title: 'title2',
  post_id: 2,
  content: '안녕하세요, 알고리즘 질문드립니다',
  created_date: '2012-10-12',
  modified_date: '2012-10-12',
  view_count: '12',
  user: { id: 'id- 1', level: '1', problem_count: '10' },
  comment: [{ id: 1 }, { id: 1 }, { id: 1 }],
},
{
  title: 'title3',
  post_id: 3,
  content: '안녕하세요, 알고리즘 질문드립니다',
  created_date: '2012-10-12',
  modified_date: '2012-10-12',
  view_count: '12',
  user: { id: 'id- 1', level: '1', problem_count: '10' },
  comment: [{ id: 1 }, { id: 1 }, { id: 1 }],
}]

const comments = [{ id: 1, content : "알고리즘 질문드립니다.", user : { name : "익명"}, created_date : "2022-12-12" }, { id: 2, content : "댓글내용2 입니다", user : { name : "익명"}, created_date : "2022-12-12" }, { id: 3, content : "댓글내용3 입니다", user : { name : "익명"}, created_date : "2022-12-12" }]

export const handlers = [

  //board
  rest.get("https://msw.com/api/board", async (req, res, ctx) => {
    return res(
      ctx.json(posts)
    );
  }),

  rest.post("https://msw.com/api/board", (req, res, ctx) => {
    posts.push(req.body);
    return res(ctx.status(201));
  }),

  //borad/[id]
  rest.get("https://msw.com/api/board/:id", async (req, res, ctx) => {
    const { id : post_id } = req.params

    return res(
      ctx.json({
            title: 'title1',
            post_id: post_id,
            content: '안녕하세요, 알고리즘 질문드립니다 알고리즘 질문드립니다.알고리즘 질문드립니다.알고리즘 질문드립니다.알고리즘 질문드립니다.알고리즘 질문드립니다.',
            created_date: '2012-10-12',
            modified_date: '2012-10-12',
            view_count: '12',
            user: { id: 'id- 1', level: '1', problem_count: '10' },
            comment: comments,
          })
    );
  }),

  // comment
  rest.get("https://msw.com/api/comment", async (req, res, ctx) => {
    return res(
      ctx.json(comments)
    );
  }),

  rest.post("https://msw.com/api/comment", (req, res, ctx) => {
    let {comment} = req.body
    let new_comment = { id: comments.length + 1, content : comment, user : { name : "익명"}}
    comments.push(new_comment)
    return res(ctx.json(new_comment));
  })

];