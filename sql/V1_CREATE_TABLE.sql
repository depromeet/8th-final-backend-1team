CREATE TABLE IF NOT EXISTS t_account
(
  `id`            BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nickname`      VARCHAR(255)        NOT NULL COMMENT '유저 닉네임',
  `profile_image` VARCHAR(255)        NULL COMMENT '프로필 이미지',
  `created_at`    TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`    TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET = utf8mb4 COMMENT '유저 정보';

CREATE TABLE IF NOT EXISTS t_provider
(
  `id`            BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `provider_id`   VARCHAR(255)        NOT NULL COMMENT '소셜 로그인때 가져오는 고유 Id',
  `provider_name` VARCHAR(255)        NOT NULL COMMENT '어떤 소셜 로그인인지',
  `account_id`    BIGINT UNSIGNED     NOT NULL COMMENT '이 소셜 로그인과 관련된 유저 id',
  `created_at`    TIMESTAMP           NOT NULL,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET = utf8mb4 COMMENT '소셜 로그인 정보';


CREATE TABLE IF NOT EXISTS t_category
(
  `id`   BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255)        NOT NULL COMMENT '카테고리 이름 (ex> 숙면 등)',
  PRIMARY KEY (`id`)
) DEFAULT CHARSET = utf8mb4 COMMENT '카테고리 정보';

CREATE TABLE IF NOT EXISTS t_music
(
  `id`             BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title`          VARCHAR(255)        NOT NULL COMMENT '음원 타이틀',
  `url`            VARCHAR(255)        NOT NULL COMMENT '음악 재생을 위한 url',
  `created_at`     TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`     TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `content_length` INT                 NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET = utf8mb4 COMMENT '명상 음악 정보';

CREATE TABLE IF NOT EXISTS t_video
(
  `id`             BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `url`            VARCHAR(255)        NOT NULL COMMENT '영상 재생을 위한 url',
  `created_at`     TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`     TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `content_length` INT                 NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET = utf8mb4 COMMENT '명상 시작 시 재생할 비디오 정보';

CREATE TABLE IF NOT EXISTS t_incense
(
  `id`         BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name`       VARCHAR(255)        NOT NULL COMMENT '향 이름 - enum 형식 (LAVENDER)',
  `detail`     VARCHAR(255)        NOT NULL COMMENT '향에 대한 설명',
  `weight`     FLOAT               NOT NULL DEFAULT '0',
  `image`      VARCHAR(255)        NOT NULL COMMENT '향에 대한 배경 이미지',
  `video_id`   BIGINT UNSIGNED     NOT NULL COMMENT '향을 틀었을 때 재생할 비디오 id',
  `music_id`   BIGINT UNSIGNED     NOT NULL COMMENT '향을 틀었을 땨 재생할 음악 id',
  `category_id` BIGINT UNSIGNED     NOT NULL COMMENT '이 향이 속해있는 범주 id',
  PRIMARY KEY (`id`)
) DEFAULT CHARSET = utf8mb4 COMMENT '향 정보';

CREATE TABLE IF NOT EXISTS t_history
(
  `id`         BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `play_time`  INT                 NOT NULL COMMENT '향상 재생 시간 (단위는 seconds)',
  `image`      VARCHAR(255)        NULL COMMENT '메모작성 시 남길 이미지 정보',
  `account_id` BIGINT UNSIGNED     NOT NULL COMMENT '이 향을 재생시킨 유저 Id',
  `incense_id` BIGINT UNSIGNED     NOT NULL COMMENT '이 히스토리와 관련된 향 id',
  `created_at` TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET = utf8mb4 COMMENT '향상한 기록';


CREATE TABLE IF NOT EXISTS t_memo
(
  `id`         BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title`      VARCHAR(255)        NOT NULL COMMENT '메모 제목',
  `detail`     VARCHAR(255)        NOT NULL COMMENT '메모 내용',
  `created_at` TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `history_id` BIGINT UNSIGNED     NOT NULL COMMENT '이 메모가 속해있는 historyid',
  PRIMARY KEY (`id`)
) DEFAULT CHARSET = utf8mb4 COMMENT '향상 했을 시 작성한 메모 정보';


CREATE TABLE IF NOT EXISTS t_tag
(
  `id`         BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name`       VARCHAR(255)        NOT NULL COMMENT '태그(키워드) 이름',
  `weight`     FLOAT DEFAULT '0'   NOT NULL COMMENT '이 키워드의 가중치',
  `category_id` BIGINT UNSIGNED,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET = utf8mb4 COMMENT '향 추천을 위한키워드 정보';

CREATE TABLE IF NOT EXISTS t_history_tag
(
  `id`         BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `history_id` BIGINT UNSIGNED,
  `tag_id`     BIGINT UNSIGNED,
  UNIQUE (`history_id`, `tag_id`),
  PRIMARY KEY (`id`)
) DEFAULT CHARSET = utf8mb4 COMMENT '향상 기록과 관련된 tag 들 정보';
