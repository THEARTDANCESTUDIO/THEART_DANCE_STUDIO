import { Language } from '../types';

export const translations: Record<Language, any> = {
  en: {
    nav: { dancers: 'Dancers', classes: 'Classes', tickets: 'Tickets', store: 'Store', about: 'About', account: 'My Account' },
    hero: { subtitle: 'Premium Dance Studio', title1: "We Don't Need", title2: 'A Stage To', title3: 'Dance', cta: 'Learn More' },
    split: { viewProfile: 'View Profile', schedule: 'Schedule', viewSchedule: 'View Full Schedule' },
    tour: { title: 'Take a Virtual Tour\nof Our Studio!', cta: 'Launch Tour' },
    footer: { faq: 'FAQ', contact: 'Contact Us', rights: 'All Rights Reserved.', location: 'Dance Studio Head Office' },
    ai: { initial: "Hey there! I'm Artie. Ask me about our classes, schedule, or pricing." }
  },
  ko: {
    nav: { dancers: '강사 소개', classes: '수업', tickets: '수강권', store: '스토어', about: '소개', account: '내 계정' },
    hero: { subtitle: '프리미엄 댄스 스튜디오', title1: "무대 따위는", title2: '필요', title3: '없어', cta: '자세히 보기' },
    split: { viewProfile: '프로필 보기', schedule: '스케줄', viewSchedule: '전체 스케줄 보기' },
    tour: { title: '스튜디오\n가상 투어 시작하기', cta: '투어 시작' },
    footer: { faq: '자주 묻는 질문', contact: '문의하기', rights: '모든 권리 보유.', location: '댄스 스튜디오 본사' },
    ai: { initial: "안녕하세요! 아티입니다. 수업, 시간표, 가격에 대해 물어보세요." }
  },
  ja: {
    nav: { dancers: 'ダンサー', classes: 'クラス', tickets: 'チケット', store: 'ストア', about: '紹介', account: 'マイアカウント' },
    hero: { subtitle: 'プレミアムダンススタジオ', title1: "ステージなんて", title2: '要ら', title3: 'ない', cta: '詳細を見る' },
    split: { viewProfile: 'プロフィールを見る', schedule: 'スケジュール', viewSchedule: '全スケジュールを見る' },
    tour: { title: 'スタジオの\nバーチャルツアー', cta: 'ツアー開始' },
    footer: { faq: 'よくある質問', contact: 'お問い合わせ', rights: 'All Rights Reserved.', location: 'ダンススタジオ 本社' },
    ai: { initial: "こんにちは！アーティです。クラス、スケジュール、料金についてお尋ねください。" }
  },
  zh: {
    nav: { dancers: '舞者', classes: '课程', tickets: '票务', store: '商店', about: '关于', account: '我的账户' },
    hero: { subtitle: '高端舞蹈工作室', title1: "我们不需要", title2: '舞台', title3: '起舞', cta: '了解更多' },
    split: { viewProfile: '查看个人资料', schedule: '课程表', viewSchedule: '查看完整课程表' },
    tour: { title: '参观我们的\n虚拟工作室', cta: '开始参观' },
    footer: { faq: '常见问题', contact: '联系我们', rights: '保留所有权利。', location: '舞蹈工作室 总部' },
    ai: { initial: "你好！我是Artie。询问有关课程、时间表或价格的信息。" }
  }
};