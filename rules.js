// 앱 버전 (package.json과 동기화)
const APP_VERSION = '1.2.0';

// 기본 거래 분류 규칙
const DEFAULT_CATEGORY_RULES = [
  { cat: '0. 수입', patterns: ['payoneer','airbnb','한패스','캐시백','이자','환급','국세환급금','계약금','선금','잔금','수수료','수익','오늘의집','김지은','김재언','태진희','박철형','성지현','문연희','이영민','안진영','카카오017','오집'], excluded: false },
  { cat: '1. 월세', patterns: ['월세','채수자','홍병삼'], excluded: false },
  { cat: '2. 청소비', patterns: ['청소비','청소','호미아','원클린','무무베딩','석준우'], excluded: false },
  { cat: '3. 유틸리티', patterns: ['전기','가스','코원에너지','dlive','예스코','sk브로드밴드','skb','인터넷'], excluded: false },
  { cat: '4. 세금', patterns: ['세금','등록면허세','소득세','지방소득세','잠실세무서','성북세무서','서울등록이성경'], excluded: false },
  { cat: '5. 소모품', patterns: ['소모품','다이소','쿠팡','올리브','버킷플레이스','우아한형제들','gs','지에스','k할인마트','비품','전구'], excluded: false },
  { cat: '6. 사업운영비', patterns: ['사업운영비','세무','칠도','pricelabs','pricelab','아키스케치','archisketch','노션','notion','notta','심성환','이인희','길민제','반장창고','스토르','화과자','설선물','청소커피','촬영'], excluded: false },
  { cat: '7. 식비', patterns: ['식비','식음','커피','스타벅스','버거','치킨','밥','칼국수','분식','타코','초밥','닭갈비','호떡','김밥','카페','홀튼','커피빈','grof','노브랜드버거','올디스타코','텅','리와인드','미분당','본죽','씨제이올리브'], excluded: false },
  { cat: '8. 교통비', patterns: ['택시','카카오t','교통'], excluded: false },
  { cat: '9. 부가세', patterns: ['부가세','세이프박스','부가세박스'], excluded: false },
  { cat: '10. 기타', patterns: ['기타','전상길','상품권','리뷰','후기','밴','콜밴'], excluded: false },
  { cat: '구매대행', patterns: ['구매대행','매입','조화','조명','포스터','촬영 준비'], excluded: false },
  { cat: '99.정산', patterns: ['급여','정산','수익 배분'], excluded: true },
];

const DEFAULT_CATEGORIES = ['0. 수입','1. 월세','2. 청소비','3. 유틸리티','4. 세금','5. 소모품','6. 사업운영비','7. 식비','8. 교통비','9. 부가세','10. 기타','구매대행','99.정산'];

const DEFAULT_BRANDS = ['단청','피카','730'];

// localStorage에서 규칙 로드 (없으면 기본값 사용)
function loadCategoryRules() {
  const saved = localStorage.getItem('CATEGORY_RULES');
  return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT_CATEGORY_RULES));
}

function saveCategoryRules(rules) {
  localStorage.setItem('CATEGORY_RULES', JSON.stringify(rules));
}

function resetCategoryRules() {
  localStorage.removeItem('CATEGORY_RULES');
}

// 현재 활성 규칙
let CATEGORY_RULES = loadCategoryRules();
const CATEGORIES = DEFAULT_CATEGORIES;
const BRANDS = DEFAULT_BRANDS;

// 합산에서 제외할 카테고리 목록
function getExcludedCategories() {
  return CATEGORY_RULES.filter(r => r.excluded).map(r => r.cat);
}
