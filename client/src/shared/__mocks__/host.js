import myProfile from '../../images/myProfile.jpeg';

const host = {
  firstname: '준형',
  lastname: '김',
  joinDate: '2020년 11월',
  thumbnail: myProfile,
  isSuperHost: true,
  isAuth: true,
  description:
    '국내/해외 여행을 다니면서 에어비앤비 게스트로서 좋았던 기억을 되살려 소박하게 운영하고 있습니다 :) 여행이나 비즈니스 목적으로 서울을 방문하시는 분들 중에서, 모텔은 싫고 또 호텔은 너무 부담스러운 분들을 위해 가성비 갑 숙소를 제공하고 있습니다.',
  explanations: [
    {
      id: 1,
      title: '숙박 중 게스트와의 교류',
      description: '절대 호스트와 마주칠 일이 없으니 마음 편히 지내세요!',
    },
    {
      id: 2,
      title: '준형님은 슈퍼호스트입니다.',
      description:
        '슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.',
    },
  ],
  statuses: [
    {
      id: 1,
      title: '언어',
      result: 'English, 한국어',
    },
    {
      id: 2,
      title: '응답률',
      result: '100%',
    },
    {
      id: 3,
      title: '응답 시간',
      result: '1시간 이내',
    },
  ],
};

export default host;
