import houseall from '../../images/houseall.svg';
import clean from '../../images/clean.svg';
import selfcheckin from '../../images/selfcheckin.svg';
import notFees from '../../images/notFees.svg';
import roomRule from '../../images/roomRule.svg';

const roomInfos = [
  {
    id: 1,
    title: '집 전체',
    description: '아파트 전체를 단독으로 사용하시게 됩니다.',
    icon: houseall,
    more: null,
  },
  {
    id: 2,
    title: '청결 강화',
    description:
      '에어비앤비의 강화된 5단계 청소 절차를 준수하겠다고 동의한 호스트입니다.',
    icon: clean,
    more: '자세히 알아보기',
  },
  {
    id: 3,
    title: '셀프 체크인',
    description: '키패드를 이용해 체크인하세요.',
    icon: selfcheckin,
    more: null,
  },
  {
    id: 4,
    title: '체크인 5일 전까지 수수료 없이 취소 가능',
    description: null,
    icon: notFees,
    more: null,
  },
  {
    id: 5,
    title: '숙소 이용 규칙',
    description:
      '유아(24개월 미만) 동반에 적합하지 않은 숙소이며, 반려동물 동반, 파티, 흡연이 금지됩니다.',
    icon: roomRule,
    more: '세부 정보 보기',
  },
];

export default roomInfos;
