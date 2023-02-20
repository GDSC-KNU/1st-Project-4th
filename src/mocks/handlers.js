import { rest } from "msw";

export const handlers = [

  rest.get("https://msw.com/api/posts", async (req, res, ctx) => {
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

  rest.get("https://msw.com/api/posts/1", async (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
            {
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
            },
          ],
      })
    );
  }),
];