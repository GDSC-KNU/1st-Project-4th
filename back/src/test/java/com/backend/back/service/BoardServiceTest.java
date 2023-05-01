package com.backend.back.service;

import com.backend.back.BackApplication;
import com.backend.back.domain.board.Board;
import com.backend.back.domain.user.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = BackApplication.class)
public class BoardServiceTest {

    @Autowired
    BoardService boardService;

    @Autowired
    UserService userService;

    @Test
    public void 게시물등록() throws Exception {
        User user=new User("hys3396","1234","1",3);
        userService.join(user);

        Board board1=new Board(user,"hello","gg", LocalDateTime.now(),LocalDateTime.now(),0);
        boardService.register_Board(user,board1);

        Board board2=new Board(user,"hello","gg", LocalDateTime.now(),LocalDateTime.now(),0);
        Board board3=new Board(user,"hello","gg", LocalDateTime.now(),LocalDateTime.now(),0);
        Board board4=new Board(user,"hello","gg", LocalDateTime.now(),LocalDateTime.now(),0);
        boardService.register_Board(user,board2);
        boardService.register_Board(user,board3);
        boardService.register_Board(user,board4);
    }

}