// ジェネリクス型の基本的な書き方

export type User<T = '東京都' | '大阪府' | '北海道'> = {
  name: string;
  homeTown: T;
};

type Japanease = User<'東京都' | '大阪府' | '北海道'>;
type American = User<'NY' | 'CA' | 'DC'>;

const userA: Japanease = {
  name: '山田',
  homeTown: '東京都',
};

const userB: American = {
    name: 'Johony',
    homeTown: "CA",
};

const userC: User = {
    name: '太郎',
    homeTown: "大阪府"
};
