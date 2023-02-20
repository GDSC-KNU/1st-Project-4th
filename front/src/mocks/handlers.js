import { rest } from "msw";

export const handlers = [

  rest.get("https://msw.com/api/board", async (req, res, ctx) => {
  
    return res(
      ctx.json(
          [  {
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
      )
    );
  }),

  rest.get("https://msw.com/api/board/:id", async (req, res, ctx) => {
    const { id : post_id } = req.params
    console.log(post_id)
    return res(
      ctx.json({
            title: 'title1',
            post_id: post_id,
            content: '안녕하세요, 알고리즘 질문드립니다 알고리즘 질문드립니다.알고리즘 질문드립니다.알고리즘 질문드립니다.알고리즘 질문드립니다.알고리즘 질문드립니다.',
            created_date: '2012-10-12',
            modified_date: '2012-10-12',
            view_count: '12',
            user: { id: 'id- 1', level: '1', problem_count: '10' },
            comment: [{ id: 1, content : "알고리즘 질문드립니다.", user : { name : "익명"}, created_date : "2022-12-12" }, { id: 2, content : "댓글내용2 입니다", user : { name : "익명"}, created_date : "2022-12-12" }, { id: 3, content : "댓글내용3 입니다", user : { name : "익명"}, created_date : "2022-12-12" }],
          })
    );
  }),
];