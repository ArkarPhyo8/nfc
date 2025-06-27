export type themeDataType = {
  id: string;
  name: string;
};

export type userDataType = {
  id: string;
  username: string;
  age: number;
  address: string;
  email: string;
  brandLogo: string;
  brandName: string;
  fb_link: string;
  youtube_link: string;
  instagram_link: string;
  tiktok_link: string;
  WebUUID: string;
  phoneNo: string;
};

export type cardDataType = {
  id: string;
  cardName: string;
  cardUUID: string;
  cardType: string;
  status: boolean;
  user: userDataType;
  themes: string;
};
