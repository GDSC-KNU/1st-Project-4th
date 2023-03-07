package com.backend.back.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter @Setter
@Table(name="orders")
public class Problem {
    @Id @GeneratedValue
    @Column(name ="problem_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="levelProblem_id")
    private LevelProblem levelProblem;

    private String url;
    private int order; // 문제 순서
    private String type; // 문제 알고리즘 타입
    private LocalDateTime date; // 문제 받은 날짜
}
