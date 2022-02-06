/**
 * 보통은 객체가 인터페이스에 정의되지 않는 속성값을 가지고 있어도 할당이 가능합니다.
 * 단, 리터럴로 값을 초기화하는 경우에는 인터페이스에 정의되지 않은 속성값이 있으면 타입 에러가 발생됩니다.
 * 다음은 인터페이스에 정의되지 않은 속성값을 할당하는 예다.
 */

interface Person {
  readonly name: string;
  age?: number;
}

const p1: Person = {
  name: 'mike',
  // birthday: '1997-01-01',  // 정의되지 않은 속성으로 리터럴을 입력했으므로 타입 에러가 발생된다.
};

const p2 = {
  name: 'mike',
  birtyday: '1997-01-01',
};

const p3: Person = p2; // 정의되지 않은 속성 birtyday를 포함하지만 타입 에러가 발생하지 않는다.
// 그 이유는 p3 타입이 p2의 타입을 포함하는 더 큰 타입이기 때문이다.
// 자세한 설명은 '타입 호환성'을 살펴보자
// 이러한 부분은 개발자들이 실수하기 쉬운 부분이다.
