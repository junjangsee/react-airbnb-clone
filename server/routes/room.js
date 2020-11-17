var express = require('express');
var router = express.Router();

const room = {
  id: 1,
  hostId: 1,
  type: '아파트 전체',
  location: {
    city: '서울특별시',
    address: '송파구',
    country: '한국',
    latitude: '242',
    longitude: '635',
  },
  description:
    '★코로나19 예방을 위해 전문업체를 통해 살균/소독을 실시하고 있습니다. <br /> <br /> ★NO청소비 NO추가비용! 깔끔하게 숙박비용만 내고 이용하세요. <br /> <br /> 따뜻한 햇볕이 잘드는 고층에 위치한 조용한 방입니다. 혼자 여유로이 머물다 가실 분들을 위해 아늑하게 준비했습니다. :) <br /> <br /> <span>숙소</span> <br /> 종합운동장역 2분, 잠실새내역 5분거리에 위치했습니다. 주요상권에 위치해 근처 병원, 약국, 편의점, 카페 등 접근성이 용이합니다. <br /> <br /> <span>게스트 이용 가능 공간/시설</span> <br />집 전체를 게스트가 온전히 사용하실 수 있는 단독하우스 입니다.<br /> <br /> <span>기타 주의사항</span> <br /> 게스트의 안전을 위해 에어비앤비 이외의 별도 메신저를 통해 연락을 강요하지 않습니다. 오로지 에어비앤비를 통해서만 연락을 주고 받습니다.',
  kinds: {
    people: 1,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
  },
  sale: {
    startDate: '11월 8일',
    endDate: '11월 20일',
    discount: '10%',
  },
  reviewers: [
    {
      id: 1,
      nickname: 'Mark',
      thumbnail:
        'https://images.unsplash.com/photo-1549913772-820279f909b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description: 'very good',
      date: '2020년 11월',
      score: 3,
    },
    {
      id: 2,
      nickname: '고석진',
      thumbnail:
        'https://images.unsplash.com/photo-1605133104058-6fac9b38f522?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description:
        '위치가 너무너무 좋았습니다 숙소도 사진만큼 이뻤구용 넷플까지 있으니 완벽했던것같아욤 추천합니댠!!',
      date: '2020년 9월',
      score: 2,
    },
    {
      id: 3,
      nickname: '박관용',
      thumbnail:
        'https://images.unsplash.com/photo-1549913772-820279f909b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description:
        '숙소 위치도 좋고, 친절하게 안내 해주셨습니다 TV가 커서 숙소에서 쉬기에 좋았고, 호스트분께서 궁금한 부분에 대해 바로바로 답변 주셔서 좋았습니다. 숙소는 깨끗한 편이었지만, 다소 건조했습니다.',
      date: '2020년 11월',
      score: 5,
    },
    {
      id: 4,
      nickname: '꼬북칩',
      thumbnail:
        'https://images.unsplash.com/photo-1604928106847-96c6f306b722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description:
        '아기자기한 디자인과 신속한 응답이 좋았어요! 대구시내랑 근처여서 접근성도 좋았어요!! 편히쉬다갑니다!!',
      date: '2020년 11월',
      score: 1,
    },
    {
      id: 5,
      nickname: '가습기',
      thumbnail:
        'https://images.unsplash.com/photo-1605043269924-32c9b0226efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description:
        '인테리어 짱짱입니다. 집도 깨끗하고 연락도 바로바로 되고 뷰도 좋습니다 교통도 편했네요 다음에 또 이용하고 싶어요',
      date: '2019년 3월',
      score: 3,
    },
  ],
  bedCase: [
    {
      id: 1,
      place: '1번 침실',
      //   icon: bed,
      description: '퀸사이즈 침대 1개',
    },
    {
      id: 2,
      place: '공용 공간',
      //   icon: blanket,
      description: '요와 이불 1개',
    },
  ],
  facilities: [
    {
      id: 1,
      //   icon: kitchen,
      description: '주방',
    },
    {
      id: 2,
      //   icon: wifi,
      description: '무선 인터넷',
    },
    {
      id: 3,
      //   icon: elevator,
      description: '엘리베이터',
    },
    {
      id: 4,
      //   icon: notebook,
      description: '노트북 작업 공간',
    },
    {
      id: 5,
      //   icon: necessary,
      description: '필수품목',
    },
  ],
  roomInfos: [
    {
      id: 1,
      title: '집 전체',
      description: '아파트 전체를 단독으로 사용하시게 됩니다.',
      //   icon: houseall,
      more: null,
    },
    {
      id: 2,
      title: '청결 강화',
      description:
        '에어비앤비의 강화된 5단계 청소 절차를 준수하겠다고 동의한 호스트입니다.',
      //   icon: clean,
      more: '자세히 알아보기',
    },
    {
      id: 3,
      title: '셀프 체크인',
      description: '키패드를 이용해 체크인하세요.',
      //   icon: selfcheckin,
      more: null,
    },
    {
      id: 4,
      title: '체크인 5일 전까지 수수료 없이 취소 가능',
      description: null,
      //   icon: notFees,
      more: null,
    },
    {
      id: 5,
      title: '숙소 이용 규칙',
      description:
        '유아(24개월 미만) 동반에 적합하지 않은 숙소이며, 반려동물 동반, 파티, 흡연이 금지됩니다.',
      //   icon: roomRule,
      more: '세부 정보 보기',
    },
  ],
  roomTitle:
    '[장기거주환영] Free WiFi / 종합운동장 2분, 잠실새내 5분! 아늑한 갬성 하우스',
  reviewers: [
    {
      id: 1,
      nickname: 'Mark',
      thumbnail:
        'https://images.unsplash.com/photo-1549913772-820279f909b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description: 'very good',
      date: '2020년 11월',
      score: 3,
    },
    {
      id: 2,
      nickname: '고석진',
      thumbnail:
        'https://images.unsplash.com/photo-1605133104058-6fac9b38f522?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description:
        '위치가 너무너무 좋았습니다 숙소도 사진만큼 이뻤구용 넷플까지 있으니 완벽했던것같아욤 추천합니댠!!',
      date: '2020년 9월',
      score: 2,
    },
    {
      id: 3,
      nickname: '박관용',
      thumbnail:
        'https://images.unsplash.com/photo-1549913772-820279f909b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description:
        '숙소 위치도 좋고, 친절하게 안내 해주셨습니다 TV가 커서 숙소에서 쉬기에 좋았고, 호스트분께서 궁금한 부분에 대해 바로바로 답변 주셔서 좋았습니다. 숙소는 깨끗한 편이었지만, 다소 건조했습니다.',
      date: '2020년 11월',
      score: 5,
    },
    {
      id: 4,
      nickname: '꼬북칩',
      thumbnail:
        'https://images.unsplash.com/photo-1604928106847-96c6f306b722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description:
        '아기자기한 디자인과 신속한 응답이 좋았어요! 대구시내랑 근처여서 접근성도 좋았어요!! 편히쉬다갑니다!!',
      date: '2020년 11월',
      score: 1,
    },
    {
      id: 5,
      nickname: '가습기',
      thumbnail:
        'https://images.unsplash.com/photo-1605043269924-32c9b0226efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description:
        '인테리어 짱짱입니다. 집도 깨끗하고 연락도 바로바로 되고 뷰도 좋습니다 교통도 편했네요 다음에 또 이용하고 싶어요',
      date: '2019년 3월',
      score: 3,
    },
  ],
};

router.get('/', function (req, res, next) {
  res.json(room);
});

module.exports = router;
