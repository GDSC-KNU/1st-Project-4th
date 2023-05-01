package com.backend.back.service;

import com.backend.back.BackApplication;
import com.backend.back.domain.user.User;
import com.backend.back.repository.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = BackApplication.class)
public class UserServiceTest {
    @Autowired
    UserService userService;
    @Autowired
    UserRepository userRepository;

    @Test
    public void 회원가입() throws Exception{
        //Given
        User user = new User();
        user.setMail("asd@naver.com");
        user.setLevel("1");
        user.setPassword("1");
        user.setProblem_count(1);
        // When
        userService.join(user);
        assertEquals(user.getMail(),"asd@naver.com");
    }
    @Test(expected = IllegalStateException.class) public void 중복_회원_예외() throws Exception {
        //Given
        User user1 = new User();
        user1.setMail("kim");
        User user2 = new User();
        user2.setMail("kim");
        //When
        userService.join(user1);
        userService.join(user2); //예외가 발생해야 한다.
        //Then
        fail("예외가 발생해야함");
    }
}