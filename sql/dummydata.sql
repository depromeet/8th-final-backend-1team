/*Account*/
/*INSERT INTO fragraph.t_account(nickname, profile_image, created_at, updated_at) VALUES('Yong', 'Yong.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29');*/


/*Category*/
<<<<<<< HEAD
INSERT INTO fragraph.t_category(id, name) VALUES(1, '숙면');
INSERT INTO fragraph.t_category(id, name) VALUES(2, '집중');
INSERT INTO fragraph.t_category(id, name) VALUES(3, '스트레스');
INSERT INTO fragraph.t_category(id, name) VALUES(4, '기분전환');
INSERT INTO fragraph.t_category(id, name) VALUES(5, '명상');

    
/*Music*/
INSERT INTO fragraph.t_music(id, url, created_at, updated_at, content_length) VALUES(1, '1.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);
INSERT INTO fragraph.t_music(id, url, created_at, updated_at, content_length) VALUES(2, '2.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);
INSERT INTO fragraph.t_music(id, url, created_at, updated_at, content_length) VALUES(3, '3.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);
INSERT INTO fragraph.t_music(id, url, created_at, updated_at, content_length) VALUES(4, '4.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);
INSERT INTO fragraph.t_music(id, url, created_at, updated_at, content_length) VALUES(5, '5.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);

/*Video*/
INSERT INTO fragraph.t_video(id, url, created_at, updated_at, content_length) values(1, '1.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);
INSERT INTO fragraph.t_video(id, url, created_at, updated_at, content_length) values(2, '2.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);
INSERT INTO fragraph.t_video(id, url, created_at, updated_at, content_length) values(3, '3.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);
INSERT INTO fragraph.t_video(id, url, created_at, updated_at, content_length) values(4, '4.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);
INSERT INTO fragraph.t_video(id, url, created_at, updated_at, content_length) values(5, '5.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);


/*Incense*/
INSERT INTO fragraph.t_incense(name, detail, weight, image, video_id, music_id, category_id) VALUES('라벤더', '주성분은 아세트산리날릴, 리날올, 피넨, 리모넨, 게라니올, 시네올 등이다. 이는 신경을 안정시켜주고 스트레스 해소 및 불면증 예방에 탁월한 효과가 있다.', 0.5, '1.jpg', 1, 1, 1);
INSERT INTO fragraph.t_incense(name, detail, weight, image, video_id, music_id, category_id) VALUES('페퍼민트', '기침, 감기, 천식, 알레르기 및 결핵 등 호흡기계에 건강상 효능을 제공, 기억력 증진 및 스트레스 완화 효과가 있을 수 있습니다.', 0.5, '2.jpg', 2, 2, 2);
INSERT INTO fragraph.t_incense(name, detail, weight, image, video_id, music_id, category_id) VALUES('유칼립투스', '근육통 안화효과, 다피가료움증 개선, 호흡기 건강에 도움을 줍니다.', 0.5, '3.jpg', 3, 3, 3);
INSERT INTO fragraph.t_incense(name, detail, weight, image, video_id, music_id, category_id) VALUES('스위트 오렌지', '림프 흐름을 자극하여 부은 조직의 치료를 돕고, 셀룰라이트 처치에도 사용됩니다. 건성 피부, 염증이 있는 피부, 여드름 성향의 피부를 진정시키는 데 유용합니다. 또한 재생성이 있어 노화 피부와 거칠고 굳어진 피부치료에 사용하면 좋습니다.
', 0.5, '4.jpg', 4, 4, 4);
INSERT INTO fragraph.t_incense(name, detail, weight, image, video_id, music_id, category_id) VALUES('샌들우드', '심장기능을 강화하고 혈액순환을 촉진, 마음을 진정시키는 효과가 뛰어납니다.', 0.5, '5.jpg', 5, 5, 5);

/*Tag*/
    /*숙면*/
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('잠 못드는 밤', 0.3, 1);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('우울해', 0.4, 1);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('잠이 안와', 0.8, 1);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('힘든 하루', 0.2, 1);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('스트레스', 0.5, 1);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('마음대로 되지 않는 하루', 0.3, 1);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('멀리 떠나고 싶은', 0.4, 1);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('토닥토닥', 0.1, 1);
    /*집중*/
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('머리가 복잡해', 0.6, 2);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('집중이 필요한', 0.8, 2);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('상쾌해', 0.2, 2);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('불안불안', 0.3, 2);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('망치면 어떡하지', 0.2, 2);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('상쾌해 지고싶은', 0.5, 2);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('민초단', 0.6, 2);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('주변이 왜 이렇게 시끄럽지?', 0.1, 2);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('아직 할 일이 남은', 0.4, 2);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('공부할 타이밍', 0.6, 2);
    /*스트레스*/
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('우울해', 0.7, 3);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('사랑하고 싶어', 0.6, 3);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('머리가 지끈거리는', 0.5, 3);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('목이 칼칼해', 0.4, 3);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('혈압 상승!!', 0.3, 3);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('분노조절장애', 0.5, 3);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('머리가 띵!', 0.6, 3);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('고단한', 0.7, 3);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('허탈한', 0.8, 3);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('으슬으슬', 0.2, 3);
    /*기분전환*/
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('솟아라 엔돌핀이여!', 0.3, 4);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('정신적 스트레스', 0.4, 4);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('활기찬 하루', 0.6, 4);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('신나는', 0.7, 4);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('기운없는', 0.8, 4);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('지친 하루 끝에서', 0.8, 4);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('시체가 되고 싶어', 0.3, 4);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('아무것도 하기 싫어', 0.8, 4);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('번아웃 증후군', 0.5, 4);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('기분전환이 필요해', 0.7, 4);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('하늘을 날아갈 것 같은', 0.3, 4);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('설레는', 0.1, 4);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('웃음이 나오는', 0.7, 4);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('색다른 것을 하고 싶은', 0.6, 4);
    /*명상*/
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('안정이 필요한', 0.8, 5);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('꿀꿀한', 0.3, 5);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('하루의 마무리', 0.5, 5);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('마음이 뒤숭숭해', 0.1, 5);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('생각이 생각을 불러오는', 0.45, 5);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('너무 신이나', 0.3, 5);
INSERT INTO fragraph.t_tag(name, weight, category_id) VALUES('명상이 필요한', 0.2, 5);
=======
INSERT INTO fragraph.t_category(name) VALUES('숙면');
INSERT INTO fragraph.t_category(name) VALUES('집중');
INSERT INTO fragraph.t_category(name) VALUES('스트레스');
INSERT INTO fragraph.t_category(name) VALUES('기분전환');
INSERT INTO fragraph.t_category(name) VALUES('명상');

/*Incense*/
INSERT INTO fragraph.t_incense(name, detail, weight, image, video_id, music_id, "categoryId") VALUES('라벤더', '주성분은 아세트산리날릴, 리날올, 피넨, 리모넨, 게라니올, 시네올 등이다. 이는 신경을 안정시켜주고 스트레스 해소 및 불면증 예방에 탁월한 효과가 있다.', 0.5, '1.jpg', 1, 1, 1);
INSERT INTO fragraph.t_incense(name, detail, weight, image, video_id, music_id, "categoryId") VALUES('페퍼민트', '기침, 감기, 천식, 알레르기 및 결핵 등 호흡기계에 건강상 효능을 제공, 기억력 증진 및 스트레스 완화 효과가 있을 수 있습니다.', 0.5, '2.jpg', 2, 2, 2);
INSERT INTO fragraph.t_incense(name, detail, weight, image, video_id, music_id, "categoryId") VALUES('유칼립투스', '근육통 안화효과, 다피가료움증 개선, 호흡기 건강에 도움을 줍니다.', 0.5, '3.jpg', 3, 3, 3);
INSERT INTO fragraph.t_incense(name, detail, weight, image, video_id, music_id, "categoryId") VALUES('스위트 오렌지', '림프 흐름을 자극하여 부은 조직의 치료를 돕고, 셀룰라이트 처치에도 사용됩니다. 건성 피부, 염증이 있는 피부, 여드름 성향의 피부를 진정시키는 데 유용합니다. 또한 재생성이 있어 노화 피부와 거칠고 굳어진 피부치료에 사용하면 좋습니다.
', 0.5, '4.jpg', 4, 4, 4);
INSERT INTO fragraph.t_incense(name, detail, weight, image, video_id, music_id, "categoryId") VALUES('샌들우드', '심장기능을 강화하고 혈액순환을 촉진, 마음을 진정시키는 효과가 뛰어납니다.', 0.5, '5.jpg', 5, 5, 5);

/*Tag*/
    /*숙면*/
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('잠 못드는 밤', 0.3, 1);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('우울해', 0.4, 1);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('잠이 안와', 0.8, 1);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('힘든 하루', 0.2, 1);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('스트레스', 0.5, 1);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('마음대로 되지 않는 하루', 0.3, 1);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('멀리 떠나고 싶은', 0.4, 1);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('토닥토닥', 0.1, 1);
    /*집중*/
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('머리가 복잡해', 0.6, 2);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('집중이 필요한', 0.8, 2);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('상쾌해', 0.2, 2);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('불안불안', 0.3, 2);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('망치면 어떡하지', 0.2, 2);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('상쾌해 지고싶은', 0.5, 2);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('민초단', 0.6, 2);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('주변이 왜 이렇게 시끄럽지?', 0.1, 2);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('아직 할 일이 남은', 0.4, 2);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('공부할 타이밍', 0.6, 2);
    /*스트레스*/
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('우울해', 0.7, 3);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('사랑하고 싶어', 0.6, 3);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('머리가 지끈거리는', 0.5, 3);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('목이 칼칼해', 0.4, 3);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('혈압 상승!!', 0.3, 3);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('분노조절장애', 0.5, 3);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('머리가 띵!', 0.6, 3);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('고단한', 0.7, 3);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('허탈한', 0.8, 3);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('으슬으슬', 0.2, 3);
    /*기분전환*/
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('솟아라 엔돌핀이여!', 0.3, 4);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('정신적 스트레스', 0.4, 4);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('활기찬 하루', 0.6, 4);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('신나는', 0.7, 4);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('기운없는', 0.8, 4);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('지친 하루 끝에서', 0.8, 4);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('시체가 되고 싶어', 0.3, 4);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('아무것도 하기 싫어', 0.8, 4);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('번아웃 증후군', 0.5, 4);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('기분전환이 필요해', 0.7, 4);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('하늘을 날아갈 것 같은', 0.3, 4);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('설레는', 0.1, 4);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('웃음이 나오는', 0.7, 4);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('색다른 것을 하고 싶은', 0.6, 4);
    /*명상*/
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('안정이 필요한', 0.8, 5);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('꿀꿀한', 0.3, 5);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('하루의 마무리', 0.5, 5);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('마음이 뒤숭숭해', 0.1, 5);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('생각이 생각을 불러오는', 0.45, 5);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('너무 신이나', 0.3, 5);
INSERT INTO fragraph.t_tag(name, weight, "categoryId") VALUES('명상이 필요한', 0.2, 5);
    
/*Music*/
INSERT INTO fragraph.t_music(url, created_at, updated_at, content_length) VALUES('1.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);
INSERT INTO fragraph.t_music(url, created_at, updated_at, content_length) VALUES('2.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);
INSERT INTO fragraph.t_music(url, created_at, updated_at, content_length) VALUES('3.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);
INSERT INTO fragraph.t_music(url, created_at, updated_at, content_length) VALUES('4.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);
INSERT INTO fragraph.t_music(url, created_at, updated_at, content_length) VALUES('5.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);

/*Video*/
INSERT INTO fragraph.t_video(url, created_at, updated_at, content_length) values('1.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);
INSERT INTO fragraph.t_video(url, created_at, updated_at, content_length) values('2.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);
INSERT INTO fragraph.t_video(url, created_at, updated_at, content_length) values('3.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);
INSERT INTO fragraph.t_video(url, created_at, updated_at, content_length) values('4.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);
INSERT INTO fragraph.t_video(url, created_at, updated_at, content_length) values('5.jpg', '2017-06-26 02:31:29', '2017-06-26 02:31:29', 300);
>>>>>>> 3897a8988c3a23b737888c9840959779a5855335
