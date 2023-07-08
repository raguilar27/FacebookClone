package com.facebookclone.fbservice.controller;

import com.facebookclone.fbservice.model.Post;
import com.facebookclone.fbservice.service.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin(value="https://fbclanding.netlify.app")
@RestController
@RequestMapping("/api/v1/post")
public class PostController {

    private PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping
    public Post addPost(@RequestParam Map<String,String> requestParams) throws Exception {
        try{
            String strpost = requestParams.get("post");
            String email = requestParams.get("email");
            String name = requestParams.get("name");
            String file = requestParams.get("file");
            String profilePic = requestParams.get("profilePic");

            Post post = Post.builder()
                    .file(file)
                    .name(name)
                    .email(email)
                    .post(strpost)
                    .profilePic(profilePic)
                    .timeStamp(new Date().toString())
                    .build();

            post = postService.addPost(post);

            return post;

        } catch (Exception e) {
            throw new Exception("Error in api/v1/post - addPost() request: " + e );
        }
    }

    @GetMapping
    public List<Post> getPost() throws Exception {
        try{
            return postService.getPost();
        } catch (Exception e) {
            throw new Exception("Error in api/v1/post - getPost() request: " + e );
        }
    }

}
