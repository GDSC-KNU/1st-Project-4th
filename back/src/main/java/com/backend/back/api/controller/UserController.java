package com.backend.back.api.controller;

import com.backend.back.Auth.GoogleOAuth;
import com.backend.back.api.dto.user.UserResponse;
import com.backend.back.domain.problem.LevelProblemType;
import com.backend.back.domain.user.User;
import com.backend.back.model.response.CommonResult;
import com.backend.back.model.response.ListResult;
import com.backend.back.model.response.SingleResult;
import com.backend.back.service.OAuthService;
import com.backend.back.service.ResponseService;
import com.backend.back.service.UserService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@RestController // 결과값을 JSON으로 출력함
@RequestMapping("/api")
public class UserController {
    private final UserService userService;
    private final ResponseService responseService; // 결과를 처리할 서비스
    private final OAuthService oAuthService;
    private final GoogleOAuth googleOAuth;
    /**
     * 회원 리스트 조회
     */
    @GetMapping(value="/users")
    public ListResult<UserResponse> findAllUser(){
        List<User> users = userService.findAll();
        List<UserResponse> userResponseList = users.stream().map(UserResponse::toDto).collect(Collectors.toList());
        return responseService.getListResult(userResponseList);
    }
    /**
     * 회원 단건 조회
     */
    @GetMapping(value="/user/{msrl}")
    public SingleResult<UserResponse> findUserById(@PathVariable long msrl){
        User user = userService.findOne(msrl).orElse(null);
        UserResponse userResponse = UserResponse.toDto(user);
        return responseService.getSingleResult(userResponse);
    }
    /**
    * 유저 회원가입
    */
    @PostMapping(value="/user")
    public SingleResult<UserResponse> save(@RequestParam String mail, @RequestParam String password, @RequestParam LevelProblemType level){
        User user = User.builder()
                .mail(mail)
                .level(level)
                .password(password)
                .problem_count(0)
                .problem_current(0)
                .build();
        userService.join(user);
        UserResponse userResponse = UserResponse.toDto(user);
        return responseService.getSingleResult(userResponse);
    }
    /**
     * 회원 삭제
     */
    @DeleteMapping (value= "/user/{msrl}")
    public CommonResult delete(@PathVariable long msrl){
        userService.delete_User(userService.findOne(msrl).orElse(null));
        return responseService.getSuccessResult(); //성공 결과 정보만 리턴
    }

    /**
     * 구글 로그인 페이지로 보내기
     */

    @GetMapping("/google")//맵핑된 주소로 넘어가면 바로 구글 로그인 창으로 넘어가게함.
    public void getGoogleAuthUrl(HttpServletResponse response) throws Exception{
        response.sendRedirect(googleOAuth.getGoogleRedirectUrl());
    }

    /**
     * 구글 로그인 후 리다이렉트 맵핑 주소로 받음.
     */

    @GetMapping("/google/login")
    public SingleResult<User> callback(
            @RequestParam(name="code") String code) throws IOException{
        return oAuthService.googlelogin(code);
    }

}
