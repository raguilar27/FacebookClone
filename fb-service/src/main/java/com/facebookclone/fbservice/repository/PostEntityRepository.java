package com.facebookclone.fbservice.repository;

import com.facebookclone.fbservice.entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostEntityRepository extends JpaRepository<PostEntity, String> {
}
