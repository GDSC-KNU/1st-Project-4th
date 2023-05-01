package com.backend.back.domain.user;

import com.backend.back.repository.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
public class UserTest {

    @Autowired
    UserRepository userRepository;

    @Test
    public void 회원가입() throws Exception {
        User user=new User("hys3396","1234","1",3);

        userRepository.save(user);
    }
}