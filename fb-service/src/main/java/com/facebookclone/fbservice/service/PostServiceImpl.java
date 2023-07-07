package com.facebookclone.fbservice.service;

import com.facebookclone.fbservice.entity.PostEntity;
import com.facebookclone.fbservice.model.Post;
import com.facebookclone.fbservice.repository.PostEntityRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    private PostEntityRepository postEntityRepository;

    public PostServiceImpl(PostEntityRepository postEntityRepository) {
        this.postEntityRepository = postEntityRepository;
    }

    @Override
    public Post addPost(Post post) throws Exception {
        try {
            PostEntity postEntity = new PostEntity();
            BeanUtils.copyProperties(post, postEntity);

            if(post.getFile() != null && !post.getFile().equalsIgnoreCase("null")) {
                postEntity.setImage(post.getFile());
            }else{
                postEntity.setImage(null);
            }

            postEntity = postEntityRepository.save(postEntity);

            post.setId(postEntity.getId());
            post.setFile(null);
            post.setImage(postEntity.getImage());

            return post;

        } catch (Exception e) {
            throw new Exception("Could not save Post: " + e );
        }
    }

    @Override
    public List<Post> getPost() throws Exception {
        try{
            List<PostEntity> postEntities = postEntityRepository.findAll();

            List<Post> posts = new ArrayList<>();

            posts = postEntities.stream()
                    .map((postEntity) ->
                            Post.builder()
                                    .id(postEntity.getId())
                                    .timeStamp(postEntity.getTimeStamp())
                                    .email(postEntity.getEmail())
                                    .name(postEntity.getName())
                                    .post(postEntity.getPost())
                                    .image(postEntity.getImage())
                                    .profilePic(postEntity.getProfilePic())
                                    .build())
                    .collect(Collectors.toList());

            Collections.sort(posts, Comparator.comparing(Post::getTimeStamp));
            Collections.reverse(posts);

            return posts;

        } catch (Exception e) {
            throw new Exception("Could not get Posts: " + e);
        }
    }
}
