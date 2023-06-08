package com.facebookclone.fbservice.service;

import com.facebookclone.fbservice.model.Post;

import java.util.List;

public interface PostService {
    Post addPost(Post post) throws Exception;

    List<Post> getPost();
}
