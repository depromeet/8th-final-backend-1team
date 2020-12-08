/*Category*/
INSERT INTO t_category(id, name)
VALUES (1, '명상'),
       (2, '집중'),
       (3, '숙면'),
       (4, '기분전환'),
       (5, '스트레스');

/*Music*/
INSERT INTO t_music(id, title, url, content_length)
VALUES (1, '별빛을 보다\n문득', 'https://fragraph-contents.s3.ap-northeast-2.amazonaws.com/music/music_sandalwood.mp3', 300),
       (2, 'Lifting\nDreams', 'https://fragraph-contents.s3.ap-northeast-2.amazonaws.com/music/music_peppermint.mp3', 300),
       (3, 'Kiss the\nSky', 'https://fragraph-contents.s3.ap-northeast-2.amazonaws.com/music/music_lavender.mp3', 300),
       (4, 'Angels\nDream', 'https://fragraph-contents.s3.ap-northeast-2.amazonaws.com/music/music_orange.mp3', 300),
       (5, 'Heavenly', 'https://fragraph-contents.s3.ap-northeast-2.amazonaws.com/music/music_eucalyptus.mp3', 300);

/*Video*/
INSERT INTO t_video(id, url, content_length)
VALUES (1, 'https://fragraph-contents.s3.ap-northeast-2.amazonaws.com/video/video_sandalwood.gif', 300),
       (2, 'https://fragraph-contents.s3.ap-northeast-2.amazonaws.com/video/video_peppermint.gif', 300),
       (3, 'https://fragraph-contents.s3.ap-northeast-2.amazonaws.com/video/video_lavender.gif', 300),
       (4, 'https://fragraph-contents.s3.ap-northeast-2.amazonaws.com/video/video_orange.gif', 300),
       (5, 'https://fragraph-contents.s3.ap-northeast-2.amazonaws.com/video/video_eucalyptus.gif', 300);

/*Incense*/
INSERT INTO t_incense(id, name, detail, weight, image, video_id, music_id, category_id)
VALUES (1, 'SANDALWOOD', '심장기능을 강화하고 혈액순환을 촉진, 마음을 진정시키는 효과가 뛰어납니다.', 0.5,
        'https://fragraph-contents.s3.ap-northeast-2.amazonaws.com/incense_image/sandalwood.png', 1, 1, 1),
       (2, 'PEPPERMINT', '기침, 감기, 천식, 알레르기 및 결핵 등 호흡기계에 건강상 효능을 제공, 기억력 증진 및 스트레스 완화 효과가 있을 수 있습니다.', 0.5,
        'https://fragraph-contents.s3.ap-northeast-2.amazonaws.com/incense_image/peppermint.png', 2, 2, 2),
       (3, 'LAVENDER', '주성분은 아세트산리날릴, 리날올, 피넨, 리모넨, 게라니올, 시네올 등이다. 이는 신경을 안정시켜주고 스트레스 해소 및 불면증 예방에 탁월한 효과가 있다.', 0.5,
        'https://fragraph-contents.s3.ap-northeast-2.amazonaws.com/incense_image/lavendar.png', 3, 3, 3),
       (4, 'ORANGE',
        '림프 흐름을 자극하여 부은 조직의 치료를 돕고, 셀룰라이트 처치에도 사용됩니다. 건성 피부, 염증이 있는 피부, 여드름 성향의 피부를 진정시키는 데 유용합니다. 또한 재생성이 있어 노화 피부와 거칠고 굳어진 피부치료에 사용하면 좋습니다.',
        0.5, 'https://fragraph-contents.s3.ap-northeast-2.amazonaws.com/incense_image/orange.png', 4, 4, 4),
       (5, 'EUCALYPTUS', '근육통 안화효과, 다피가료움증 개선, 호흡기 건강에 도움을 줍니다.', 0.5,
        'https://fragraph-contents.s3.ap-northeast-2.amazonaws.com/incense_image/eucalyptus.png', 5, 5, 5);

/*Tag*/

/*명상*/
INSERT INTO t_tag(id, name, weight, category_id)
VALUES (1, '안정이 필요한', 0.3, 1),
       (2, '꿀꿀한', 0.3, 1),
       (3, '쉬고 싶어', 0.3, 1),
       (4, '하루의 마무리', 0.3, 1),
       (5, '마음이 뒤숭숭해', 0.3, 1),
       (6, '생각이 생각을 불러오는', 0.3, 1),
       (7, '너어무 신이나', 0.3, 1),
       (8, '생각을 비우고 싶은', 0.3, 1),
       (9, '이제는 놓아줘야 해', 0.3, 1),
       (10, '아무 의미 없다', 0.3, 1);

/*집중*/
INSERT INTO t_tag(id, name, weight, category_id)
VALUES (11, '남다른 집중력이 필요해', 0.3, 2),
       (12, '머리가 복잡해', 0.3, 2),
       (13, '불안 불안해', 0.3, 2),
       (14, '망치면 어떡하지?', 0.3, 2),
       (15, '집중이 안되는', 0.3, 2),
       (16, '상쾌함이 필요해', 0.3, 2),
       (17, '주변이 너무 산만해', 0.3, 2),
       (18, '아직 할 일이 남은', 0.3, 2),
       (19, '지금은 빡공 할 타이밍', 0.3, 2),
       (20, '지금 너무 졸려', 0.3, 2);

/*숙면*/
INSERT INTO t_tag(id, name, weight, category_id)
VALUES (21, '피곤한데 잠이 안와', 0.3, 3),
       (22, '너무너무 우울해', 0.3, 3),
       (23, '토닥토닥', 0.3, 3),
       (24, '자야 할 시간이야', 0.3, 3),
       (25, '좋은 꿈 꾸고 싶어', 0.3, 3),
       (26, '혼자이고 싶지만 외로워', 0.3, 3),
       (27, '오늘 야근했어', 0.3, 3),
       (28, '술 마시고 싶은 하루', 0.3, 3),
       (29, '바람 쐬고 싶어', 0.3, 3),
       (30, '가슴이 꽉 막혀', 0.3, 3);

/*기분전환*/
INSERT INTO t_tag(id, name, weight, category_id)
VALUES (31, '솟아라, 엔돌핀이여', 0.3, 4),
       (32, '활기찬 하루', 0.3, 4),
       (33, '신나는', 0.3, 4),
       (34, '기운 없는', 0.3, 4),
       (35, '지친 하루 끝에서', 0.3, 4),
       (36, '시체가 되고 싶어', 0.3, 4),
       (37, '아무것도 하기 싫은', 0.3, 4),
       (38, '번아웃 증후군', 0.3, 4),
       (39, '기분전환이 필요해', 0.3, 4),
       (40, '하늘을 날아갈 것 같은', 0.3, 4),
       (41, '설레는', 0.3, 4),
       (42, '웃음이 나오는', 0.3, 4),
       (43, '색다른 것을 하고 싶은', 0.3, 4),
       (44, '멀리 떠나고 싶은', 0.3, 4);

/*스트레스*/
INSERT INTO t_tag(id, name, weight, category_id)
VALUES (45, '마음대로 되지 않는 하루', 0.3, 5),
       (46, '스트레스 받아', 0.3, 5),
       (47, '머리가 지끈거리는', 0.3, 5),
       (48, '혈압 상승 중', 0.3, 5),
       (49, '분노 조절 장애', 0.3, 5),
       (50, '머리가 띵!', 0.3, 5),
       (51, '고단한', 0.3, 5),
       (52, '허탈한', 0.3, 5),
       (53, '나보고 살쪘대', 0.3, 5),
       (54, '살인충동이 느껴져', 0.3, 5),
       (55, '나보고 어쩌라고', 0.3, 5),
       (56, '쟤는 왜 저래?', 0.3, 5),
       (57, '도통 이해가 안 가', 0.3, 5);
